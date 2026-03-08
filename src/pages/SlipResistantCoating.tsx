import Navbar from '@/components/navbar'
import ServiceTemplate from './ServiceTemplate'
import Footer from '@/components/footer'
import { ShieldCheck, Building2, Home, SlidersHorizontal, Droplets } from "lucide-react"

// Replace these imports with the actual asset paths when available
import image1 from "../assets/services/industrialresin/IMG_4807-scaled-2880w.webp";
import image2 from "../assets/services/industrialresin/IMG_7725-scaled-2880w.webp";
import hero from "../assets/services/industrialresin/coatings-6-768x887-2880w.webp";

const applicationAreas = [
  {
    icon: Building2,
    title: "Commercial & Industrial",
    items: [
      "Warehouses, factories, workshops",
      "Food processing and commercial kitchens",
      "Car parks, loading docks, plant rooms",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Public & Commercial Buildings",
    items: [
      "Entrances and lobbies",
      "Stairs, ramps, balconies",
      "Toilets and accessways exposed to moisture",
    ],
  },
  {
    icon: Home,
    title: "Residential & Light Commercial",
    items: [
      "Garages and driveways",
      "Pool surrounds and patios",
      "Bathrooms, outdoor paths, and steps",
    ],
  },
]

const coatingTypes = [
  {
    type: "Epoxy",
    features: "Hard wearing, chemical resistant, economical.",
    slipNote:
      "Easily textured with sand or quartz. Ideal for indoor industrial or wet areas.",
  },
  {
    type: "Polyurethane",
    features: "More flexible, superior UV and scratch resistance.",
    slipNote:
      "Often used as a textured topcoat. Excellent for UV‑exposed or frequently cleaned zones.",
  },
  {
    type: "Polyurea / Polyaspartic",
    features: "Very fast curing, highly durable, good UV stability.",
    slipNote:
      'Suitable for "one‑day" installations with aggregate or chip systems.',
  },
]

const specifyingFactors = [
  {
    title: "Required Slip Rating",
    description:
      "Consult NZ Building Code and AS/NZS 4586 requirements. Many wet internal areas need P3+ or R10+, while ramps, kitchens, and plant rooms require higher ratings.",
  },
  {
    title: "Environmental & Usage Conditions",
    description:
      "Epoxies suit indoor industrial and wet areas. Polyurethane or polyurea systems are preferred for UV‑exposed, thermally stressed, or external surfaces.",
  },
  {
    title: "Balance Between Texture & Cleanability",
    description:
      "Fine textures for bathrooms, building entries, and pedestrian routes. Coarse textures for greasy food‑processing plants, chemical zones, and steep ramps.",
  },
]

const SlipResistantCoating = () => {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />

      <ServiceTemplate
        heroImage={hero}
        contentImage={image1}
        contentImage2={image2}
        title="Slip Resistant Coating Systems"
        subtitle="Engineered for safety, durability, and compliance with AS/NZS 4586"
        stats={[
          { value: "AS/NZS 4586", label: "Compliance Standard" },
          { value: "SRV 39+", label: "Min. Wet Pendulum Rating" },
          { value: "R10–R13", label: "Ramp Rating Range" },
        ]}
        descriptionTitle="What Slip Resistant Coatings Are"
        description="Slip‑resistant coatings are high‑performance flooring solutions designed to increase surface friction and significantly reduce the risk of slips in both wet and dry conditions. In New Zealand, these systems are typically specified to meet the AS/NZS 4586 slip resistance classifications, ensuring compliance for commercial, industrial, public, and residential environments."
        features={[
          {
            icon: Droplets,
            title: "Broadcast Aggregate Systems",
            description:
              "Anti‑slip aggregates such as quartz, silica sand, or aluminium oxide are broadcast into the wet coating, creating a highly textured, durable surface.",
          },
          {
            icon: ShieldCheck,
            title: "Premixed Resin Systems",
            description:
              "Aggregates are factory‑blended into the resin for a consistent, controlled texture—ideal where uniformity and aesthetics are equally important.",
          },
          {
            icon: SlidersHorizontal,
            title: "Texture Range",
            description:
              "Profiles range from fine, barefoot‑friendly finishes for pools and bathrooms to high‑traction industrial grades for ramps, kitchens, and plant rooms.",
          },
        ]}
        descriptionTitle2="Slip Resistance in New Zealand (AS/NZS 4586)"
        description2="AS/NZS 4586 is the governing standard for new pedestrian surface materials across Australia and New Zealand. Many wet‑exposed access routes require a minimum Wet Pendulum SRV of 39 to comply. R‑ratings (R10–R13) apply to oil‑wet ramp testing, while A/B/C ratings cover wet‑barefoot conditions. Higher ratings indicate greater slip resistance, making them suitable for challenging environments such as commercial kitchens, ramps, pool surrounds, and industrial wet zones."
        benefitTitle="System Benefits"
        benefits={[
          "Compliant with AS/NZS 4586 slip resistance standard",
          "Seamless, easy‑clean surface with no grout lines",
          "Suitable for wet, oily, and chemically exposed areas",
          "Wide texture range from fine to heavy industrial grade",
          "Available in epoxy, polyurethane, and polyurea systems",
          "Decorative finish options including coloured flakes and quartz",
          "Applicable to concrete, ramps, stairs, and pool surrounds",
          "Long service life with low ongoing maintenance",
        ]}
        cta={{
          title: "WHY CHOOSE ALPS CONTRACTORS",
          description:
            "Alps Contractors design and install slip resistant coating systems that meet New Zealand compliance requirements without compromising on finish quality. From commercial kitchens to pool surrounds, ramps to warehouse floors—we specify the right system for your environment and install it to the standard your space demands.",
        }}
      />

      {/* ── WHERE SLIP RESISTANT COATINGS ARE USED ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Where Slip Resistant Coatings Are Used
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Slip resistant systems are specified across a wide range of environments wherever pedestrian safety is a priority.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {applicationAreas.map((area, i) => {
              const Icon = area.icon
              return (
                <div key={i} className="bg-muted/20 rounded-2xl border p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="font-semibold text-primary font-serif text-lg">{area.title}</p>
                  <ul className="space-y-2">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-primary">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMMON COATING TYPES ── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Common Coating Types
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Each resin system offers different performance characteristics—the right choice depends on your environment and slip rating requirement.
          </p>
          <div className="divide-y border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary text-white text-sm font-semibold px-6 py-3">
              <span>Coating Type</span>
              <span>Typical Features</span>
              <span>Notes for Slip Resistance</span>
            </div>
            {/* Rows */}
            {coatingTypes.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 px-6 py-5 bg-white even:bg-muted/20 text-sm"
              >
                <span className="font-semibold text-primary">{row.type}</span>
                <span className="text-primary leading-relaxed">{row.features}</span>
                <span className="text-primary leading-relaxed">{row.slipNote}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTING THE RIGHT SYSTEM ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Selecting the Right Slip Resistant System
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            When specifying a coating, these three factors determine the correct system for your environment.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {specifyingFactors.map((factor, i) => (
              <div key={i} className="bg-muted/20 rounded-2xl border p-6 flex flex-col gap-3">
                <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="font-semibold text-primary">{factor.title}</p>
                <p className="text-sm text-primary leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SlipResistantCoating