import Image from "next/image";
import Link from "next/link";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide uppercase">
              Premium Stone Specialists
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exquisite Marble
            <span className="block text-primary-600 drop-shadow-lg">Countertops</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Transforming homes with timeless elegance, superior craftsmanship, and unmatched durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-600 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Free Quote
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white/30 hover:border-white text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-sm uppercase tracking-wide opacity-90">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-secondary">
              Our Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the artistry and precision that goes into every project we complete
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1721824296360-6ad93a642fbb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop"
                alt="Kitchen countertop"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Modern Kitchen</h3>
                  <p className="text-sm opacity-90">Calacatta marble with waterfall edge</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop"
                alt="Bathroom vanity"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Luxury Bathroom</h3>
                  <p className="text-sm opacity-90">Carrara marble vanity top</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop"
                alt="Island countertop"
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Kitchen Island</h3>
                  <p className="text-sm opacity-90">Custom quartz with integrated seating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-surface/50 to-white"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-secondary">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we handle every step of your countertop journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border-2 border-border hover:border-primary/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl text-primary">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                We help you choose the perfect stone for your space, lifestyle, and budget with expert guidance.
              </p>
              <div className="mt-6 text-primary font-semibold">Step 1</div>
            </div>
            <div className="group p-8 bg-white border-2 border-border hover:border-primary/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:mt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl text-primary">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Fabrication</h3>
              <p className="text-gray-600 leading-relaxed">
                Precision cutting and shaping of your selected slabs using state-of-the-art equipment.
              </p>
              <div className="mt-6 text-primary font-semibold">Step 2</div>
            </div>
            <div className="group p-8 bg-white border-2 border-border hover:border-primary/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl text-primary">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Installation</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional and meticulous installation by our certified team with complete cleanup.
              </p>
              <div className="mt-6 text-primary font-semibold">Step 3</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4" id="testimonials">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-secondary">
              What Our Customers Say
            </h2>
            <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
              Don’t just take our word for it—hear from homeowners and businesses who love their new countertops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-8 md:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <TestimonialCard
                  imageUrl="/defaultavatar.jpg"
                  name="Kalesha Dyer"
                  review={`I had a great experience with Northstar Countertops! The team was friendly, arrived right on time, and did a fantastic job with the installation. Everything was done efficiently and with great attention to detail. Highly recommend them if you're looking for quality service and professionalism!`}
                  date="3 months ago"
                />
                <TestimonialCard
                  imageUrl="/defaultavatar.jpg"
                  name="Tom Valookaran"
                  review="Heng did a fantastic job with my countertops, even after coming to measure three times as I changed my mind. He explained everything in detail and delivered exactly when promised. Great customer skills—highly recommend."
                  date="10 months ago"
                />
              </div>

              <TestimonialCard
                imageUrl="/defaultavatar.jpg"
                name="Kathleen Delaney"
                review="Wonderful work, excellent communication, and left everything very clean. Highly recommended."
                date="2 days ago"
              />
            </div>

            <div className="md:col-span-1">
              <TestimonialCard
                imageUrl="/defaultavatar.jpg"
                name="J Baptiste"
                review={`We recently had our kitchen countertops replaced with quartz by Northstar Countertops, and the entire experience was excellent. From the initial consultation to installation, their team was professional, punctual, and detail-oriented. They helped us choose a beautiful quartz slab that fits our kitchen perfectly.

        The installation was quick and clean — they even took away all the debris. The craftsmanship, especially the mitred edges and grain matching, was top-notch. We appreciated their transparency on pricing and timeline, and everything was delivered as promised.

        Highly recommend Northstar if you're looking for quality workmanship and reliable service for a countertop upgrade.`}
                date="2 months ago"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide uppercase mb-6">
              Ready to Transform?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Dream Project Today
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Get a free, no-obligation quote and discover how we can transform your space with premium countertops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:+14163568269"
                className="border-2 border-white/30 hover:border-white text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
