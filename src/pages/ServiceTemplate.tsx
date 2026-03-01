import { Check, Plus, type LucideIcon } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import waterproofingHero from "@/assets/waterproofing.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  descriptionTitle?: string;
  description2?: string;
  descriptionTitle2?: string;
  features?: Feature[];
  benefits?: string[];
  benefitTitle?: string;
  stats?: Stat[];
  heroImage?: string;
  contentImage?: string;
  contentImage2?: string;
  faqs?: FAQ[];
  cta?: CTA;
};

type FAQ = {
  question: string;
  answer: string;
};

type Feature = {
  title: string;
  icon?: LucideIcon;
  description?: string;
};

type Stat = {
  label: string;
  value: string;
};

type CTA = {
  title?: string;
  description?: string;
  buttonText?: string;
  children?: React.ReactNode;
};

export default function ServiceTemplate({
  title,
  subtitle,
  badge,
  description,
  descriptionTitle,
  description2,
  descriptionTitle2,
  features,
  benefits,
  benefitTitle,
  stats,
  heroImage = waterproofingHero,
  contentImage,
  contentImage2,
  faqs = [],
  cta,
}: Props) {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        {heroImage && (
          <img
            src={heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
        )}

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          {badge && (
            <span className="inline-block mb-6 bg-accent/20 text-accent px-4 py-1 rounded-full text-sm uppercase tracking-wide">
              {badge}
            </span>
          )}

          <h1 className="text-4xl md:text-6xl font-serif mb-6">{title}</h1>

          <p className="text-lg md:text-xl text-white/80 italic border-l-4 border-accent pl-6">
            {subtitle}
          </p>
        </div>
      </section>

      {/* STATS */}
      {stats?.length && (
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-primary">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-6">

          {/* Left Column - 1st */}
          <div>
            {descriptionTitle && (
              <h2 className="text-3xl font-serif text-primary mb-6 border-l-4 border-accent pl-6">
                {descriptionTitle}
              </h2>
            )}
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {description}
            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">
              {features?.map((feature, i) => {
                const Icon = feature.icon || Check;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-primary">
                        {feature.title}
                      </p>
                      <p className="font-light text-primary">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - 2nd */}
          <div className="space-y-8">
            {/* Images */}
            {contentImage && (
              <div className="">
                {contentImage && (
                  <img
                    src={contentImage}
                    alt="Service visual"
                    className="rounded-2xl shadow-2xl w-full h-full max-h- object-cover"
                  />
                )}
              </div>
            )}
          </div>

          {/* Left Column - 2st */}
          {contentImage2 && (
            <img
              src={contentImage2}
              alt="Service visual"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          )}

          <div>
            {descriptionTitle2 && (
              <h2 className="text-3xl font-serif text-primary mb-6 border-l-4 border-accent pl-6">
                {descriptionTitle2}
              </h2>
            )}

            {description2 && (
              <p className="text-muted-foreground mb-10 leading-relaxed">
                {description2}
              </p>
            )}

            {/* BENEFITS */}
            <div className="bg-muted/30 p-8 rounded-2xl border">
              <h3 className="text-xl font-serif text-primary mb-4">
                {benefitTitle}{" "}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {benefits?.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm  tracking-wide"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-12 bg-primary border-t border-white/5 text-white text-center">
          <div className="container mx-auto px-6">
            <div className="flex justify-center mb-4">
              <Plus className="text-accent" size={24} />
            </div>
            <p className="text-accent-foreground text-2xl uppercase tracking-widest mb-4 font-bold">
              {cta?.title || "Ready to Get Started?"}
            </p>
            <p className="text-lg md:text-xl italic mb-3">{cta?.description}</p>
            <p className="text-xl md:text-2xl font-serif">{cta?.children}</p>
          </div>
        </section>
      </section>

      {/* FAQ */}
      {faqs?.length > 0 && (
        <section className="bg-muted/20 mb-6">
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
      )}

      <Footer />
    </div>
  );
}
