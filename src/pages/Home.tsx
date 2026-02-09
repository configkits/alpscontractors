import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Phone, Mail, MapPin, ChevronRight, Star, Facebook, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import serviceOffice from "../assets/service-office.png";
import logo from "../assets/alpslogo.jpg";
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import waterproofing from "../assets/waterproofing.png";
import partner1 from "../assets/partner-1.png";
import partner2 from "../assets/partner-2.png";
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import prodEpoxy from "../assets/product-epoxy.png";
import prodPU from "../assets/product-pu.png";
import prodRapid from "../assets/product-rapid.png";
import prodSlip from "../assets/product-slip.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header */}
      <header className="bg-white border-b py-2 px-6 flex justify-between items-center text-xs font-medium text-muted-foreground">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1"><Phone size={14} className="text-accent" /> 0800 754 773</span>
          <span className="flex items-center gap-1"><Mail size={14} className="text-accent" /> info@alps-contractors.co.nz</span>
          <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
            <MapPin size={14} className="text-accent" /> Auckland, NZ
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 border-r pr-4">
            <a href="https://facebook.com/alps" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook size={14} />
            </a>
            <a href="https://linkedin.com/company/alps" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
          <a href="#" className="hover:text-accent transition-colors">News</a>
          <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
        </div>
      </header>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="ALPS Logo" className="h-10 w-auto" />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-primary items-center">
          <Link href="/" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1 outline-none">
              Services <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-border shadow-xl min-w-[320px] p-2">
              {[
                { name: "Industrial Resin Flooring Solutions", path: "/services/industrial-resin" },
                { name: "Liquid Waterproofing Solutions", path: "/services/liquid-waterproofing" },
                { name: "Anti-Slip Solutions", path: "/services/anti-slip" },
                { name: "Concrete Pool Coating Solutions", path: "/services/pool-coating" },
                { name: "Concrete Repairs", path: "/services/concrete-repairs" },
                { name: "Interior Epoxy Floors", path: "/services/interior-epoxy" },
                { name: "Why Epoxy Flooring?", path: "/services/why-epoxy" }
              ].map((service, i) => (
                <DropdownMenuItem key={i} className="hover:bg-muted cursor-pointer py-3 px-4 text-sm text-primary font-bold focus:bg-accent focus:text-white transition-colors rounded-md mb-1 last:mb-0">
                  <Link href={service.path} className="w-full">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/our-work" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">Our Work</Link>
          <Link href="/contact" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">Contact</Link>
          <Link href="/blog" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1">Blog</Link>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-white font-bold">
          GET A QUOTE
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <img 
          src={heroBg} 
          alt="Industrial Resin Flooring" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              New Zealand's<br/>
              <span className="text-accent">Industrial Resin</span> &<br/>
              Safety Specialists.
            </h1>
            <p className="text-xl mb-8 text-white/80 max-w-xl">
              Professional floor systems and anti-slip solutions for industrial, commercial, and safety-critical environments.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-7 text-lg font-bold">
                View Systems
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-7 text-lg font-bold">
                Our Services
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Promo */}
        <div className="absolute top-12 right-12 bg-accent text-white p-8 rounded-full w-48 h-48 flex flex-col justify-center items-center text-center rotate-12 shadow-xl border-4 border-white/20">
          <span className="text-xs font-bold uppercase tracking-widest mb-2">NZ Trusted</span>
          <span className="text-lg font-serif italic leading-tight">Industrial Resin Experts</span>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary py-16 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "SQUARE METERS COATED", value: "28,840" },
              { label: "LINE METERS MARKING", value: "850" },
              { label: "SQUARE METERS ANTISIPLED", value: "9,975" },
              { label: "PROJECTS COMPLETED", value: "550+" }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-serif text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold tracking-widest text-white/60 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={waterproofing} alt="Waterproofing Systems" className="rounded-2xl shadow-2xl relative z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-6">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Specialists in Flooring & Waterproofing Systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg italic">
                We work with a broad range of high-performance solutions designed for commercial, industrial, and residential spaces. Our epoxy resin and polyurethane systems deliver strength and durability in heavy-use environments, while our fast-curing resin systems ensure projects are completed with minimal downtime.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For areas exposed to moisture, we offer waterproofing membranes designed to protect roofs, decks, balconies, and wet areas. By partnering with trusted brands such as <strong>Sika, Mapei, Flowcrete, Allnex, and Equus</strong>, we guarantee every project meets the highest quality standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-12">
                {[
                  "Epoxy and polyurethane flooring systems",
                  "Liquid-applied waterproofing membranes",
                  "Anti-slip finishes for high-risk zones",
                  "Fast-curing resin systems",
                  "Chemical-resistant pool coatings"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-primary/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8 border-l-4 border-accent pl-6 font-serif italic">
                ALPS Contractors mission is to provide high-performance floor systems that withstand the toughest conditions while ensuring maximum safety.
              </p>
              <h2 className="text-3xl font-serif text-primary mb-6">Industrial Floor Excellence</h2>
              <ul className="space-y-4">
                {[
                  "Specialized resin systems for industrial plants, food processing, and high-traffic warehouses.",
                  "Comprehensive slip-liability reduction with advanced testing and certified treatments.",
                  "Durable, seamless, and hygienic finishes that comply with all NZ safety and health standards."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img src={serviceOffice} alt="Industrial Resin Floor" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-lg max-w-xs shadow-xl">
                <p className="font-serif italic text-lg">"Quality that stands the test of time."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs CTA */}
      <section className="bg-primary py-6 text-white overflow-hidden">
        <div className="container mx-auto px-6 flex justify-center gap-12 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-accent rounded-full"/> Industrial</a>
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-accent rounded-full"/> Commercial</a>
          <a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-accent rounded-full"/> Maintenance</a>
        </div>
      </section>

      {/* Products Section with Sidebar */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sticky Sidebar (1/4 width approx) */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-28 space-y-4">
                <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-6">Our Specializations</h3>
                {[
                  "INDUSTRIAL RESIN FLOORING SOLUTIONS",
                  "LIQUID WATERPROOFING SOLUTIONS",
                  "ANTI - SLIP SOLUTIONS",
                  "POOL COATING SOLUTIONS",
                  "CONCRETE REPAIRS",
                  "SILICONE & SEALANT SOLUTIONS"
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="p-4 bg-white rounded-lg border border-border shadow-sm hover:border-accent/50 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <span className="text-[10px] font-bold text-primary group-hover:text-accent transition-colors leading-tight block">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrollable Content (3/4 width approx) */}
            <div className="lg:w-3/4">
              <div className="mb-16">
                <h2 className="text-4xl font-serif text-primary mb-4">ALPS Product Systems</h2>
                <p className="text-muted-foreground max-w-2xl italic">High performance resin and safety solutions</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Epoxy Resin Systems", desc: "Heavy-duty epoxy floor systems designed for chemical resistance and extreme durability.", img: prodEpoxy },
                  { title: "Polyurethane Screeds", desc: "Thermal shock resistant flooring ideal for food processing and industrial kitchens.", img: prodPU },
                  { title: "Rapid Cure Coatings", desc: "Fast-turnaround floor solutions that minimize downtime for busy commercial spaces.", img: prodRapid },
                  { title: "Industrial Slip Guard", desc: "Certified anti-slip treatments that meet or exceed NZ safety standards.", img: prodSlip }
                ].map((product, i) => (
                  <Card key={i} className="group hover:shadow-2xl transition-all duration-500 border-none overflow-hidden bg-white">
                    <div className="h-64 overflow-hidden relative">
                       <img src={product.img} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                       <div className="absolute bottom-4 right-4 bg-accent w-12 h-12 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                          <ChevronRight className="text-white" size={24} />
                       </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-serif text-primary mb-3">{product.title}</h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">{product.desc}</p>
                      <Button variant="link" className="text-accent p-0 font-bold hover:no-underline text-sm tracking-wider">
                        TECHNICAL SPECS <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Strategic Collaboration</h2>
            <h3 className="text-4xl font-serif text-primary">Our Trusted Partners</h3>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {[partner1, partner2, partner1, partner2, partner1, partner2].map((img, idx) => (
                  <div key={idx} className="w-48 h-28 bg-muted/30 rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 border border-transparent hover:border-accent/20 flex-shrink-0">
                    <img src={img} alt={`Partner ${idx}`} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-muted/5 border-b overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Proven Results</h2>
            <h3 className="text-4xl font-serif text-primary">Some of Our Clients</h3>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fcfdfc] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fcfdfc] to-transparent z-10" />
          
          <div className="flex whitespace-nowrap animate-marquee [animation-direction:reverse]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                {[client1, client2, client1, client2, client1, client2].map((img, idx) => (
                  <div key={idx} className="w-48 h-28 bg-muted/30 rounded-xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 border border-transparent hover:border-accent/20 flex-shrink-0">
                    <img src={img} alt={`Client ${idx}`} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white border-y">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-4xl font-serif text-primary mb-6">Client Feedback</h2>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#F26522" color="#F26522" />)}
              </div>
              <p className="text-xl font-serif italic text-muted-foreground leading-relaxed">
                "The resin floor ALPS installed has transformed our facility. Their attention to detail and safety compliance is unmatched in New Zealand."
              </p>
              <p className="mt-4 font-bold text-primary">— NZ Logistics Hub</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[client1, client2, client1, client2].map((img, i) => (
                 <div key={i} className="w-32 h-32 bg-muted rounded-xl flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all border border-border">
                    <img src={img} alt={`Client feedback ${i}`} className="max-h-full max-w-full object-contain" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-4">Latest News</h2>
              <p className="text-muted-foreground italic">Insights and updates from the world of industrial flooring</p>
            </div>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-bold hidden md:flex">
              VIEW ALL POSTS
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Industrial Resin: Sustainability & Durability",
                date: "October 12, 2025",
                img: blog1,
                excerpt: "Exploring new eco-friendly resin compositions that don't compromise on heavy-duty performance."
              },
              {
                title: "Safety First: New NZ Slip Standards for 2026",
                date: "September 28, 2025",
                img: blog2,
                excerpt: "What commercial property managers need to know about the upcoming safety regulation updates."
              },
              {
                title: "Transforming Commercial Spaces with High-Gloss Finishes",
                date: "September 15, 2025",
                img: blog3,
                excerpt: "How architectural resin flooring is becoming the top choice for modern retail and office environments."
              }
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-xl mb-6 bg-muted">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{post.date}</span>
                <h3 className="text-xl font-serif text-primary mt-2 mb-4 group-hover:text-accent transition-colors leading-tight">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-accent text-sm font-bold">
                  READ MORE <ChevronRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="border-accent text-accent w-full font-bold">
              VIEW ALL POSTS
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-24" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-4">Request a Consultation</h2>
              <p className="text-white/70">Expert advice for your industrial or commercial flooring project.</p>
            </div>
            <form className="grid md:grid-cols-2 gap-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="space-y-4">
                <Input placeholder="Full Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent" />
                <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent" />
                <Input placeholder="Project Type" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent" />
              </div>
              <div className="space-y-4">
                <Textarea placeholder="How can we help?" className="h-full min-h-[140px] bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-accent" />
              </div>
              <div className="md:col-span-2 text-center mt-4">
                <Button className="bg-accent hover:bg-accent/90 text-white px-12 py-7 font-bold text-lg shadow-lg">
                  SUBMIT INQUIRY
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <img src={logo} alt="ALPS Logo" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              New Zealand's premier industrial resin contractors. Specializing in high-performance flooring and safety systems since 2005.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Systems</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Epoxy Resin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PU Screeds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Coatings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Slip Guard</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Contractors</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health & Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-accent uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2"><Phone size={14} className="text-accent" /> 0800 754 773</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-accent" /> info@alps-contractors.co.nz</li>
              <li className="flex items-start gap-2">
                <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                  <MapPin size={14} className="mt-1 text-accent" /> Auckland, New Zealand
                </a>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://facebook.com/alps" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Facebook size={16} className="text-white" />
                </a>
                <a href="https://linkedin.com/company/alps" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                  <Linkedin size={16} className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-white/30 tracking-widest uppercase">
          <p>© 2026 ALPS Industrial Resin Systems. All Rights Reserved. Engineered for Performance.</p>
        </div>
      </footer>
    </div>
  );
}