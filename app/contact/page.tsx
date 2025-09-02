"use client"
import { submitLead } from '@/app/actions/submitLead';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      await submitLead(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You can add error state handling here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center bg-green-50 border border-green-200 rounded-xl p-8">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
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
            }}
            className="bg-primary text-white rounded-xl py-3 px-6 hover:bg-opacity-90 transition-all duration-200"
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
        Tell us a bit about your project and we&apos;ll get back within 1-2 business days.
      </p>

      <form
        action={handleSubmit}
        className="grid gap-4"
      >
        {/* Honeypot (hidden) */}
        <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-4">
          <input 
            name="name" 
            required 
            placeholder="Name" 
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
            disabled={isSubmitting}
          />
          <input 
            name="email" 
            required 
            type="email" 
            placeholder="Email" 
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
            disabled={isSubmitting}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input 
            name="phone" 
            placeholder="Phone" 
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
            disabled={isSubmitting}
          />
          <input 
            name="projectType" 
            placeholder="Project type (e.g., kitchen, table)" 
            className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
            disabled={isSubmitting}
          />
        </div>

        <textarea 
          name="message" 
          required 
          placeholder="Project details"
          className="border rounded-xl p-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
          disabled={isSubmitting}
        />

        {/* capture page url */}
        <input type="hidden" name="pageURL" value="/contact" />

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`
            rounded-xl py-3 px-6 w-fit font-medium transition-all duration-200 flex items-center gap-2
            ${isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-primary text-white hover:bg-opacity-90 hover:shadow-lg cursor-pointer transform hover:scale-105'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send'
          )}
        </button>
      </form>
    </main>
  );
}
