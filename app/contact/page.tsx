"use client";

import { submitLead } from "@/app/actions/submitLead";
import { useRef, useState } from "react";
import Link from "next/link";

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 100) return "Name must be less than 100 characters";
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) return "Name can only contain letters, spaces, hyphens, and apostrophes";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    if (!email.includes("@")) return "Email must contain @ symbol";
    if (email.length > 254) return "Email is too long";
    // More comprehensive email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return undefined; // Phone is optional
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) return "Phone number must be at least 10 digits";
    if (digitsOnly.length > 15) return "Phone number is too long";
    // Basic North American phone number format validation
    const phoneRegex = /^[\+]?[1]?[\s\-\(\)]?[0-9]{3}[\s\-\(\)]?[0-9]{3}[\s\-]?[0-9]{4}$/;
    if (!phoneRegex.test(phone.trim())) return "Please enter a valid phone number (e.g., (416) 356-8269)";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Project details are required";
    if (message.trim().length < 10) return "Please provide more details (at least 10 characters)";
    if (message.trim().length > 2000) return "Project details must be less than 2000 characters";
    return undefined;
  };

  const validateForm = (formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const nameError = validateName(name);
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(email);
    if (emailError) errors.email = emailError;

    const phoneError = validatePhone(phone);
    if (phoneError) errors.phone = phoneError;

    const messageError = validateMessage(message);
    if (messageError) errors.message = messageError;

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setError(null);
    setValidationErrors({});

    try {
      const formData = new FormData(e.currentTarget);
      
      // Validate form data
      const errors = validateForm(formData);
      
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        setIsSubmitting(false);
        return;
      }

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
                setValidationErrors({});
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
                      className={`w-full border-2 rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 transition-all duration-300 bg-surface/30 hover:bg-surface/50 ${
                        validationErrors.name
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                      disabled={isSubmitting}
                      onBlur={(e) => {
                        const error = validateName(e.target.value);
                        setValidationErrors(prev => ({ ...prev, name: error }));
                      }}
                    />
                    {validationErrors.name && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.name}
                      </p>
                    )}
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
                      className={`w-full border-2 rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 transition-all duration-300 bg-surface/30 hover:bg-surface/50 ${
                        validationErrors.email
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                      disabled={isSubmitting}
                      onBlur={(e) => {
                        const error = validateEmail(e.target.value);
                        setValidationErrors(prev => ({ ...prev, email: error }));
                      }}
                    />
                    {validationErrors.email && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.email}
                      </p>
                    )}
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
                      type="tel"
                      placeholder="(416) 356-8269"
                      autoComplete="tel"
                      maxLength={32}
                      className={`w-full border-2 rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 transition-all duration-300 bg-surface/30 hover:bg-surface/50 ${
                        validationErrors.phone
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                          : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                      disabled={isSubmitting}
                      onBlur={(e) => {
                        const error = validatePhone(e.target.value);
                        setValidationErrors(prev => ({ ...prev, phone: error }));
                      }}
                    />
                    {validationErrors.phone && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.phone}
                      </p>
                    )}
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
                    minLength={10}
                    maxLength={2000}
                    rows={4}
                    className={`w-full border-2 rounded-xl p-4 text-secondary focus:outline-none focus:ring-2 transition-all duration-300 resize-vertical bg-surface/30 hover:bg-surface/50 ${
                      validationErrors.message
                        ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                        : "border-border focus:ring-primary/20 focus:border-primary"
                    }`}
                    disabled={isSubmitting}
                    onBlur={(e) => {
                      const error = validateMessage(e.target.value);
                      setValidationErrors(prev => ({ ...prev, message: error }));
                    }}
                  />
                  {validationErrors.message && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.message}
                    </p>
                  )}
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
