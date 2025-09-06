import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
          alt="Gallery of countertop projects"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide uppercase">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Check out our latest works
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-secondary">
              Our Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of stunning countertop installations
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Gallery Items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="w-full h-80 bg-gray-200 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-sm">Project Image {item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                    <p className="text-sm opacity-90">Beautiful countertop installation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide uppercase mb-6">
              Ready to Start?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Your Dream Project
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Get inspired by our work and let us transform your space with premium countertops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 hover:border-white text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}