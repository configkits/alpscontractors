import { 
  Check, 
  ChevronRight, 
  Mail, 
  PhoneCall,  
} from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import serviceOffice from "../assets/service-office.png";
import vector from "../assets/vector/Vector.svg";
import waterproofing from "../assets/waterproofing.png";
import prodEpoxy from "../assets/product-epoxy.png";
import prodPU from "../assets/product-pu.png";
import prodRapid from "../assets/product-rapid.png";
import prodSlip from "../assets/product-slip.png";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { DATA } from "@/data";
import CountUp from "@/components/countup";
import FloatingPromo from "@/components/floatingpromo";
import { Link } from "wouter";
import Hero from "@/components/hero";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyChooseUs from "@/components/whyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca'] ">
      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <section className="bg-primary py-12 md:py-16 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {DATA.countup.map((stat, i) => (
              <div key={i} className="group">
                <div className="flex items-center justify-center gap-2 mb-2">
                <CountUp
                  from={stat.value * 0.8} // Start from 80% of the value for a more dynamic effect
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text text-3xl sm:text-4xl md:text-5xl font-serif text-accent mb-2 group-hover:scale-110 transition-transform duration-300"
                />
                {stat.label === "PROJECTS COMPLETED" && (
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    +
                  </div>
                )}
                </div>
                <div className="text-[9px] md:text-xs font-bold tracking-widest text-white/60 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section - Fixed structure */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src={waterproofing}
                  alt="Waterproofing Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-accent uppercase tracking-[0.3em] mb-4 block text-center lg:text-left">
                Expertise
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight text-center lg:text-left">
                Specialists in Resin flooring, waterproofing & Slip resistance
                systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg italic border-l-4 border-accent pl-6 text-center lg:text-left mx-auto lg:mx-0">
                We work with high-performance solutions designed for commercial,
                industrial, and residential spaces. Our systems deliver strength
                and durability in heavy-use environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-xl mx-auto lg:mx-0">
                {[
                  "EPOXY, POLYURETHANE & MMA flooring systems",
                  "Liquid applied membranes for roofs, decks, and wet areas",
                  "Slip Resistance Solutions for kitchens, bathrooms, ramps, and high risk environments",
                  "Fast curing resin systems for time sensitive projects",
                  "Heat, Chemical resistant, Waterproofing & UV protective Solutions",
                  "Slip Resistance Testing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-sm font-bold text-primary/80 uppercase tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Standardized */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8 border-l-4 border-accent pl-6 font-serif italic">
                ALPS Contractors mission is to provide high-performance floor
                systems that withstand the toughest conditions while ensuring
                maximum safety.
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                Industrial Flooring Excellence
              </h2>
              <ul className="space-y-4">
                {[
                  "Specialized resin systems for industrial plants and food processing.",
                  "Comprehensive slip-liability reduction with advanced testing.",
                  "Durable, seamless finishes complying with NZ safety standards.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceOffice}
                  alt="Industrial Resin Floor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl max-w-xs shadow-2xl hidden sm:block">
                <p className="font-serif italic text-lg leading-snug">
                  "Quality that stands the test of time."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Tabs - Simplified for Mobile */}
      <section className="bg-primary py-8 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase">
            {["Industrial", "Commercial", "Maintenance"].map((type, i) => (
              <a
                key={i}
                className="hover:text-accent transition-colors cursor-default flex items-center gap-2 group"
              >
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform" />{" "}
                {type}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <IndustriesWeServe/>

      {/* Product Systems */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-accent uppercase tracking-[0.4em] mb-6 text-center lg:text-left">
                  Our Specializations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {DATA.specialization.map((item, i) => (
                    <Link
                      href={item.url ? item.url : ""}
                      className="hover:text-white transition-colors"
                    >
                    <div
                      key={i}
                      className="p-4 bg-white rounded-xl border border-border shadow-sm hover:border-accent/50 hover:shadow-md transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <span className="text-[14px] font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                      </span>
                      <ChevronRight
                        size={14}
                        className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                      />
                    </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                  ALPS Flooring Systems
                </h2>
                <div className="w-20 h-1.5 bg-accent mb-6 rounded-full mx-auto lg:mx-0" />
                <p className="text-muted-foreground max-w-2xl italic text-lg leading-relaxed mx-auto lg:mx-0">
                  Precision-engineered resin and safety solutions for New
                  Zealand's most demanding environments.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  {
                    title: "Epoxy Resin Systems",
                    desc: "Heavy-duty epoxy systems designed for chemical resistance and extreme durability.",
                    img: prodEpoxy,
                  },
                  {
                    title: "Polyurethane Screeds",
                    desc: "Thermal shock resistant flooring ideal for food processing and industrial kitchens.",
                    img: prodPU,
                  },
                  {
                    title: "Rapid Cure Coatings",
                    desc: "Fast-turnaround floor solutions that minimize downtime for busy commercial spaces.",
                    img: prodRapid,
                  },
                  {
                    title: "Slip Resistance Coating",
                    desc: "Certified anti-slip treatments that meet or exceed NZ safety standards.",
                    img: prodSlip,
                  },
                ].map((product, i) => (
                  <Card
                    key={i}
                    className="group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden bg-white rounded-2xl"
                  >
                    <div className="h-56 md:h-64 overflow-hidden relative">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                      {/* <div className="absolute bottom-4 right-4 bg-accent w-12 h-12 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                        <ChevronRight className="text-white" size={24} />
                      </div> */}
                    </div>
                    <CardContent className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-serif text-primary mb-3">
                        {product.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                        {product.desc}
                      </p>
                      {/* <Button
                        variant="link"
                        className="text-accent p-0 font-bold hover:no-underline text-xs tracking-[0.2em] uppercase"
                      >
                        TECHNICAL SPECS{" "}
                        <ChevronRight
                          size={14}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Button> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white border-y overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">
              Strategic Collaboration
            </h2>
            <h3 className="text-4xl font-serif text-primary">
              Our Trusted Partners
            </h3>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex whitespace-nowrap animate-marquee-right ">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {DATA.partner.map((data, idx) => (
                  <a href={data.url}>
                    <div
                      key={`${data.name}-${idx}`}
                      className="w-48 h-28 bg-primary/50 rounded-xl flex items-center justify-center p-6 hover:grayscale-0 transition-all  hover:opacity-100 border border-transparent hover:border-accent flex-shrink-0"
                    >
                      <img
                        src={data.images}
                        alt={`Partner ${data.name}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-y overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-primary">
            Some of Our Clients
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {DATA.client.map((client, i) => (
              <div key={i} className="flex gap-4 md:gap-8 px-2 md:px-4">
                {client.images && (
                  <div
                    key={i}
                    className="w-32 md:w-48 h-20 md:h-28 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 md:p-4 hover:grayscale-0 transition-all  hover:opacity-100 border border-transparent hover:border-accent/20 flex-shrink-0"
                  >
                      <img
                        src={client.images}
                        alt={`Client ${client.name}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs/>

      {/* Certifications  Section */}
      <section className="py-16 md:py-24 bg-muted/20 border-y overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-primary">
            Certifications
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap justify-center ">
            {DATA.certification.map((cert, i) => (
              <div key={i} className="flex gap-4 md:gap-8 px-2 md:px-4">
                {cert.images && (
                  <div
                    key={i}
                    className="w-32 md:w-48 h-20 md:h-28 bg-white rounded-xl shadow-sm flex items-center justify-center p-2 md:p-2 transition-all  border border-transparent hover:border-accent/20 flex-shrink-0"
                  >
                      <img
                        src={cert.images}
                        alt={cert.name}
                        className="max-h-full max-w-full object-contain"
                      />

                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 md:py-24 bg-primary text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-24" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif mb-4">
                Request a Consultation
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
              <p className="text-white/70 max-w-xl mx-auto">
                Expert advice for your next high-performance flooring or safety
                project.
              </p>
            </div>
            <div className="gap-4 bg-white/5 p-6 md:p-12 rounded-3xl backdrop-blur-md text-white border justify-center border-white/10 shadow-2xl">
              <div className="flex flex-row justify-evenly">
                <div className="justify-items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-accent" />
                    <h2 className="text-2xl font-serif text-white">Email Us</h2>
                  </div>
                  <a href={`mailto:${DATA.email}`}>
                    <p className="text-white hover:text-white/70 ">{DATA.email}</p>
                  </a>
                </div>

                <div className="justify-items-center">
                  <div className="flex items-center gap-3 mb-4">
                    <PhoneCall className="text-accent" />
                    <h2 className="text-2xl font-serif text-white">
                      Contact Number
                    </h2>
                  </div>
                  <div className="justify-items-center">
                  <a href={`tel:${DATA.tel1.withCode}`}>
                    <p className="text-white hover:text-white/70 transition cursor-pointer">
                      {DATA.tel1.number}
                    </p>
                  </a>
                  </div>

                  <div className="justify-items-center">
                  <a href={`tel:${DATA.tel2.withCode}`}>
                    <p className="text-white hover:text-white/70 transition cursor-pointer">
                      {DATA.tel2.number}
                    </p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <div className="absolute right-110 top-260 h-full w-[180vh] pointer-events-none opacity-25  translate-x-1/4">
        <img
          src={vector}
          alt=""
          className="h-full w-full object-contain object-right"
        />
      </div>
    </div>
  );
}
