"use client"
import { submitLead } from '@/app/actions/submitLead';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-semibold mb-6">Request a Quote</h1>
      <p className="text-neutral-600 mb-8">
        Tell us a bit about your project and we &apos;ll get back within 1-2 business days.
      </p>

      <form
        action={async (formData) => {
          await submitLead(formData);
        }}
        className="grid gap-4"
      >
        {/* Honeypot (hidden) */}
        <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className="border rounded-xl p-3" />
          <input name="email" required type="email" placeholder="Email" className="border rounded-xl p-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input name="phone" placeholder="Phone" className="border rounded-xl p-3" />
          <input name="projectType" placeholder="Project type (e.g., kitchen, table)" className="border rounded-xl p-3" />
        </div>

        <textarea name="message" required placeholder="Project details"
                  className="border rounded-xl p-3 min-h-[140px]" />

        {/* capture page url */}
        <input type="hidden" name="pageURL" value="/contact" />

        <button className="bg-black text-white rounded-xl py-3 px-5 w-fit">Send</button>
      </form>
    </main>
  );
}
