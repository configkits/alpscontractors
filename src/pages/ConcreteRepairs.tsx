import ServiceTemplate from "./ServiceTemplate";
import image1 from "../assets/services/Concreterepairs/10-62a38a13-2880w.webp";
import image2 from "../assets/services/Concreterepairs/11-2880w.webp";
import image3 from "../assets/services/Concreterepairs/19-2880w.webp";

export default function ConcreteRepairs() {
  return (
    <ServiceTemplate
      heroImage={image1}
      title="Concrete Repairs"
      subtitle="Professional concrete repair, levelling, and resurfacing solutions in Auckland & surrounds."
      descriptionTitle="Professional Concrete Repairs You Can Trust"
      description="Alps Contractors, Auckland, specialises in professional concrete repair and coating solutions for residential, commercial, and industrial properties. Cracks, surface wear, and delamination can affect both appearance and structural integrity. Our experienced team conducts detailed inspections to identify the root cause of damage and applies proven repair techniques such as crack injection, joint repairs, and resurfacing to restore durability and extend the life of your concrete surfaces."
      features={[
        {
          title: "Concrete Crack Repairs",
          description:
            "Injection and sealing methods restore structural integrity and prevent further damage.",
        },
        {
          title: "Levelling & Resurfacing",
          description:
            "Repairs uneven or sinking slabs for improved safety and appearance.",
        },
        {
          title: "Protective Concrete Coatings",
          description:
            "Durable coatings protect floors, driveways, sidewalks, and industrial surfaces.",
        },
        {
          title: "Swimming Pool & Block Coatings",
          description:
            "Specialised coatings enhance durability and protect concrete structures.",
        },
        {
          title: "Detailed Site Inspections",
          description:
            "Professional assessment ensures the right repair solution for long-term performance.",
        },
      ]}
      stats={[
        { value: "25+ Years", label: "Waterproofing Experience" },
        { value: "Seamless Systems", label: "Advanced Liquid Membranes" },
        { value: "Fast Curing", label: "Rain-Safe Within Hours" },
      ]}
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
        "Restores structural integrity and surface appearance",
        "Prevents further cracking and deterioration",
        "Improves safety and surface durability",
        "Reduces long-term maintenance costs",
        "Protects against weather, chemicals, and wear",
        "Professional inspections and tailored repair plans",
      ]}
      cta={{
        title: "Restore Your Concrete Surfaces Today",
        description:
          "Speak with our concrete repair specialists for reliable, long-lasting solutions.",
      }}
      contentImage={image3}
      contentImage2={image2}
      descriptionTitle2="Tailored Solutions for Long-Term Performance"
      description2="Concrete surfaces face constant stress from heavy traffic, weather exposure, chemicals, and structural movement. Our tailored repair and coating solutions are designed to protect against future deterioration while improving appearance and functionality. By combining technical expertise with modern repair techniques, we ensure durable results that minimise downtime and reduce long-term maintenance costs."
    />
  );
}