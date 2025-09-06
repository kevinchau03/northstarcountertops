"use server";

import { z } from "zod";
import { headers } from "next/headers";
import crypto from "crypto";

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email(),
  phone: z.string().trim().max(32).optional().default(""),
  projectType: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(5).max(2000),
  pageURL: z.string().trim().max(2048).optional().default(""),
  // Honeypot for bots
  company: z.string().optional().default(""),
});

type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitLead(formData: FormData): Promise<SubmitResult> {
  // Validate envs early and fail safely
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!secret || !url) {
    return { ok: false, error: "Server is misconfigured. Please try again later." };
  }

  // Extract & validate
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    projectType: formData.get("projectType")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    pageURL: formData.get("pageURL")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
  };

  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: "Invalid form data." };
  }

  // Simple anti-spam: drop if honeypot filled
  if (parsed.data.company) {
    return { ok: true };
  }

  // Helpful context for your webhook / CRM
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "";
  const userAgent = hdrs.get("user-agent") || "";
  const referrer = hdrs.get("referer") || "";

  const payload = {
    ...parsed.data,
    ip,
    userAgent,
    referrer,
    timestamp: new Date().toISOString(),
    source: "website",
  };

  const body = JSON.stringify({ secret, ...payload });

  // Sign request body so your webhook can verify authenticity
  const signature = crypto.createHmac("sha256", secret).update(body).digest("hex");

  // Fetch with timeout + small retry for transient failures
  const attempt = async (signal: AbortSignal) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Signature": signature,
      },
      cache: "no-store",
      body,
      signal,
    });

  for (let i = 0; i < 2; i++) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10_000); // 10s timeout

    try {
      const res = await attempt(controller.signal);
      clearTimeout(t);

      // Try to read JSON but don't explode if it's not JSON
      let okFlag = res.ok;
      if (res.headers.get("content-type")?.includes("application/json")) {
        const json = (await res.json().catch(() => ({}))) as { ok?: boolean };
        okFlag = okFlag && (json.ok ?? true);
      }

      if (okFlag) return { ok: true };

      // Non-200s: don't retry on 4xx
      if (res.status >= 400 && res.status < 500) {
        return { ok: false, error: "Submission failed. Please check your details." };
      }
      // else retry on 5xx/network
    } catch (_err) {
      console.error("Error submitting form:", _err);
      return { ok: false, error: "Network error. Please try again." };
    }
    // small backoff
    await new Promise((r) => setTimeout(r, 300));
  }

  return { ok: false, error: "Submission failed. Please try again." };
}
