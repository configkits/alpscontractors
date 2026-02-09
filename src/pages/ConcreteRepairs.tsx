import ServiceTemplate from "./ServiceTemplate";

export default function ConcreteRepairs() {
  return (
    <ServiceTemplate 
      title="Concrete Repairs & Restoration"
      subtitle="Structural and aesthetic restoration for industrial concrete assets."
      description="Extend the life of your facility with our comprehensive concrete repair services. From structural crack injection to floor leveling and spall repair, we use high-strength resins to restore the integrity and safety of your concrete surfaces."
      features={[
        "Structural resin crack injection",
        "Spalling and joint repair",
        "Concrete leveling and resurfacing",
        "Protective coatings for rebar"
      ]}
      benefits={[
        "Structural Integrity",
        "Safety Restoration",
        "Asset Preservation",
        "Minimal Downtime",
        "Precise Engineering",
        "Seamless Integration"
      ]}
    />
  );
}
