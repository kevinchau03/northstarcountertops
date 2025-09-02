import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
            alt="Modern kitchen with marble countertop"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Exquisite Marble Countertops
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transforming homes with timeless elegance and durability.
            </p>
            <Link
              href="#contact"
              className="bg-primary text-white py-3 px-8 rounded-lg text-lg hover:bg-opacity-50 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="featured-work" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative">
                <Image
                  src="https://images.unsplash.com/photo-1583845112123-b1e9a4c43a2a?q=80&w=1974&auto=format&fit=crop"
                  alt="Kitchen countertop"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <p className="text-white text-xl font-bold">Modern Kitchen</p>
                </div>
              </div>
              <div className="group relative">
                <Image
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop"
                  alt="Bathroom vanity"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <p className="text-white text-xl font-bold">Luxury Bathroom</p>
                </div>
              </div>
              <div className="group relative">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop"
                  alt="Island countertop"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <p className="text-white text-xl font-bold">Kitchen Island</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Quick List */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                <p className="text-gray-600">
                  We help you choose the perfect marble for your space and budget.
                </p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fabrication</h3>
                <p className="text-gray-600">
                  Custom cutting and shaping of your selected marble slabs.
                </p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Installation</h3>
                <p className="text-gray-600">
                  Professional and clean installation by our expert team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="bg-stone-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8">
              Contact us today for a free, no-obligation quote.
            </p>
            <Link
              href="mailto:contact@northstarcountertops.com"
              className="bg-white text-stone-700 py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
  );
}
