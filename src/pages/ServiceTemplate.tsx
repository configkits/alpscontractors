import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Phone } from "lucide-react";
import { Link } from "wouter";
import logo from "@assets/ALPS+logo-bf8ad8f0-1920w_1769959157217.webp";

export default function ServiceTemplate({ 
  title, 
  subtitle, 
  description, 
  features, 
  benefits,
  image 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  features: string[]; 
  benefits: string[];
  image?: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <img src={logo} alt="ALPS Logo" className="h-10 w-auto cursor-pointer" />
        </Link>
        <Link href="/contact">
          <Button className="bg-accent hover:bg-accent/90 text-white font-bold">
            GET A QUOTE
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-24" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-white/80 italic border-l-4 border-accent pl-6 mb-8">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif text-primary mb-6">Expert Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
              
              <div className="space-y-4 mb-12">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" />
                    </div>
                    <p className="font-semibold text-primary">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-serif text-primary mb-4">Key Benefits</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aspect-video bg-muted rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-4xl">System Visual</div>
              </div>
              
              <Card className="bg-primary text-white border-none shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif mb-4 text-accent">Ready to Start?</h3>
                  <p className="text-white/70 mb-8">Consult with our NZ safety and flooring experts today for a tailored solution.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8">
                      REQUEST A QUOTE
                    </Button>
                    <div className="flex items-center gap-3 text-white font-bold h-14 px-4">
                      <Phone size={20} className="text-accent" />
                      0800 754 773
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
