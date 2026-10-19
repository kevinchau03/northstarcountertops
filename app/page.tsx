import Stats from "./components/Stats";
import { pageMetadata } from "./lib/seo";

export const metadata = pageMetadata("/");

import Image from "next/image";
import Link from "next/link";
import ServiceAreas from "./components/ServiceAreas";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <Stats items={[
  {
    "value": "500+",
    "label": "Projects completed"
  },
  {
    "value": "15+",
    "label": "Years of experience"
  },
  {
    "value": "100%",
    "label": "Satisfaction rate"
  },
  {
    "value": "24h",
    "label": "Response time"
  }
]} />

      <section id="featured-work" className="home-work" aria-labelledby="featured-work-title">
        <div className="home-section-shell">
          <div className="home-section-heading">
            <div>
              <h2 id="featured-work-title">Featured Work</h2>
              <p>Look at a few of our kitchen projects.</p>
            </div>
            <Link href="/gallery" className="home-text-link">Explore the project gallery</Link>
          </div>
          <div className="home-work-grid">
            <figure className="home-project home-project--lead">
              <div className="home-project-image">
                <Image src="/images/IMG_6799.webp" alt="White kitchen island with a veined stone waterfall end and matching backsplash" fill sizes="(max-width: 767px) 100vw, 58vw" />
              </div>
              <figcaption><p>Waterfall island and matching backsplash</p></figcaption>
            </figure>
            <figure className="home-project">
              <div className="home-project-image">
                <Image src="/images/IMG_6995.webp" alt="White stone island and countertops contrasting with dark kitchen cabinetry" fill sizes="(max-width: 767px) 100vw, 38vw" />
              </div>
              <figcaption><p>Light countertops with dark cabinetry</p></figcaption>
            </figure>
            <figure className="home-project">
              <div className="home-project-image">
                <Image src="/images/IMG_5358.webp" alt="Bright kitchen with white stone countertops, a broad island, and pendant lighting" fill sizes="(max-width: 767px) 100vw, 38vw" />
              </div>
              <figcaption><p>A generous island at the heart of the kitchen</p></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="services" className="home-services" aria-labelledby="home-services-title">
        <div className="home-section-shell home-services-layout">
          <div className="home-services-intro">
            <h2 id="home-services-title">Your space.<br />Our craft.</h2>
            <p>From choosing your stone to fitting the final piece, we help bring your countertop project together.</p>
            <div className="home-services-image">
              <Image src="/images/IMG_8084.webp" alt="Installed white stone island and countertops in a kitchen with a black sink" fill sizes="(max-width: 767px) 100vw, 40vw" />
            </div>
            <Link href="/services" className="home-text-link">Explore our countertop services</Link>
          </div>
          <div className="home-services-detail">
            <ol className="home-service-steps">
              <li>
                <span className="home-service-number" aria-hidden="true">01</span>
                <div><h3>Choose the right stone</h3><p>Tell us about your space, how you use it, and your budget. We’ll help you compare marble, quartz, and granite, then work through the details.</p><p className="home-service-note">Material guidance, project planning, and a free quote</p></div>
              </li>
              <li>
                <span className="home-service-number" aria-hidden="true">02</span>
                <div><h3>Made to fit your space</h3><p>Your selected stone is measured, cut, and finished for your layout, with attention to edges, sink openings, and how each surface comes together.</p><p className="home-service-note">Measurements, fabrication, and edge finishing</p></div>
              </li>
              <li>
                <span className="home-service-number" aria-hidden="true">03</span>
                <div><h3>The finishing touch</h3><p>Our team installs your countertops and checks the fit and finish. Before we leave, we’ll walk you through caring for your new surfaces.</p><p className="home-service-note">Installation, final checks, and care guidance</p></div>
              </li>
            </ol>
            <div className="home-services-cta"><p>Have a project in mind?</p><Link href="/contact" className="home-section-button">Get Free Quote</Link></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-surface">
        <Testimonials />
        </section>

      <ServiceAreas />

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
