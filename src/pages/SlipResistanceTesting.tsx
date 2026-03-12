import {  Check, Plus, } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import detailImg from "../assets/1772419738798.jpeg";
import heroImg from "../assets/1772419740445.jpeg";
import Navbar from '@/components/navbar'
import Footer from "@/components/footer";
import blog1 from "../assets/1772419740987.jpeg";
import prodEpoxy from "../assets/1772419740637.jpeg";
import { DATA } from "@/data";
import { workImage1 } from "@/assets/work";

const SlipResistanceTesting = () => {
  return (
    <div className="min-h-screen bg-primary-foreground font-['Lexend_Deca']">
      <Navbar />

      <section className="relative h-[500px] flex items-center overflow-hidden rounded-b-4xl">
        <img
          src={heroImg}
          alt="Slip Resistance Testing"
          className="absolute inset-0 w-full h-full object-cover rounded-b-4xl"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-4">
            Slip Resistance Test
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            Reduce slip and fall risks with certified slip testing for
            commercial properties.
          </h1>
          <p className="mt-8 text-white/60 font-serif italic text-lg">
            Delivering Excellence in All We Do
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-6">
                <Plus className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Certified Floor Safety & Compliance Testing
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Regular slip compliance testing is a vital part of workplace
                safety and risk management. Our certified testing gives you
                peace of mind that your floors meet and maintain New Zealand’s
                slip resistance standards helping to prevent costly accidents
                and ensure compliance.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <img
                src={detailImg}
                alt="Compliance Testing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Reliable Testing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl aspect-square">
              <img
                src={prodEpoxy}
                alt="Reliable Testing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Reliable Testing for Peace of Mind
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                In commercial environments, flooring naturally wears over time.
                Everyday foot traffic, cleaning chemicals, and maintenance
                practices can all affect the surface’s slip resistance. If your
                floors fall below New Zealand’s required standards, we can help
                you assess, restore, and maintain compliance with a clear action
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* High Traffic Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-lg mb-6">
                <Plus className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Keep High-Traffic Spaces Safe
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We recommend including slip testing as a part of your Health and
                annual Safety Plan review, for all high-use areas including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Entrances, foyers, and lobbies",
                  "Internal and external walkways",
                  "Steps, ramps, and accessways",
                  "Kitchens and restrooms",
                  "Industrial floors",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-wide"
                  >
                    <Check size={16} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted-foreground font-medium border-l-4 border-accent pl-4">
                Alps Contractors are certified slip testing specialists,
                providing detailed reports and results aligned with New Zealand
                WorkSafe and building compliance standards.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={blog1}
                alt="High Traffic Safety"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center mb-6">
            <Plus className="text-accent" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">
            WHY CHOOSE ALPS CONTRACTORS
          </h2>
          <p className="text-white/70 text-lg leading-relaxed italic">
            Choosing Alps Contractors, Auckland means working with a trusted
            team focused on accuracy, safety, and reliability. We take pride in
            delivering compliant, independent testing backed by industry
            experience and certification. From single-site audits to scheduled
            testing programs, our service ensures you stay proactive in managing
            floor safety.
          </p>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.4em]">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">
              Slip Resistance Testing Process
            </h2>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent/20 -translate-x-1/2 hidden md:block" />

            {[
              {
                step: "01",
                title: "Slip Resistance Test",
                desc: "We measure the slip resistance of your flooring against current New Zealand standards to ensure it meets required safety and compliance levels.",
              },
              {
                step: "02",
                title: "Sample Application",
                desc: "A small test area can be treated first, allowing you to clearly see the improvement before full application.",
              },
              {
                step: "03",
                title: "Full Application",
                desc: "Our experienced applicators apply the treatment or coating efficiently, ensuring a quality finish with minimal disruption.",
              },
              {
                step: "04",
                title: "Report / Certificate",
                desc: "You will receive a certification document confirming compliance and safety.",
              },
              {
                step: "05",
                title: "Maintenance & Annual Check-Up",
                desc: "We provide ongoing assistance to ensure long-lasting and reliable results.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-3 mb-5 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 bg-muted/30 border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">
                    Step {item.step}
                  </span>
                  <h3 className="text-xl font-serif text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                    {i + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Floor Safety Matters Section */}
<section className="py-20 bg-primary text-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-14">
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="text-xs font-bold text-accent uppercase tracking-[0.4em]">
          The Stakes
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif">
        Why Floor Safety Matters
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {[
        {
          number: "01",
          title: "One Slip Can Change a Life",
          desc: "Falls often result in serious injuries, lengthy rehabilitation, and ongoing medical issues.",
        },
        {
          number: "02",
          title: "The Cost Adds Up Fast",
          desc: "Insurance claims, lost productivity, and liability expenses total billions annually.",
        },
        {
          number: "03",
          title: "Prevention Is Proven",
          desc: "Modern anti-slip treatments and coatings make floors safer, stronger, and regulation-ready.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative border border-white/10 rounded-2xl p-8 bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <span className="text-5xl font-serif text-accent group-hover:text-accent/40 transition-colors leading-none block mb-6">
            {item.number}
          </span>
          <h3 className="text-xl font-serif mb-4">{item.title}</h3>
          <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          <div className="absolute bottom-0 left-8 right-8 h-px bg-accent/0 group-hover:bg-accent/40 transition-colors" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="rounded-2xl overflow-hidden hidden shadow-2xl md:block sticky top-32">
              <img
                src={workImage1}
                alt="FAQ Section"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-accent rounded-full" />
                <h2 className="text-2xl md:text-3xl font-serif text-primary uppercase">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                  {
                    q: "What is slip resistance testing and why is it important?",
                    a: "Slip resistance testing measures the frictional properties of floor surfaces to determine their safety level under various conditions (wet/dry). It's crucial for preventing slip and fall accidents and meeting NZ safety standards.",
                  },
                  {
                    q: "How often should slip testing be carried out?",
                    a: "We recommend annual testing for most commercial spaces, though high-traffic or high-risk areas like commercial kitchens may require more frequent audits.",
                  },
                  {
                    q: "What happens if my floor fails the slip resistance test?",
                    a: "We provide a detailed report and a clear action plan to restore compliance, which may include specialized treatments, cleaning regime adjustments, or resurfacing.",
                  },
                  {
                    q: "What types of floors can you test?",
                    a: "We can test almost any hard floor surface, including concrete, resin, tile, stone, and specialized safety flooring.",
                  },
                  {
                    q: "How long does the testing process take?",
                    a: "Most site audits are completed within 2-4 hours, depending on the size and number of areas being tested.",
                  },
                  {
                    q: "Do you provide certification for compliance?",
                    a: "Yes, we provide comprehensive, independent reports that satisfy WorkSafe NZ requirements and building compliance standards.",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-white rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-primary font-bold text-left hover:no-underline py-6">
                      {i + 1}. {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Banner */}

      <section className="py-12 bg-primary border-t border-white/5 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-4">
            <Plus className="text-accent" size={24} />
          </div>
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-bold">
            For professional slip resistance test across Auckland.
          </p>
          <p className="text-xl md:text-2xl font-serif">
            CALL ALPS CONTRACTORS TODAY ON{" "}
            <a href={`tel:${DATA.tel1.href}`} className="hover:underline hover:text-accent transition-colors">
              <span className="text-accent">{DATA.tel1.number}</span>
            </a>{" "}
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default SlipResistanceTesting