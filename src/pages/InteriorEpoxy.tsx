import ServiceTemplate from "./ServiceTemplate";

export default function InteriorEpoxy() {
  return (
    <ServiceTemplate 
      title="Interior Epoxy Floors"
      subtitle="Sophisticated, designer floor systems for commercial and retail spaces."
      description="Elevate your interior environment with our designer epoxy systems. Combining the durability of industrial resin with bespoke aesthetics, we offer metallic, flake, and solid color finishes that create a stunning impression while remaining incredibly easy to clean."
      features={[
        "Designer metallic and flake systems",
        "Bespoke color matching",
        "High-gloss or satin finishes",
        "Seamless retail and office solutions"
      ]}
      benefits={[
        "Stunning Aesthetics",
        "Extremely Durable",
        "Stain Resistant",
        "Unique Patterns",
        "Hygienic Surface",
        "Light Reflective"
      ]}
    />
  );
}
