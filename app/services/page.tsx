import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Design & Consultation",
      description: "Work with our design experts to choose the right material for your new kitchen. We'll help you create the perfect countertop solution that fits your style and budget, because quality comes first.",
      features: ["In-home consultation", "Material selection guidance", "3D design visualization", "Budget planning"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2071&auto=format&fit=crop"
    },
    {
      title: "Precision Fabrication",
      description: "Our state-of-the-art fabrication facility creates your countertop to the exact measure. We use advanced technology and quality craftsmanship to ensure every countertop is just the right fit for amazing chefs.",
      features: ["CNC precision cutting", "Exact measurements", "Edge profiling options", "Quality control inspection"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Professional Installation",
      description: "Our certified installers ensure your countertops are installed perfectly and safely. We handle everything from template creation to final cleanup.",
      features: ["Template creation", "Professional installation", "Sealing and finishing", "Post-installation cleanup"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Maintenance & Care",
      description: "Keep your marble countertops looking beautiful for years to come with our maintenance services and expert care guidance.",
      features: ["Annual sealing service", "Repair services", "Care instructions", "Maintenance scheduling"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-bg pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Complete Countertop
            <span className="block text-white/90">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
            For our chefs at home - quality comes first. We&apos;re dedicated to creating quality marble and granite countertops for the amazing chefs in Newmarket.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              From Design to Installation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer full service from choosing the right material for your new kitchen, creating your countertop to the exact measure, and installing your countertop. This is our promise to our customers and a daily reminder to ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-border/20 hover:border-primary/20">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach that ensures quality results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We visit your space and discuss your vision and requirements.", icon: "💬" },
              { step: "02", title: "Design", description: "Create detailed plans and select the perfect marble for your project.", icon: "📐" },
              { step: "03", title: "Fabrication", description: "Precision cutting and shaping in our state-of-the-art facility.", icon: "🔧" },
              { step: "04", title: "Installation", description: "Professional installation with attention to every detail.", icon: "✨" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-white border-4 border-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wide uppercase mb-6">
            Ready to Start?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Kitchen Today
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Contact us today for a free consultation and quote. We&apos;re dedicated to serving the amazing chefs of Newmarket with quality countertops that are just the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Free Quote
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
