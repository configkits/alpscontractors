import ServiceTemplate from "./ServiceTemplate";
import blog1 from "../assets/blog-1.png";

export default function LiquidWaterproofing() {
  return (
    <ServiceTemplate
      title="Liquid Waterproofing Solutions"
      subtitle="Protect your property with expert waterproofing services in Auckland & surrounds."
      descriptionTitle="Expert Liquid Waterproofing Systems"
      description="Alps Contractors, Auckland, provides high-quality liquid waterproofing solutions backed by over 25 years of experience. Our liquid-applied systems create seamless, fully bonded membranes that prevent water ingress while resisting UV exposure, weathering, and surface wear. Suitable for roofs, balconies, terraces, planter boxes, and wet areas, we tailor each application to your substrate and project needs—working across concrete, timber, bitumen, zinc, and stone surfaces for durable, long-lasting protection."
      features={[
        {
          title: "Seamless Waterproof Membranes",
          description:
            "Fully bonded liquid-applied coatings that prevent water ingress and leaks.",
        },
        {
          title: "UV & Weather Resistant",
          description:
            "Durable protection against sun exposure, abrasion, and environmental wear.",
        },
        {
          title: "Flexible & Crack-Bridging",
          description:
            "Permanently flexible coatings ideal for movement-prone surfaces.",
        },
        {
          title: "Fast-Curing Systems",
          description:
            "Quick installation with rain-safe protection within hours.",
        },
        {
          title: "Slip-Resistant Finishes",
          description: "Improved safety for high-risk and wet areas.",
        },
        {
          title: "Multi-Surface Compatibility",
          description:
            "Suitable for concrete, timber, zinc, bitumen, stone, and more.",
        },
      ]}
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
        "Roofs, terraces, and balconies",
        "Planter boxes and podium decks",
        "Bathrooms and wet-area waterproofing",
        "Industrial and commercial floors",
        "Outdoor patios and driveways",
        "Renovation and refurbishment projects",
      ]}
      stats={[
        { value: "25+ Years", label: "Waterproofing Experience" },
        { value: "Seamless Systems", label: "Advanced Liquid Membranes" },
        { value: "Fast Curing", label: "Rain-Safe Within Hours" },
      ]}
      faqs={[
        {
          question: "What areas can liquid waterproofing cover?",
          answer:
            "Liquid waterproofing systems can protect roofs, balconies, terraces, planter boxes, bathrooms, industrial floors, patios, and other exposed surfaces.",
        },
        {
          question: "How quickly can waterproofing be installed?",
          answer:
            "Many liquid systems cure quickly and can become rain-safe within hours, depending on conditions and the specific product used.",
        },
        {
          question: "Are your waterproofing systems slip-resistant?",
          answer:
            "Yes. Slip-resistant finishes can be applied to improve safety in wet or high-traffic areas.",
        },
        {
          question: "Can you apply waterproofing on different surfaces?",
          answer:
            "Yes. Our systems are compatible with concrete, timber, bitumen, zinc, stone, and existing suitable coatings.",
        },
        {
          question:
            "Are your waterproofing solutions environmentally friendly?",
          answer:
            "We use low-VOC, non-toxic formulations designed to minimise environmental impact while maintaining performance.",
        },
        {
          question: "How can I get a quote?",
          answer:
            "Contact Alps Contractors to discuss your project requirements and receive a tailored waterproofing quote.",
        },
      ]}
      cta={{
        title: "Protect Your Property Today",
        description:
          "Talk to our waterproofing experts for a tailored solution.",
      }}
      contentImage={blog1}
      contentImage2={blog1}
      descriptionTitle2="Why Choose Alps Contractors"
      description2="With decades of experience, Alps Contractors delivers liquid waterproofing solutions designed for performance, safety, and longevity. We provide expert advice tailored to your project—whether you need UV resistance, elasticity for movement, or chemical durability. From consultation to installation and maintenance, our focus is on reliable protection, environmentally responsible systems, and professional results delivered on time and within budget."
    />
  );
}
