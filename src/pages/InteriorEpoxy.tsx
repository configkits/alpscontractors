import ServiceTemplate from "./ServiceTemplate";
import hero from "../assets/services/Interiorepoxyfloors/AdobeStock_607085035.webp";
import image2 from "../assets/services/Interiorepoxyfloors/GettyImages-1319836742-2880w.webp";
import image1 from "../assets/services/AntislipSolutions/208f52d2-770f-40dd-89d0-558f3795777f-1-2880w.webp";

export default function InteriorEpoxy() {
  return (
    <ServiceTemplate
      heroImage={hero}
      title="Interior Epoxy Floors"
      subtitle="High-performance epoxy flooring solutions for homes, commercial spaces, and industrial interiors across Auckland."
      descriptionTitle="Durable & Modern Interior Epoxy Flooring"
      description="Alps Contractors provides high-performance interior epoxy floors in Auckland, designed for residential, commercial, and industrial interiors that demand durability, safety, and a clean finish. Epoxy flooring creates a seamless, moisture-resistant surface that protects concrete from cracking, staining, and heavy foot traffic. Ideal for garages, basements, retail stores, warehouses, and workshops, our epoxy systems are tailored to Auckland’s climate and usage conditions, delivering long-lasting results with minimal maintenance."
      features={[
        {
          title: "Durable & Long-Lasting",
          description:
            "Forms a strong bond with concrete to resist cracking, peeling, and wear.",
        },
        {
          title: "Seamless & Easy to Maintain",
          description:
            "Smooth finish with no grout lines, making cleaning quick and simple.",
        },
        {
          title: "Moisture & Chemical Resistant",
          description:
            "Protects against water ingress, oils, cleaning agents, and chemical exposure.",
        },
        {
          title: "Slip-Resistant & Custom Finishes",
          description:
            "Available in a range of colours and textures to suit safety and design needs.",
        },
        {
          title: "Suitable for All Interior Spaces",
          description:
            "Perfect for garages, retail stores, offices, warehouses, and industrial facilities.",
        },
      ]}
      stats={[
        { value: "25+ Years", label: "Waterproofing Experience" },
        { value: "Seamless Systems", label: "Advanced Liquid Membranes" },
        { value: "Fast Curing", label: "Rain-Safe Within Hours" },
      ]}
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
        "Withstands heavy foot traffic and equipment use",
        "Improves appearance with a clean, modern finish",
        "Resistant to moisture and humidity",
        "Protects concrete from long-term damage",
        "Low maintenance and easy to clean",
        "Cost-effective long-term flooring solution",
      ]}
      cta={{
        title: "Upgrade Your Interior Floors Today",
        description:
          "Call our Auckland epoxy flooring specialists for a durable, seamless solution tailored to your space.",
      }}
      contentImage={image1}
      contentImage2={image2}
      descriptionTitle2="Our Professional Epoxy Flooring Process"
      description2="We follow a proven installation process to ensure long-term performance. This includes detailed surface inspection, concrete grinding, moisture testing, and professional primer application before installing the epoxy coating system. Multiple layers may be applied depending on durability and design requirements. After proper curing and final inspection, the result is a seamless interior epoxy floor built to withstand Auckland’s demanding environments."
    />
  );
}
