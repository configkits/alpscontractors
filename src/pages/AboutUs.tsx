
import { Check, Target, Eye, Shield, Award, Users, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import healthandsafety from "@/assets/5-1920w.jpg";
import Navbar from "@/components/navbar";
import { workImage6 } from "@/assets/work";
import Footer from "@/components/footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
        <Navbar />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <img 
          src={workImage6} 
          alt="ALPS Team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">About Us</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto italic">
            New Zealand-based specialists in high-performance industrial resin flooring and waterproofing.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">
                Over 25 Years of Industry Excellence
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  ALPS Contractors is a New Zealand-based specialist contractor delivering high-performance industrial resin flooring, waterproofing, and protective coating systems.
                </p>
                <p>
                  With over 25 years of industry experience we provide hands-on leadership and technical expertise, ensuring rigorous quality control, full compliance, and professional project delivery from specification through to completion.
                </p>
                <p className="font-serif italic border-l-4 border-accent pl-6 text-primary">
                  Our focus is simple: Quality finishes built to last — every time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                   <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" alt="Worksite" className="w-full h-full object-cover" />
                </div>
                <div className="bg-accent p-6 rounded-2xl text-white text-center">
                   <div className="text-3xl font-serif mb-1">25+</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest">Years Exp</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-primary p-6 rounded-2xl text-white text-center">
                   <Award className="mx-auto mb-2 text-accent" size={32} />
                   <div className="text-[10px] font-bold uppercase tracking-widest">NZ Certified</div>
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                   <img src={healthandsafety} alt="Industrial Floor" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-none shadow-xl bg-white group hover:bg-primary transition-colors duration-500">
              <CardContent className="p-0">
                <Eye className="text-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">Our Vision</h4>
                <p className="text-muted-foreground group-hover:text-white/70 transition-colors text-lg italic">
                  To be the leading contractor in industrial resin solutions, recognised for excellence, integrity, and innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 border-none shadow-xl bg-white group hover:bg-primary transition-colors duration-500">
              <CardContent className="p-0">
                <Target className="text-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
                <h4 className="text-2xl font-serif mb-4 group-hover:text-white transition-colors">Our Mission</h4>
                <p className="text-muted-foreground group-hover:text-white/70 transition-colors text-lg italic">
                  To provide innovative, reliable, and sustainable flooring and waterproofing solutions that enhance the safety, functionality, and longevity of industrial and commercial spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">The ALPS Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-primary mb-8">Why Choose Us?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality craftsmanship, technical expertise, and long-lasting performance ensures every project meets the highest standards—giving you confidence and peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Compliance Driven", desc: "Full adherence to NZBC and WorkSafe standards." },
              { icon: Zap, title: "Fast Turnaround", desc: "Advanced fast-cure systems to minimize downtime." },
              { icon: Clock, title: "Proven Durability", desc: "Systems designed for extreme industrial wear." },
              { icon: Users, title: "Expert Leadership", desc: "Hands-on project management from 25+ years experience." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl shadow-lg">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h5 className="text-xl font-serif text-primary">{item.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">Certifications</h2>
              <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Safety & Compliance Standards</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                ALPS Contractors operates under strict Health & Safety systems to protect our team and your property. We are Site Safe members and Site Wise certified.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Site Safe Member",
                  "Site Wise Certified",
                  "Site-Specific Safety Plans (SSSP)",
                  "Job Safety Analysis (JSA)",
                  "Hazard Registers & MSDS",
                  "QA Documentation & PS3 Statements"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/20 flex items-center justify-center rounded-full">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-3 gap-4">
               {["Flowcrete", "Sika", "Mapei", "Carboline", "Allnex", "Equus", "Nuthane", "Degadur", "Cemix"].map((partner, i) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-accent hover:border-accent transition-all cursor-default">
                   {partner}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-primary">Industries We Serve</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Construction & Development",
              "Supermarkets & Retail",
              "Education Facilities",
              "Retirement Villages",
              "Hotels & Hospitality",
              "Commercial Carparks",
              "Warehouses & Logistics",
              "Food & Beverage Processing",
              "Pharmaceutical Environments",
              "Marine Industries"
            ].map((industry, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-2xl border border-transparent hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all group">
                <p className="text-sm font-bold text-primary/70 group-hover:text-primary transition-colors uppercase tracking-wide leading-tight">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to start your project?</h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}