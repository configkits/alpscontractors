import Navbar from '@/components/navbar'
import React from 'react'
import ServiceTemplate from './ServiceTemplate'
import image1 from "../assets/services/industrialresin/IMG_4807-scaled-2880w.webp";
import image2 from "../assets/services/industrialresin/IMG_7725-scaled-2880w.webp";
import hero from "../assets/services/industrialresin/coatings-6-768x887-2880w.webp";
import Footer from '@/components/footer';

type Props = {}

const EpoxyResinFlooring = (props: Props) => {
  return (
     <div className="min-h-screen bg-white page-transition">
              <Navbar />
    <ServiceTemplate
      //badge="Industrial Flooring Specialists"
      heroImage={hero}
      title="Epoxy Resin Flooring Systems"
      subtitle="High‑performance, chemically resistant coatings for industrial, commercial, and residential floors"
      descriptionTitle="How Epoxy Resin Systems Work"
      description="An epoxy floor system blends Part A (epoxy resin) with Part B (hardener). As the components react, they chemically crosslink into a solid, highly adhesive layer with excellent mechanical and protective properties.
Different resin chemistries allow tailoring for performance needs:"
      features={[
        {
          title: "Bisphenol‑A epoxies",
          description:
            "Widely used, cost‑effective, and suitable for general‑purpose coatings.",
        },
        {
          title: "Novolac epoxies",
          description:
            " High‑performance resins that offer superior chemical and heat resistance for aggressive environments, though they tend to be more brittle and costly.",
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
      contentImage={image1}
      contentImage2={image2}
      descriptionTitle2="Key Performance Characteristics"
      description2="Every project we take on is unique, and so are the resin systems we install. For the food and beverage industry, epoxy resin flooring can be tailored with hygienic, food-safe properties to meet strict health standards. Breweries often require specialist solutions such as sloped floors for drainage and additional slip resistance. In industrial settings, demarcation and line-marking systems can be included to separate production areas, loading bays, and pedestrian zones, improving both safety and workflow. Our goal is to understand your requirements and deliver a resin flooring solution that’s designed specifically for your business or property."
    />
    <Footer />
    </div>
  )
}

export default EpoxyResinFlooring