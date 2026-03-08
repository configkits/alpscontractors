import Navbar from '@/components/navbar'
import ServiceTemplate from './ServiceTemplate'
import Footer from '@/components/footer'
import { Thermometer, FlaskConical, ShieldCheck, Clock } from "lucide-react"

// Replace these imports with the actual PU screed asset paths when available
import image1 from "../assets/services/industrialresin/IMG_4807-scaled-2880w.webp";
import image2 from "../assets/services/industrialresin/IMG_7725-scaled-2880w.webp";
import hero from "../assets/services/industrialresin/coatings-6-768x887-2880w.webp";

const thicknessOptions = [
  {
    thickness: "6 mm",
    description:
      "Heavy duty performance suitable for areas with hot water exposure but infrequent steam cleaning.",
  },
  {
    thickness: "9 mm",
    description:
      "The industry standard for environments with regular steam cleaning, extreme thermal shock, and intense mechanical wear.",
  },
  {
    thickness: "9–12+ mm",
    description:
      "Extra heavy duty builds designed for the most aggressive processing conditions; pump‑applied options available for rapid installation.",
  },
]

const variants = [
  "Self‑levelling PU systems for smooth, ultra clean spaces",
  "Anti‑static / ESD versions for electronics manufacturing and sensitive equipment zones",
]

const applicationGroups = [
  {
    title: "Food & Beverage Processing",
    description:
      "Designed for breweries, wineries, commercial kitchens, dairies, abattoirs, bakeries, washdown areas, and ready‑meal production where hygiene, thermal cycling, and rapid cleaning are daily realities.",
  },
  {
    title: "Pharmaceutical & Healthcare",
    description:
      "Perfect for cleanrooms, formulation areas, laboratories, and pilot plants requiring sterile, non‑contaminating, and easy to sanitise flooring.",
  },
  {
    title: "Chemical & Industrial Facilities",
    description:
      "Suited for chemical processing zones, bunded stores, engineering workshops, and wet industrial areas exposed to corrosive substances and mechanical stress.",
  },
]

const PolyurethaneScreed = () => {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />

      <ServiceTemplate
        heroImage={hero}
        contentImage={image1}
        contentImage2={image2}
        title="Heavy‑Duty Polyurethane Screed Flooring"
        subtitle="Exceptional durability, hygiene, and thermal performance for the most demanding industrial environments"
        stats={[
          { value: "FeRFA Type 8", label: "Industry Classification" },
          { value: "50–80 N/mm²", label: "Compressive Strength" },
          { value: "10+ Years", label: "Service Life" },
        ]}
        descriptionTitle="Key Performance Advantages"
        description="Engineered for the harshest operating conditions, this very heavy duty polyurethane (PU) screed system is classified as FeRFA Type 8, offering strength and resilience that often surpass the compressive performance of the concrete substrate beneath it."
        features={[
          {
            icon: Thermometer,
            title: "Unmatched Thermal Shock Resistance",
            description:
              "Formulated to withstand rapid and repeated temperature swings from ‑40 °C to +120 °C. At 9 mm, it tolerates steam cleaning at 140 °C without cracking, debonding, or deforming.",
          },
          {
            icon: FlaskConical,
            title: "Outstanding Chemical Protection",
            description:
              "Highly resistant to acids, alkalis, solvents, oils, and aggressive cleaning agents—ideal for food, beverage, dairy, chemical, and pharmaceutical facilities.",
          },
          {
            icon: ShieldCheck,
            title: "Hygienic, Seamless & Non‑Taint Finish",
            description:
              "Fully impermeable, joint‑free surface prevents bacterial harbourage. Optional coved skirting eliminates floor‑wall junctions for effortless cleaning.",
          },
          {
            icon: Clock,
            title: "Long Service Life",
            description:
              "When correctly specified and installed, delivers 10+ years of reliable performance in high‑demand operations—minimising downtime and lifecycle costs.",
          },
        ]}
        descriptionTitle2="Why Polyurethane Outperforms Standard Coatings"
        description2="Unlike standard epoxy coatings, polyurethane screed systems offer a unique combination of flexibility and strength ideal for thermally stressed environments. The inherent elasticity of the cured screed absorbs impact and micro-movement without cracking, while its dense, impermeable matrix delivers the chemical and moisture resistance required by modern food safety and industrial hygiene standards."
        benefitTitle="Industry Standards & Compliance"
        benefits={[
          "FeRFA Type 8 classification for very heavy duty use",
          "Suitable for BRC, SQF, and HACCP accredited facilities",
          "Non-taint and food-safe certified systems available",
          "ESD / anti-static variants for electronics manufacturing",
          "Compatible with underfloor heating systems",
          "Coved skirting options for full hygiene compliance",
        ]}
        cta={{
          title: "WHY CHOOSE ALPS CONTRACTORS",
          description:
            "Alps Contractors deliver polyurethane screed systems specified precisely for your industry and environment. Our experienced team assesses substrate condition, thermal exposure, chemical contact, and hygiene requirements to recommend the right build-up—then installs it to the highest standard.",
        }}
      />

      {/* ── SYSTEM THICKNESS OPTIONS ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            System Thickness Options
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Thickness is selected based on thermal exposure, traffic intensity, and cleaning regime.
          </p>
          <div className="divide-y border rounded-2xl overflow-hidden">
            {thicknessOptions.map((opt, i) => (
              <div key={i} className="flex items-start gap-6 px-6 py-5 bg-white even:bg-muted/20">
                <span className="shrink-0 font-mono font-bold text-primary text-lg w-20">
                  {opt.thickness}
                </span>
                <p className="text-sm text-primary leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-serif text-primary mb-4">Available Variants</h3>
            <ul className="space-y-3">
              {variants.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-primary">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── IDEAL APPLICATIONS ── */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Ideal Applications
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Designed for industries where hygiene, longevity, and extreme durability are non‑negotiable.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {applicationGroups.map((group, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6 shadow-sm">
                <h3 className="font-semibold text-primary mb-3 text-lg font-serif">{group.title}</h3>
                <p className="text-sm text-primary leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PolyurethaneScreed