"use client";

import { submitLead } from "@/app/actions/submitLead";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
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
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8 md:p-12">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Thank you for your inquiry!</h1>
            <p className="text-lg mb-8">
              We&apos;ve received your project details and will get back to you within 1-2 business days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setIsSubmitting(false);
                setError(null);
              }}
              className="bg-primary text-white rounded-xl py-3 px-8 font-medium hover:bg-opacity-90 hover:cursor-pointer hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Request a Free Quote Today
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-black">
              Complete the form below and a representative will contact you shortly to arrange your free estimate
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6" aria-busy={isSubmitting}>
              {/* Honeypot (hidden) */}
              <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    maxLength={254}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    maxLength={32}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <input
                    id="projectType"
                    name="projectType"
                    placeholder="e.g., kitchen, bathroom, table"
                    maxLength={120}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project, dimensions, material preferences, timeline, etc."
                  minLength={5}
                  maxLength={2000}
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-vertical"
                  disabled={isSubmitting}
                />
              </div>

              {/* capture page url */}
              <input type="hidden" name="pageURL" value="/contact" />

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p role="status" aria-live="polite" className="text-red-600 text-sm">
                    {error}
                  </p>
                </div>
              )}

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    rounded-xl py-4 px-8 text-lg font-medium transition-all duration-200 flex items-center gap-3
                    ${isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-opacity-90 hover:shadow-xl cursor-pointer transform hover:scale-105"}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending Request…
                    </>
                  ) : (
                    "Get My Free Quote"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="text-center mt-12 p-6 bg-background-dark rounded-xl">
            <p className="mb-4">
              Need immediate assistance? Call us directly:
            </p>
            <a 
              href="tel:416-356-8269" 
              className="inline-flex items-center gap-2 bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (416) 356-8269
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
