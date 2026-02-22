import ServiceTemplate from "./ServiceTemplate";
import blog1 from "../assets/blog-1.png";

export default function IndustrialResin() {
  return (
    <ServiceTemplate
  title="Anti-Slip Solutions"
  subtitle="Maximise safety with expert anti-slip services"
  descriptionTitle="WDWDWD"
  description="Professional anti-slip treatments..."
  heroImage={blog1}
  contentImage={blog1}
  features={[
    "Slip resistance testing",
    "Concrete treatment",
    "Indoor & outdoor coverage",
  ]}
  benefits={[
    "Improved traction",
    "Durable coating",
    "Safer workplaces",
  ]}
  faqs={[
    {
      question: "How long does treatment last?",
      answer:
        "Most anti-slip treatments last several years depending on usage and environment.",
    },
    {
      question: "Will it change floor appearance?",
      answer:
        "No — treatments are designed to maintain the original floor look.",
    },
    {
      question: "Is it suitable outdoors?",
      answer:
        "Yes, our systems work for both indoor and outdoor surfaces.",
    },
  ]}
/>
  );
}
