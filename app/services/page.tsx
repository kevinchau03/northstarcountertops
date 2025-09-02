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
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative h-96 bg-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            For our chefs at home – quality comes first. We're dedicated to creating quality marble and granite countertops for the amazing chefs in Newmarket.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Countertop Solutions
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              We offer full service from choosing the right material for your new kitchen, creating your countertop to the exact measure, and installing your countertop. This is our promise to our customers and a daily reminder to ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-secondary">
                          <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {feature}
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
      <section className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              A streamlined approach that ensures quality results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We visit your space and discuss your vision and requirements." },
              { step: "02", title: "Design", description: "Create detailed plans and select the perfect marble for your project." },
              { step: "03", title: "Fabrication", description: "Precision cutting and shaping in our state-of-the-art facility." },
              { step: "04", title: "Installation", description: "Professional installation with attention to every detail." }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{process.title}</h3>
                <p className="text-secondary">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation and quote. We're dedicated to serving the amazing chefs of Newmarket with quality countertops that are just the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
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
