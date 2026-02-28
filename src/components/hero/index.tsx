import React, { useEffect, useState } from "react";
import heroBg1 from "../../assets/hero-bg.png";
import heroBg2 from "../../assets/work/ChatGPT+Image+Oct+10-+2025-+01_47_01+PM-1920w.webp";
import heroBg3 from "../../assets/work/IMG_4077-1920w.webp";
import { ChevronRight } from "lucide-react";

const images = [heroBg1, heroBg2, heroBg3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[500px] md:h-[650px] flex items-center overflow-hidden">
      
      {/* Sliding Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Industrial Resin Flooring"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-serif mb-5 leading-tight">
            Auckland’s Leading<br />
            <span className="text-accent">Industrial Resin Flooring</span>
            <br />& Coating Experts
          </h1>

          <p className="text-xl md:text-3xl text-accent max-w-xl leading-relaxed">
            Delivering Excellence in All We Do
          </p>

          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl leading-relaxed">
            Professional floor systems and anti-slip solutions for industrial,
            commercial, and safety-critical environments.
          </p>

          <div className="flex justify-center pointer-events-none">
            <a
              href="#contact"
              className="pointer-events-auto group inline-flex items-center gap-4 rounded-full bg-black/60 backdrop-blur-md px-8 py-3 border border-white/20 shadow-2xl hover:bg-black/80 hover:border-accent/60 transition-all duration-300"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
                NZ
              </span>

              <span className="text-lg md:text-xl font-serif font-bold leading-none">
                <span className="text-white">Industrial</span>{" "}
                <span className="text-accent">Resin Experts</span>
              </span>

              <span className="hidden md:flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Talk to a specialist
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;