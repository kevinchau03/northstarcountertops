"use client";

import { submitLead } from "@/app/actions/submitLead";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await submitLead(formData);
      if (res?.ok) {
        setIsSubmitted(true);
        formRef.current?.reset();
      } else {
        setError(res?.error ?? "Something went wrong. Please try again.");
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-3xl min-h-screen bg-background-light">
        <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-green-800 mb-2">Thank you for your inquiry!</h1>
          <p className="text-green-700 mb-6">
            We&apos;ve received your project details and will get back to you within 1-2 business days.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setIsSubmitting(false);
              setError(null);
            }}
            className="bg-primary text-white rounded-xl py-3 px-6 hover:bg-opacity-90 hover:cursor transition-all duration-200"
          >
            Submit Another Request
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-semibold mb-6">Request a Quote</h1>
      <p className="text-neutral-600 mb-8">
        Tell us a bit about your project and we&apos;ll get back within 1–2 business days.
      </p>

      <form action={handleSubmit} ref={formRef} className="grid gap-4" aria-busy={isSubmitting}>
        {/* Honeypot (hidden) */}
        <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Name"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
          />
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="Email"
            maxLength={254}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            maxLength={32}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
          />
          <input
            name="projectType"
            placeholder="Project type (e.g., kitchen, table)"
            maxLength={120}
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            disabled={isSubmitting}
          />
        </div>

        <textarea
          name="message"
          required
          placeholder="Project details"
          minLength={5}
          maxLength={2000}
          className="border rounded-xl p-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          disabled={isSubmitting}
        />

        {/* capture page url */}
        <input type="hidden" name="pageURL" value="/contact" />

        {error && (
          <p role="status" aria-live="polite" className="text-red-600 text-sm -mt-1">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            rounded-xl py-3 px-6 w-fit font-medium transition-all duration-200 flex items-center gap-2
            ${isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:bg-opacity-90 hover:shadow-lg cursor-pointer transform hover:scale-105"}
          `}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending…
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </main>
  );
}
