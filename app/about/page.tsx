import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Northstar Countertops</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Quality comes first - serving the amazing chefs of Newmarket with precision-crafted marble and granite countertops.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                For our chefs at home - quality comes first. Because we are dedicated to creating quality marble and granite countertops for the amazing chefs in Newmarket, our products are just the right fit.
              </p>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                This is our promise to our customers and a daily reminder to ourselves. We offer full service from choosing the right material for your new kitchen, creating your countertop to the exact measure, and installing your countertop.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Our commitment to excellence means every project receives the attention and craftsmanship it deserves, ensuring your countertops are not just beautiful, but built to last.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
                alt="Marble countertop installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Quality First</h3>
              <p className="text-secondary">
                Every countertop is crafted with precision and attention to detail, ensuring lasting beauty and durability.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Precision Fit</h3>
              <p className="text-secondary">
                Custom measurements and expert installation ensure your countertops are just the right fit for your space.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Customer Care</h3>
              <p className="text-secondary">
                From consultation to installation, we&apos;re dedicated to providing exceptional service to every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience the Northstar difference. Let&apos;s create the perfect countertops for your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="tel:416-356-8269"
              className="border-2 border-white text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Call: (416) 356-8269
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}