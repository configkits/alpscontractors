import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import waterproofingHero from "@/assets/waterproofing.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  heroImage?: string;
  contentImage?: string;
  descriptionTitle?: string;
  faqs?: FAQ[];
};

type FAQ = {
  question: string;
  answer: string;
};

export default function ServiceTemplate({ 
  title,
  subtitle,
  description,
  features,
  benefits,
  heroImage = waterproofingHero,
  contentImage,
  descriptionTitle,
  faqs = []
}: Props){
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

       {/* HERO */}
      <section className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-24" />

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-serif mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/80 italic border-l-4 border-accent pl-6">
            {subtitle}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">
              {descriptionTitle}
            </h2>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              {description}
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="font-semibold text-primary">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* BENEFITS */}
            <div className="bg-muted/30 p-8 rounded-2xl border">
              <h3 className="text-xl font-serif text-primary mb-4">
                Key Benefits
              </h3>

              <ul className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm uppercase tracking-wide"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {contentImage && (
              <img
                src={contentImage}
                alt="Service visual"
                className="rounded-2xl shadow-2xl w-full"
              />
            )}

            {/* CTA */}
            <Card className="bg-primary text-white border-none shadow-2xl rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-accent mb-4">
                  Ready to Start?
                </h3>

                <p className="text-white/70 mb-8">
                  Talk with our experts for a tailored flooring safety
                  solution.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-xl">
                    REQUEST A QUOTE
                  </Button>

                  <div className="flex items-center gap-3 font-bold">
                    <Phone className="text-accent" size={20} />
                    <a href={`tel:${DATA.tel1.href}`}>{DATA.tel1.number}</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ SECTION */}
{faqs?.length ? (
  <section className="py-16 md:py-24 bg-muted/20">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="text-3xl font-serif text-primary mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-white rounded-xl px-6 border"
          >
            <AccordionTrigger className="text-left font-semibold text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
) : null}
      <Footer />
    </div>
  );
}
