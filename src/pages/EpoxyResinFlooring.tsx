import Navbar from '@/components/navbar'
import ServiceTemplate from './ServiceTemplate'
import image1 from "../assets/services/industrialresin/IMG_4807-scaled-2880w.webp";
import image2 from "../assets/services/industrialresin/IMG_7725-scaled-2880w.webp";
import hero from "../assets/services/industrialresin/coatings-6-768x887-2880w.webp";
import Footer from '@/components/footer';
import { Check, AlertTriangle, Layers, MapPin } from "lucide-react";

const advantages = [
  "Long service life even in high‑traffic and forklift environments",
  "Strong chemical and stain resistance",
  "Low permeability, protecting the concrete substrate",
  "Easy maintenance with simple sweeping and washing",
  "Highly customisable with colours, decorative flakes, coloured quartz, and slip‑resistant textures",
  "Cost‑effective for the level of durability and performance delivered",
];

const limitations = [
  {
    title: "Critical Surface Preparation",
    description:
      "Concrete must be sound, clean, dry, and mechanically profiled (grinding or shot blasting). Poor preparation is the leading cause of coating failure.",
  },
  {
    title: "Moisture Sensitivity",
    description:
      "Standard epoxies cannot tolerate high substrate moisture. Moisture tolerant primers or mitigation systems are necessary when conditions are borderline or elevated.",
  },
  {
    title: "Cure Time Considerations",
    description:
      "Epoxy curing is temperature‑dependent and may require several days before full mechanical load or chemical exposure is allowed.",
  },
  {
    title: "Slip Resistance",
    description:
      "Smooth epoxy finishes can be slippery when wet. Adding aggregates (quartz, sand, aluminium oxide) enhances traction for safety‑critical zones.",
  },
];

const applications = [
  "Warehouses and logistics facilities",
  "Workshops, factories, and processing plants",
  "Garages and service areas",
  "Food and beverage facilities",
  "Retail, showrooms, and commercial interiors",
  "Decorative residential spaces",
];

const buildUps = [
  {
    title: "Thin‑film coatings",
    thickness: "200–500 μm",
    description: "For light to medium duty use",
  },
  {
    title: "Self‑levelling epoxies",
    thickness: "1–3 mm",
    description: "Smooth, cleanable, decorative or hygienic surfaces",
  },
  {
    title: "Heavy‑duty epoxy mortars",
    thickness: "4–6+ mm",
    description: "Maximum impact resistance for industrial zones",
  },
];

const EpoxyResinFlooring = () => {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />
      <ServiceTemplate
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
              "High‑performance resins that offer superior chemical and heat resistance for aggressive environments, though they tend to be more brittle and costly.",
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
        cta={{
          title: "WHY CHOOSE ALPS CONTRACTORS",
          description:
            "Alps Contractors, Auckland, delivers high-performance resin flooring built for durability and longevity. We use trusted brands like Sika, Mapei, Flowcrete, Allnex, and Equus to ensure proven quality on every project. From consultation to installation and maintenance, our experienced team provides practical solutions tailored to your needs—giving you a safe, reliable floor that stands up to demanding environments.",
        }}
        contentImage={image1}
        contentImage2={image2}
        descriptionTitle2="Key Performance Characteristics"
        description2="Every project we take on is unique, and so are the resin systems we install. For the food and beverage industry, epoxy resin flooring can be tailored with hygienic, food-safe properties to meet strict health standards. Breweries often require specialist solutions such as sloped floors for drainage and additional slip resistance. In industrial settings, demarcation and line-marking systems can be included to separate production areas, loading bays, and pedestrian zones, improving both safety and workflow. Our goal is to understand your requirements and deliver a resin flooring solution that's designed specifically for your business or property."
      />

      {/* ── ADVANTAGES ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Advantages of Epoxy Flooring
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Epoxy systems deliver exceptional value across a range of demanding environments.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {advantages.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-muted/20 rounded-xl p-4 border">
                <div className="mt-0.5 w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Check size={14} className="text-accent" />
                </div>
                <span className="text-sm text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── LIMITATIONS ── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Limitations &amp; Installation Requirements
          </h2>
          <p className="text-muted-foreground mb-10 pl-6 border-l-4 border-transparent">
            Understanding these factors ensures the right system is specified and correctly installed.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {limitations.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                  <AlertTriangle size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPICAL APPLICATIONS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Typical Applications
          </h2>
          <p className="text-muted-foreground mb-10 pl-6 border-l-4 border-transparent">
            Epoxy resin flooring is widely used across a broad range of sectors and environments.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-5 py-4"
              >
                <MapPin size={16} className="text-accent shrink-0" />
                <span className="text-sm font-medium text-primary">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMMON SYSTEM BUILD‑UPS ── */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Common System Build‑Ups
          </h2>
          <p className="text-muted-foreground mb-10 pl-6 border-l-4 border-transparent">
            Additives such as fast‑cure hardeners, coloured flakes, quartz, and various aggregates allow full control over appearance, cure speed, and slip resistance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {buildUps.map((system, i) => (
              <div key={i} className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Layers size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary">{system.title}</p>
                  <span className="inline-block mt-1 mb-2 text-xs font-mono bg-primary/5 text-primary px-2 py-0.5 rounded-full border border-primary/10">
                    {system.thickness}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{system.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyResinFlooring;