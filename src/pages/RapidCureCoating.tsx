import Navbar from '@/components/navbar'
import ServiceTemplate from './ServiceTemplate'
import Footer from '@/components/footer'
import { Zap, Layers, Sun, Clock, ShieldCheck, DollarSign, MapPin, SlidersHorizontal } from "lucide-react"

// Replace these imports with the actual asset paths when available

import image1 from "../assets/services/industrialresin/IMG_4807-scaled-2880w.webp";
import image2 from "../assets/services/industrialresin/IMG_7725-scaled-2880w.webp";
import hero from "../assets/services/industrialresin/coatings-6-768x887-2880w.webp";

const rapidCureMeaning = [
  {
    icon: Clock,
    title: "Fast return to service",
    description:
      "Light foot traffic typically possible in 1–4 hours, with full cure often achieved within 24 hours, depending on the system (especially polyaspartics and fast cure epoxies).",
  },
  {
    icon: Layers,
    title: "Multiple coats in one day",
    description:
      "Installers can apply several layers within hours rather than days, enabling quicker project turnover and reduced disruption.",
  },
  {
    icon: Zap,
    title: "Ideal for tight schedules",
    description:
      "Facilities can hand spaces back to the client much sooner—often within the same day or overnight.",
  },
]

const technologies = [
  {
    icon: Zap,
    title: "Fast‑Cure Epoxies",
    description:
      "Modified epoxy chemistries that accelerate hardening while maintaining excellent durability.",
    uses: "Warehouses, industrial floors, production areas.",
  },
  {
    icon: Clock,
    title: "Polyaspartic Coatings",
    description:
      "Among the fastest‑curing systems, often allowing light use within 2–4 hours. Known for outstanding abrasion resistance, UV stability, and clarity.",
    uses: '"One‑day" garage floors, retail spaces, industrial sites, exterior slabs.',
  },
  {
    icon: Sun,
    title: "UV‑Curable Coatings",
    description:
      "Ultra‑rapid cure in seconds under UV exposure. More commonly used in manufacturing lines or precision industrial applications rather than large floor areas.",
    uses: "Component coatings, production lines, specialty industrial surfaces.",
  },
]

const advantages = [
  {
    icon: Clock,
    title: "Dramatically Reduced Downtime",
    description:
      "Essential for factories, retail stores, logistics hubs, and commercial kitchens where multi‑day closures are not an option.",
  },
  {
    icon: ShieldCheck,
    title: "High‑Performance Protection",
    description:
      "Despite the rapid cure, modern systems deliver strong chemical resistance, abrasion and impact durability, slip‑resistant texture options, and UV stability (especially polyaspartics).",
  },
  {
    icon: DollarSign,
    title: "Lower Labour & Application Cost",
    description:
      "Thicker layers or fewer coats can often be applied in one session—reducing labour hours, project duration, and overall costs.",
  },
]

const applications = [
  {
    title: "Industrial & Warehouse Floors",
    description: "Areas needing quick turnaround, such as production zones and loading docks.",
  },
  {
    title: "Retail, Showrooms & Garages",
    description: "Spaces where closing for extended periods is impractical or expensive.",
  },
  {
    title: "Car Parks, Exterior Decks & Hangars",
    description:
      "Where weather windows are tight and fast‑cure, UV‑resistant products like polyaspartics excel.",
  },
  {
    title: "Commercial Kitchens & Hospitality",
    description: "Where sanitation requirements and operational uptime are critical.",
  },
]

const specifyingFactors = [
  "Required downtime window (overnight, weekend, single day return to service)",
  "Substrate condition and moisture level",
  "Temperature and humidity at installation",
  "Expected chemical and mechanical exposure",
  "Level of UV exposure",
  "Necessary slip‑resistance rating",
]

