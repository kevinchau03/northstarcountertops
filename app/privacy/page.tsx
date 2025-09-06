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
              Last updated: September 6, 2025
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
                    At Northstar Countertops, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    By using our website or services, you consent to the data practices described in this policy.
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
                      <li>Subscribe to our newsletter or updates</li>
                    </ul>
                    <p className="mt-3">This information may include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Project details and preferences</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">Automatically Collected Information</h3>
                    <p className="mb-3">When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website information</li>
                      <li>Device and operating system information</li>
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
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Send occasional marketing communications (with your consent)</li>
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
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting business</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger or sale, customer information may be transferred to the new entity</li>
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
                    We regularly review our security practices and update them as necessary to maintain the protection of your information.
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
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided below.
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
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
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
                    If you have questions about this Privacy Policy or wish to exercise your rights regarding your personal information, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Northstar Countertops</strong></p>
                    <p>Phone: <a href="tel:416-356-8269" className="text-primary hover:text-primary-600 font-semibold">(416) 356-8269</a></p>
                    <p>Email: <a href="mailto:privacy@northstarcountertops.com" className="text-primary hover:text-primary-600 font-semibold">privacy@northstarcountertops.com</a></p>
                  </div>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="border-t border-border/20 pt-8">
                <h2 className="text-xl font-bold text-secondary mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
