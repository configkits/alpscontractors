import ServiceTemplate from "./ServiceTemplate";
import blog1 from "../assets/blog-1.png";

export default function IndustrialResin() {
  return (
    <ServiceTemplate
      badge="Industrial Flooring Specialists"
      title="Industrial Resin Flooring Solutions"
      subtitle="Durable, stylish & practical resin floors in Auckland & surrounds."
      descriptionTitle="Expert Epoxy Resin Flooring Installers"
      description="Alps Contractors, Auckland, has over 25 years of experience delivering high-performance epoxy resin flooring systems that are durable, versatile, and cost-effective. Epoxy resin is the most widely used resin flooring solution due to its strength, longevity, and adaptability across industrial, commercial, and residential environments. Whether you require a seamless warehouse floor, a hygienic coating for food facilities, or a heavy-duty solution for workshops and garages, our experienced team ensures each floor is tailored to your specific requirements—providing a surface that performs exceptionally while maintaining an attractive finish."
      features={[
        {
          title: "Epoxy Resin Flooring",
          description:
            "Versatile, durable, and ideal for industrial, commercial, and residential use",
        },
        {
          title: "Polyurethane Resin Flooring",
          description:
            "Higher chemical and thermal resistance for demanding environments.",
        },
        {
          title: "MMA Resin Flooring",
          description:
            "Rapid curing systems ideal for urgent repairs, freezers, and busy facilities.",
        },
      ]}
      benefitTitle={"Industry Applications We Specialise In"}
      benefits={[
        "Food and beverage flooring systems with hygienic finishes",
        "Brewery flooring with drainage and anti-slip features",
        "Industrial and workshop resin coatings for heavy traffic",
        "Showroom floors with decorative finishes",
        "Car park line marking, loading bays, and pedestrian crossings",
        "Pool surrounds, patios, and outdoor resin finishes",
      ]}
      stats={[
        { value: "25+ Years", label: "Waterproofing Experience" },
        { value: "Seamless Systems", label: "Advanced Liquid Membranes" },
        { value: "Fast Curing", label: "Rain-Safe Within Hours" },
      ]}
      faqs={[
        {
          question:
            "What are the benefits of epoxy resin flooring in Auckland?",
          answer:
            "Epoxy resin flooring provides exceptional durability, seamless finishes, chemical resistance, and long-term cost efficiency, making it ideal for Auckland’s industrial and commercial environments.",
        },
        {
          question: "How long does epoxy resin flooring take to install?",
          answer:
            "Installation time depends on the size and system used, but most projects are completed within a few days. MMA systems offer rapid curing for minimal downtime.",
        },
        {
          question:
            "Is epoxy resin flooring suitable for food and beverage facilities?",
          answer:
            "Yes. Epoxy resin flooring can be customised with hygienic, food-safe finishes that meet strict health and safety standards.",
        },
        {
          question: "Can epoxy resin flooring handle heavy industrial traffic?",
          answer:
            "Absolutely. Epoxy systems are designed to withstand heavy machinery, forklifts, and high foot traffic while maintaining performance.",
        },
        {
          question: "Do you offer residential epoxy flooring?",
          answer:
            "Yes. We install epoxy flooring for garages, patios, pool surrounds, and other residential spaces.",
        },
        {
          question: "How can I get a quote?",
          answer:
            "Contact Alps Contractors to discuss your requirements and receive a tailored resin flooring solution and quote.",
        },
      ]}
      cta={{
        title: "WHY CHOOSE ALPS CONTRACTORS",
        description:
          "Alps Contractors, Auckland, delivers high-performance resin flooring built for durability and longevity. We use trusted brands like Sika, Mapei, Flowcrete, Allnex, and Equus to ensure proven quality on every project. From consultation to installation and maintenance, our experienced team provides practical solutions tailored to your needs—giving you a safe, reliable floor that stands up to demanding environments.",
      }}
      contentImage={blog1}
      contentImage2={blog1}
      descriptionTitle2="Customised Solutions for Your Industry"
      description2="Every project we take on is unique, and so are the resin systems we install. For the food and beverage industry, epoxy resin flooring can be tailored with hygienic, food-safe properties to meet strict health standards. Breweries often require specialist solutions such as sloped floors for drainage and additional slip resistance. In industrial settings, demarcation and line-marking systems can be included to separate production areas, loading bays, and pedestrian zones, improving both safety and workflow. Our goal is to understand your requirements and deliver a resin flooring solution that’s designed specifically for your business or property."
    />
  );
}