const RapidCureCoating = () => {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />

      <ServiceTemplate
        heroImage={hero}
        contentImage={image1}
        contentImage2={image2}
        title="Rapid Cure Flooring & Surface Coating Systems"
        subtitle="High‑performance protection with minimal downtime"
        stats={[
          { value: "1–4 Hours", label: "Return to Light Traffic" },
          { value: "24 Hours", label: "Typical Full Cure" },
          { value: "1 Day", label: "Multi-Coat Application" },
        ]}
        descriptionTitle="What Are Rapid Cure Coatings?"
        description="Rapid cure coatings are advanced flooring and surface systems engineered to harden significantly faster than traditional coatings—allowing facilities to return to service in a fraction of the time. Designed for environments where shutdowns are costly or impractical, these systems deliver strong mechanical, chemical, and aesthetic performance without extended curing delays."
        features={[
          {
            icon: Zap,
            title: "Fast‑Cure Epoxies",
            description:
              "Modified epoxy chemistries that accelerate hardening while maintaining excellent durability. Ideal for warehouses, industrial floors, and production areas.",
          },
          {
            icon: Clock,
            title: "Polyaspartic Coatings",
            description:
              "Among the fastest‑curing systems, often allowing light use within 2–4 hours. Outstanding abrasion resistance, UV stability, and clarity.",
          },
          {
            icon: Sun,
            title: "UV‑Curable Coatings",
            description:
              "Ultra‑rapid cure in seconds under UV exposure—used in manufacturing lines, production lines, and specialty industrial surfaces.",
          },
        ]}
        descriptionTitle2="Key Advantages"
        description2="Despite rapid cure times, modern systems deliver no compromise on performance. Chemical resistance, abrasion durability, UV stability, and slip-resistant textures are all achievable—combined with the operational benefit of dramatically reduced downtime and lower overall project costs."
        benefitTitle="Performance Capabilities"
        benefits={[
          "Light traffic in as little as 1–4 hours",
          "Full cure typically within 24 hours",
          "Multiple coats applied in a single day",
          "Strong chemical and abrasion resistance",
          "UV stable options for exterior use",
          "Slip-resistant aggregate finishes available",
          "Suitable for overnight and weekend installations",
          "Reduced project cost through fewer labour days",
        ]}
        cta={{
          title: "WHY CHOOSE ALPS CONTRACTORS",
          description:
            "Alps Contractors specify and install rapid cure systems tailored to your operational constraints. Whether it's an overnight retail refurbishment, a weekend warehouse turnaround, or a single-day garage upgrade—we'll recommend the right product and deliver a high-performance result with minimal disruption.",
        }}
      />

      {/* ── WHAT RAPID CURE REALLY MEANS ── */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            What "Rapid Cure" Really Means
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Speed without compromise—here's what sets rapid cure systems apart in practice.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {rapidCureMeaning.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-muted/20 rounded-2xl border p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">{item.title}</p>
                    <p className="text-sm text-primary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CORE TECHNOLOGIES ── */}
      <section className="pb-20 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Core Rapid Cure Technologies
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Each technology is suited to different performance requirements and turnaround windows.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {technologies.map((tech, i) => {
              const Icon = tech.icon
              return (
                <div key={i} className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="font-semibold text-primary text-lg font-serif">{tech.title}</p>
                  <p className="text-sm text-primary leading-relaxed">{tech.description}</p>
                  <div className="mt-auto pt-3 border-t">
                    <p className="text-xs text-primary">
                      <span className="font-semibold text-primary">Typical uses: </span>
                      {tech.uses}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── KEY ADVANTAGES ── */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Key Advantages
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Rapid cure systems are built around operational reality—not just technical performance.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon
              return (
                <div key={i} className="bg-muted/20 rounded-2xl border p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2">{adv.title}</p>
                    <p className="text-sm text-primary leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TYPICAL APPLICATIONS ── */}
      <section className="pb-20 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Typical Applications
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            Wherever downtime is expensive, rapid cure systems are the right choice.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-2xl border p-5 flex items-start gap-4 shadow-sm">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">{app.title}</p>
                  <p className="text-sm text-primary leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHOOSING THE RIGHT SYSTEM ── */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Choosing the Right Rapid Cure System
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            When specifying a rapid‑cure coating, consider the following factors. For most "one‑day" upgrades—garages, small workshops, retail refurbishments—polyaspartic or fast cure epoxy systems are typically the most suitable options.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {specifyingFactors.map((factor, i) => (
              <div key={i} className="flex items-center gap-3 bg-muted/20 rounded-xl px-5 py-4 border">
                <SlidersHorizontal size={15} className="text-accent shrink-0" />
                <span className="text-sm text-primary leading-relaxed">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RapidCureCoating