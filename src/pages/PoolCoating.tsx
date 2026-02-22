import ServiceTemplate from "./ServiceTemplate";
import blog1 from "../assets/blog-1.png";

export default function PoolCoating() {
  return (
    <ServiceTemplate
      title="Pool Coating Solutions"
      subtitle="Expert concrete pool coatings & repairs built to last in Auckland & surrounds."
      descriptionTitle="Tailored Pool Coating Solutions"
      description="Alps Contractors, Auckland, provides specialist pool coating solutions designed to restore shine, protect surfaces, and extend the life of concrete and fiberglass pools. Our coatings guard against leaks, discoloration, chemical exposure, and everyday wear caused by sun and water use. Whether resurfacing an aging pool or enhancing durability, our systems deliver long-lasting protection with an attractive finish."
      features={[
  {
    title: "Professional Surface Preparation",
    description: "Diamond grinding ensures proper adhesion and prevents peeling or delamination."
  },
  {
    title: "Crack & Surface Repairs",
    description: "Structural defects and imperfections are repaired for a smooth, durable finish."
  },
  {
    title: "High-Performance Epoxy Coatings",
    description: "Primer plus multiple epoxy coats provide strong protection and visual appeal."
  },
  {
    title: "Controlled Curing Process",
    description: "Proper drying time ensures chemical resistance, UV stability, and longevity."
  }
]}
      
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
  "Restores pool appearance and shine",
  "Protects against leaks and discoloration",
  "Resistant to UV exposure and chemicals",
  "Extends lifespan of concrete and fiberglass pools",
  "Smooth, durable and easy-to-maintain finish",
  "Professional inspection and repair planning"
]}
      cta={ {
  title: "Restore Your Pool With Confidence",
  description: "Talk to our pool coating specialists for a durable, professional finish."
}}
      contentImage={blog1}
      contentImage2={blog1}
      descriptionTitle2="Correct Process, Premium Materials, Lasting Results"
      description2="Achieving a durable pool coating requires the right process, quality materials, and expert application. From thorough surface preparation and defect repairs to multi-layer coating and proper curing, every step is carefully managed to ensure lasting performance. Our detailed inspections help identify hidden issues early, allowing preventive repairs that protect your pool from future damage while delivering a flawless, long-lasting finish."
    />
  );
}
