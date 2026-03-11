import Navbar from '@/components/navbar'
import ServiceTemplate from './ServiceTemplate'
import Footer from '@/components/footer'
import { Flame, Waves, Grid3x3 } from "lucide-react"

import hero from "../assets/services/Interiorepoxyfloors/AdobeStock_607085035.webp";
import image2 from "../assets/services/Interiorepoxyfloors/GettyImages-1319836742-2880w.webp";
import image1 from "../assets/services/Interiorepoxyfloors/IMG_3679.jpeg";


const materialTypes = [
  {
    type: "Neutral Cure Silicone",
    description:
      "Low-modulus, flexible silicone suitable for most building substrates. Non-corrosive cure chemistry makes it compatible with sensitive materials including metals, stone, and coated surfaces.",
  },
  {
    type: "Structural Silicone",
    description:
      "High-strength, two-component silicone formulated for structural glazing, unitised curtain wall, and bonded façade applications where adhesive load transfer is required.",
  },
  {
    type: "Polyurethane Sealants",
    description:
      "Tough, paintable sealants with excellent adhesion to concrete, masonry, and timber. Ideal for floor joints, control joints, and external construction joints subject to foot or vehicle traffic.",
  },
  {
    type: "Fire‑Rated Sealants",
    description:
      "Intumescent and firestop sealants that expand under heat to maintain fire compartment integrity at penetrations, service entries, and construction joints. Certified to relevant fire rating standards.",
  },
  {
    type: "Acrylic Sealants",
    description:
      "Water-based, paintable sealants suited to low-movement internal joints, cornice, architrave, and general building finishing applications.",
  },
]

const SealantSiliconeApplication = () => {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />

      <ServiceTemplate
        heroImage={hero}
        contentImage={image1}
        contentImage2={image2}
        title="Sealant & Silicone Application"
        subtitle="Professional joint sealing and waterproofing for residential, commercial, and industrial buildings across Auckland"
        stats={[
        { value: "25+ Years", label: "Industrial Experience" },
        { value: "Range of Solutions", label: "Fire-rated &amp; Flexible" },
        { value: "Weather Resistance", label: "Moisture, Rain, Humidity" },
      ]}
        descriptionTitle="Why Proper Joint Sealing Matters"
        description="ALPS Contractors' professional sealant and silicone application services ensure durable waterproofing, weatherproofing, and joint protection for residential, commercial, and industrial buildings. With Auckland's coastal climate and high humidity, proper joint sealing is essential to prevent water ingress, mould growth, and structural damage."
        features={[
          {
            icon: Waves,
            title: "Waterproofing & Weather Resistance",
            description:
              "Correctly specified and applied sealants form the first line of defence against moisture, driving rain, and coastal exposure in Auckland's demanding climate.",
          },
          {
            icon: Grid3x3,
            title: "Movement Accommodation",
            description:
              "Flexible sealant systems absorb thermal expansion, structural settlement, and dynamic movement without cracking, delaminating, or losing adhesion.",
          },
          {
            icon: Flame,
            title: "Fire & Life Safety Compliance",
            description:
              "Fire-rated sealants at penetrations and construction joints are a passive fire protection requirement—ensuring compartment integrity is maintained under building code.",
          },
        ]}
        descriptionTitle2="Construction & Renovation Services"
        description2="We cover the full range of joint sealing applications across new construction, renovation, and maintenance projects."
        benefitTitle="Construction & Renovation Projects"
        benefits={[
          "Control joint sealing",
          "Fire rated sealant application",
          "Floor joint sealing",
          "Waterproofing joints for decks & balconies",
          "Curtain wall and façade joint sealing",
          "Structural glazing silicone",
          "Expansion and movement joints",
          "Precast concrete panel sealing",
        ]}

        cta={{
          title: "WHY CHOOSE ALPS CONTRACTORS",
          description:
            "Alps Contractors bring the same precision and product knowledge to sealant and silicone application as to every other service we offer. From curtain wall joints on high-rise facades to balcony waterproofing, floor joint sealing, and fire-rated penetrations—we specify correctly and install to last.",
        }}
      />

      {/* ── MATERIAL TYPES ── */}
      <section className="pb-16 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Material Types
          </h2>
          <p className="text-muted-foreground mb-10 pl-6 border-l-4 border-transparent">
            The right sealant is determined by substrate, movement class, fire rating, and environmental exposure. We work with the following systems.
          </p>
          <div className="divide-y border rounded-2xl overflow-hidden">
            {materialTypes.map((mat, i) => (
              <div key={i} className="flex items-start gap-6 px-6 py-5 bg-white even:bg-muted/20">
                <span className="shrink-0 font-semibold text-primary text-sm w-44 pt-0.5">
                  {mat.type}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{mat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SealantSiliconeApplication