import { serviceAreas } from "@/app/lib/serviceAreas";

type ServiceAreasProps = {
  compact?: boolean;
};

export default function ServiceAreas({ compact = false }: ServiceAreasProps) {
  return (
    <section className={compact ? "py-16 bg-white" : "py-24 bg-surface"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-secondary">
            Countertop Services Across the GTA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Northstar Countertops provides custom fabrication, installation, and countertop project support throughout these communities.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-white border border-border rounded-xl px-4 py-3 text-center text-secondary font-semibold shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
