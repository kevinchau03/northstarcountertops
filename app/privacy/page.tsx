import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/privacy");

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm uppercase tracking-wide mb-6">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              How we protect and handle your personal information
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: October 18, 2026
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-border/20">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  Introduction
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Northstar Countertops operates northstarcountertops.ca in Ontario. This policy explains how we handle personal information collected through our website, inquiries, and countertop services. Our privacy practices are guided by the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian laws.
                  </p>
                  <p>
                    When you submit an inquiry, we use the information you provide to respond and help with your project. Simply browsing this website does not constitute consent to unrelated uses of your information. We explain new purposes and obtain additional consent where required by law.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  Information We Collect
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">Personal Information</h3>
                    <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Fill out contact forms or request quotes</li>
                      <li>Schedule consultations or appointments</li>
                      <li>Call or email us directly</li>
                      <li>Communicate with us about an existing project</li>
                    </ul>
                    <p className="mt-3">This information may include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name, email address, phone number if provided, and project address when needed to deliver services</li>
                      <li>Project type, message, project details, and preferences you choose to share</li>
                      <li>Correspondence and records needed to manage your inquiry or project</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">Automatically Collected Information</h3>
                    <p className="mb-3">Our hosting provider may process technical request logs to deliver and secure the website. When you submit the contact form, we also send the following technical information with your inquiry to our lead-processing service:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and browser information</li>
                      <li>The inquiry page and submission date and time</li>
                      <li>Referring website information</li>
                      <li>Browser user-agent information, which may include device and operating system details</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  How We Use Your Information
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide quotes</li>
                    <li>Schedule and conduct consultations</li>
                    <li>Provide our countertop services</li>
                    <li>Send project updates and communications</li>
                    <li>Operate and secure the website, prevent spam, and troubleshoot errors</li>
                    <li>Comply with legal obligations</li>
                    <li>Send promotional emails or texts only with consent or another basis permitted by Canada’s Anti-Spam Legislation (CASL). An inquiry does not automatically subscribe you to marketing. Promotional messages will identify us and include an unsubscribe method; requests will be honoured without delay and within 10 business days.</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  Information Sharing
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We do not sell personal information. We disclose information only for the purposes described here, with your consent, or as permitted or required by law:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service providers:</strong> Our hosting, lead-processing, customer-management, and email providers may process information to deliver the website, receive inquiries, and support project communications. Contact form submissions include the inquiry and technical information described above. Privacy emails sent to our Gmail address are processed by Google. Providers are to use information only for the services they perform for us, with appropriate privacy protections.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                    <li><strong>Business transactions:</strong> Information may be disclosed for a proposed or completed business transaction only under applicable legal conditions, including confidentiality and purpose restrictions.</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">5</span>
                  </div>
                  Data Security
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                  <p>
                    Access should be limited to people and providers who need information for their work. Please do not submit payment card details, government identification, or other sensitive information through the inquiry form. If a breach creates a real risk of significant harm, we will notify affected individuals and report it to the Office of the Privacy Commissioner of Canada as soon as feasible, and keep breach records as required by law.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">6</span>
                  </div>
                  Your Rights
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Ask us to delete information that is no longer needed, subject to legal, contractual, and legitimate recordkeeping requirements</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p>
                    Contact our Privacy Contact below to request access, correction, deletion, or withdrawal of consent, or to make a complaint. We may need to verify your identity using only information reasonably necessary for that purpose. We generally respond to access requests within 30 calendar days, subject to legally permitted extensions; we will explain any extension, applicable fee, or lawful refusal and available recourse. Withdrawing consent may limit the services we can provide, and we will explain the consequences.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">7</span>
                  </div>
                  Cookies and Tracking
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    The current website does not include advertising trackers or a dedicated analytics tool. Hosting services may process technical information needed to deliver and secure the site. You can manage cookies through your browser. If we introduce optional tracking, we will explain its purposes and request consent where required before enabling it. Images and links from services such as Google, Unsplash, Facebook, and Instagram may involve those services when your browser requests their content or you follow a link; their own privacy policies apply to their independent activities.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6">Retention and processing locations</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>We retain inquiry and project information only as long as needed for the purpose collected, including responding to inquiries, completing projects, warranty support, legal and accounting requirements, and resolving disputes. Retention depends on the type of record and applicable obligations. Information no longer needed should be securely deleted or anonymized; backup copies may remain until their scheduled deletion.</p>
                  <p>Our service providers may store or process information outside Ontario or Canada, including in the United States. Information processed abroad may be accessible to courts, law enforcement, or other authorities under local laws. We remain accountable for information handled on our behalf. Contact us for details about providers, processing locations, or retention applicable to your records.</p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">8</span>
                  </div>
                  Contact Us
                </h2>
                <div className="bg-surface/50 rounded-2xl p-6 border border-border/20">
                  <p className="text-gray-700 mb-4">
                    Our Privacy Contact handles privacy questions, requests, and complaints. Contact us by email, phone, or post:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Privacy Contact — Northstar Countertops</strong></p>
                    <p>54 Howden Rd B, Scarborough, ON M1R 3E4, Canada</p>
                    <p>Phone: <a href="tel:416-356-8269" className="text-primary hover:text-primary-600 font-semibold">(416) 356-8269</a></p>
                    <p>Email: <a href="mailto:nscountertops@gmail.com" className="text-primary hover:text-primary-600 font-semibold">nscountertops@gmail.com</a></p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6">Privacy complaints</h2>
                <p className="text-gray-700 leading-relaxed">Please raise concerns with our Privacy Contact so we can investigate and respond. You may also contact the <a href="https://www.priv.gc.ca/en/report-a-concern/" className="text-primary hover:text-primary-600 font-semibold underline">Office of the Privacy Commissioner of Canada</a> about our handling of personal information.</p>
              </section>

              {/* Changes to Policy */}
              <section className="border-t border-border/20 pt-8">
                <h2 className="text-xl font-bold text-secondary mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We will post updates here and revise the date above. For material changes, we will provide appropriate notice and obtain fresh consent for new uses or disclosures where required. A policy update does not itself authorize a new use of previously collected information.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
