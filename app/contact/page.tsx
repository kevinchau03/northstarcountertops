"use client";

import { submitLead } from "@/app/actions/submitLead";
import { useRef, useState } from "react";
import Link from "next/link";

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
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">Thank you for your inquiry!</h1>
            <p className="text-lg mb-8 text-gray-700">
              We&apos;ve received your project details and will get back to you within 1-2 business days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setIsSubmitting(false);
                setError(null);
              }}
              className="bg-primary hover:bg-primary-600 text-white rounded-xl py-4 px-8 font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
              Free Consultation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Request Your Free
              <span className="block text-primary">Quote Today</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Complete the form below and a representative will contact you shortly to arrange your free estimate
            </p>
          </div>

          {/* Main Content - Side by Side Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Info Content */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border/20">
                <h3 className="text-2xl font-bold text-secondary mb-6">Why Choose Northstar?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">15+ Years Experience</h4>
                      <p className="text-gray-600 text-sm">Trusted expertise in custom countertop installation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Premium Materials</h4>
                      <p className="text-gray-600 text-sm">Marble, quartz, granite from trusted suppliers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Full Warranty</h4>
                      <p className="text-gray-600 text-sm">Comprehensive warranty on all installations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Fast Installation</h4>
                      <p className="text-gray-600 text-sm">Quick, clean installation with minimal disruption</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-surface to-white rounded-2xl shadow-lg p-8 border border-border/20">
                <h3 className="text-xl font-bold text-secondary mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-600 mb-6">Call us directly for urgent inquiries or questions</p>
                <a 
                  href="tel:416-356-8269" 
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (416) 356-8269
                </a>
              </div>

              {/* What Happens Next */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border/20">
                <h3 className="text-xl font-bold text-secondary mb-6">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-700">We&apos;ll contact you within 24 hours</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-700">Schedule your free consultation</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-700">Receive detailed quote & timeline</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-border/20 sticky top-28">
              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6" aria-busy={isSubmitting}>
                {/* Honeypot (hidden) */}
                <input name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-secondary">
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
                      className="w-full border-2 border-border rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-surface/30 hover:bg-surface/50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-secondary">
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
                      className="w-full border-2 border-border rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-surface/30 hover:bg-surface/50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-secondary">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      maxLength={32}
                      className="w-full border-2 border-border rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-surface/30 hover:bg-surface/50"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold mb-2 text-secondary">
                      Project Type
                    </label>
                    <input
                      id="projectType"
                      name="projectType"
                      placeholder="e.g., kitchen, bathroom, table"
                      maxLength={120}
                      className="w-full border-2 border-border rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-surface/30 hover:bg-surface/50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-secondary">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project, dimensions, material preferences, timeline, etc."
                    minLength={5}
                    maxLength={2000}
                    rows={4}
                    className="w-full border-2 border-border rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-vertical bg-surface/30 hover:bg-surface/50"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Privacy Notice */}
                <div className="bg-surface/30 rounded-xl p-4 border border-border/20">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    By submitting this form, you agree to our{" "}
                    <Link 
                      href="/privacy" 
                      className="text-primary hover:text-primary-600 font-semibold underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                    {" "}and consent to us contacting you about your project inquiry. We respect your privacy and will never share your information with third parties.
                  </p>
                </div>

                {/* capture page url */}
                <input type="hidden" name="pageURL" value="/contact" />

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                    <p role="status" aria-live="polite" className="text-red-600 font-medium text-sm">
                      {error}
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full rounded-xl py-4 px-6 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl
                      ${isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary-600 text-white hover:shadow-2xl cursor-pointer transform hover:scale-105"}
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
          </div>
        </div>
      </div>
    </div>
  );
}
