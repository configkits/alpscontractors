import ServiceTemplate from "./ServiceTemplate";
import image1 from "../assets/services/AntislipSolutions/5-2880w.webp";
import image2 from "../assets/services/AntislipSolutions/7-2880w.webp";
import Hero from "../assets/services/AntislipSolutions/208f52d2-770f-40dd-89d0-558f3795777f-1-2880w.webp";

export default function AntiSlip() {
  return (
    <ServiceTemplate
      heroImage={Hero}
      title="Anti-Slip Solutions"
      subtitle="Maximise safety with expert anti-slip system services in Auckland & surrounds."
      descriptionTitle="Professional Anti-Slip Systems for Every Surface"
      description="Alps Contractors, Auckland, provides professional anti-slip systems designed to improve floor safety without compromising appearance. Slips and falls are a major cause of injuries in residential, commercial, and industrial spaces, which is why we focus on maximising traction across ceramic and porcelain tiles, natural stone, polished concrete, and terrazzo. Through detailed slip-resistance testing and surface assessment, we determine the most effective treatment to ensure long-term safety and compliance."
      features={[
        {
          title: "Micro-Etch Anti-Slip Treatment",
          description:
            "Microscopically alters the surface to increase grip, even when wet or greasy.",
        },
        {
          title: "Certified Non-Slip Coatings",
          description:
            "Independently tested and compliant with NZ4586 slip-resistance standards.",
        },
        {
          title: "Transparent & Tinted Finishes",
          description:
            "Enhance safety while maintaining the original look of your floor.",
        },
        {
          title: "Slip Resistance Testing",
          description:
            "Wet pendulum testing and friction checks for accurate safety assessment.",
        },
        {
          title: "Durable Protective Coatings",
          description:
            "Seals and protects surfaces while providing long-lasting traction.",
        },
      ]}
      stats={[
        { value: "25+ Years", label: "Industry Experience" },
        { value: "NZ4586 Certified", label: "Slip-Resistance Compliance" },
        { value: "Immediate Use", label: "Minimal Downtime Solutions" },
      ]}
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
        "Enhanced traction to reduce slips and falls",
        "Minimal visual change to existing surfaces",
        "Quick application with immediate usability",
        "Resistant to water, grease, and oil",
        "Durable for high-traffic commercial areas",
        "Suitable for tiles, stone, terrazzo, and concrete",
      ]}
      faqs={[
        {
          question: "What surfaces can you treat with anti-slip systems?",
          answer:
            "We treat ceramic and porcelain tiles, natural stone, terrazzo, polished concrete, and many other indoor and outdoor surfaces.",
        },
        {
          question: "How soon can treated floors be used?",
          answer:
            "Most treatments allow for immediate or same-day use, depending on the system applied.",
        },
        {
          question: "Are anti-slip systems suitable for commercial spaces?",
          answer:
            "Yes. Our systems are designed for commercial, industrial, and residential environments, including high-traffic areas.",
        },
        {
          question: "How do you determine the right treatment?",
          answer:
            "We conduct slip-resistance testing and surface assessments to recommend the most effective and compliant solution.",
        },
        {
          question: "Will the treatment change the look of my floor?",
          answer:
            "No. Most treatments are transparent or lightly tinted, maintaining the original appearance while improving grip.",
        },
        {
          question: "How can I get a quote?",
          answer:
            "Contact Alps Contractors to discuss your floor safety requirements and receive a tailored anti-slip solution quote.",
        },
      ]}
      cta={{
        title: "Make Your Floors Safer Today",
        description:
          "Speak with our anti-slip specialists for expert advice and compliance testing.",
      }}
      contentImage={image1}
      contentImage2={image2}
      descriptionTitle2="Safety & Durability for Commercial and Residential Spaces"
      description2="From workplaces and restaurants to hospitals, warehouses, and outdoor walkways, our anti-slip systems are designed to handle heavy foot traffic, water exposure, grease, and chemicals. Treatments are applied with minimal disruption and allow for immediate usability, ensuring your business or home remains functional while safety is enhanced. We deliver tailored solutions that protect people while preserving the style and durability of your flooring."
    />
  );
}
