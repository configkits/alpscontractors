import ServiceTemplate from "./ServiceTemplate";

export default function PoolCoating() {
  return (
    <ServiceTemplate 
      title="Concrete Pool Coating Solutions"
      subtitle="Chemical-resistant resin systems for high-performance aquatic environments."
      description="Transform concrete swimming pools with our specialized epoxy coating systems. Designed to withstand constant immersion and harsh pool chemicals, our coatings provide a smooth, vibrant, and easy-to-maintain finish for commercial and residential pools."
      features={[
        "Chlorine and chemical resistant epoxy",
        "UV stable topcoats for outdoor pools",
        "Seamless, non-porous finish",
        "Specialized concrete preparation"
      ]}
      benefits={[
        "Chemical Resistant",
        "Algae Resistant",
        "Vibrant Aesthetics",
        "Smooth Texture",
        "Long-Lasting Color",
        "Waterproof Barrier"
      ]}
    />
  );
}
