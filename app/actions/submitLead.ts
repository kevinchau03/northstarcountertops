'use server';

import { z } from 'zod';

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().default(''),
  projectType: z.string().optional().default(''),
  message: z.string().min(5),
  pageURL: z.string().optional().default(''),
  // Honeypot for bots
  company: z.string().optional().default(''),
});

export async function submitLead(formData: FormData) {
  const raw = {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    projectType: formData.get('projectType')?.toString() || '',
    message: formData.get('message')?.toString() || '',
    pageURL: formData.get('pageURL')?.toString() || '',
    company: formData.get('company')?.toString() || '',
  };

  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: 'Invalid form data.' };
  }

  // simple anti-spam: if honeypot filled, drop
  if (parsed.data.company) return { ok: true };

  const payload = {
    secret: process.env.LEADS_WEBHOOK_SECRET!,
    ...parsed.data,
    source: 'website',
  };

  const res = await fetch(process.env.LEADS_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // avoid caching on edge
    cache: 'no-store',
    body: JSON.stringify(payload),
  });

  const json = await res.json().catch(() => ({ ok: false }));
  return json?.ok ? { ok: true } : { ok: false, error: 'Submission failed.' };
}
