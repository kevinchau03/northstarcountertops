import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Northstar
            <span className="block text-white/90">Countertops</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            Quality comes first - serving the amazing chefs of Newmarket with precision-crafted marble and granite countertops.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-8">
                Crafting Excellence Since Day One
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  For our chefs at home - quality comes first. Because we are dedicated to creating quality marble and granite countertops for the amazing chefs in Newmarket, our products are just the right fit.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This is our promise to our customers and a daily reminder to ourselves. We offer full service from choosing the right material for your new kitchen, creating your countertop to the exact measure, and installing your countertop.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our commitment to excellence means every project receives the attention and craftsmanship it deserves, ensuring your countertops are not just beautiful, but built to last.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-primary hover:bg-primary-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Start Your Project
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
                alt="Marble countertop installation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Quality Guarantee</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              What Drives Us Daily
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/20 hover:border-primary/20 text-center hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every countertop is crafted with precision and attention to detail, ensuring lasting beauty and durability.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/20 hover:border-primary/20 text-center hover:-translate-y-2 md:mt-8">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">Precision Fit</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom measurements and expert installation ensure your countertops are just the right fit for your space.
              </p>
            </div>

            <div className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/20 hover:border-primary/20 text-center hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">Customer Care</h3>
              <p className="text-gray-600 leading-relaxed">
                From consultation to installation, we&apos;re dedicated to providing exceptional service to every customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Ready to Work With Us?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Northstar Difference
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Let&apos;s create the perfect countertops for your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started
            </Link>
            <a
              href="tel:416-356-8269"
              className="border-2 border-white/30 hover:border-white text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Call: (416) 356-8269
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}