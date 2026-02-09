import ServiceTemplate from "./ServiceTemplate";

export default function IndustrialResin() {
  return (
    <ServiceTemplate 
      title="Industrial Resin Flooring Solutions"
      subtitle="Heavy-duty flooring engineered for New Zealand's toughest environments."
      description="Our industrial resin systems provide a seamless, high-performance surface that withstands heavy traffic, chemical exposure, and mechanical impact. We specialize in epoxy and polyurethane solutions tailored for manufacturing, food processing, and warehousing."
      features={[
        "High-performance epoxy and polyurethane systems",
        "Chemical and thermal shock resistance",
        "Hygienic, seamless finishes for food safety",
        "Fast-curing options for minimal downtime"
      ]}
      benefits={[
        "Extreme Durability",
        "Easy Maintenance",
        "NZ Standards Compliant",
        "Hygienic Surface",
        "Chemical Resistant",
        "Impact Resistant"
      ]}
    />
  );
}
