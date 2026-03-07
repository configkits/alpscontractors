import { useState, useEffect } from "react";
import { X, ChevronRight, ArrowRight, type LucideIcon } from "lucide-react";
import { DATA } from "@/data";

interface Slide {
  badge: string;
  headline: string;
  highlight: string;
  sub: string;
  cta: string;
  ctaSecondary: string;
  icon: LucideIcon;
}

const slides: Slide[] = DATA.advertisement;

const AdvertisementBanner= () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const goNext = (): void => {
    if (animating) return;
    setAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
      setAnimating(false);
    }, 300);
  };

  const goTo = (i: number): void => {
    if (i === current || animating) return;
    setAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goNext();
          return 0;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [visible, current]);

  if (!visible) return null;

  const slide = slides[current];
  const Icon = slide.icon;

  return (
    <div className="relative bg-primary overflow-hidden border-b border-accent/20 font-['Lexend_Deca']">

      {/* Diagonal accent shape */}
      <div className="absolute right-0 top-0 h-full w-64 bg-accent/5 skew-x-12 translate-x-20 pointer-events-none" />

      {/* Content row */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 gap-3">

          {/* LEFT */}
          <div className="flex items-center gap-3 flex-1 min-w-0">

            <span className="hidden sm:inline-flex shrink-0 items-center text-[9px] font-bold tracking-[0.2em] uppercase text-primary bg-accent px-2.5 py-1 rounded-sm">
              {slide.badge}
            </span>

            <div className="hidden sm:block w-px h-6 bg-accent/25 shrink-0" />

            <div className="shrink-0 w-7 h-7 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
              <Icon size={13} className="text-accent" />
            </div>

            <div
              className={`flex items-baseline gap-2 min-w-0 transition-all duration-300 ${
                animating ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-serif text-sm md:text-[15px] font-bold text-white whitespace-nowrap shrink-0">
                {slide.headline}{" "}
                <span className="text-accent">{slide.highlight}</span>
              </p>
              <span className="hidden lg:block text-white/20 text-xs shrink-0">—</span>
              <p className="hidden lg:block text-[11px] text-white/50 truncate">
                {slide.sub}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">

            <button className="hidden md:flex items-center gap-1 text-[10px] font-semibold tracking-[0.12em] uppercase text-white/50 hover:text-accent transition-colors duration-200">
              {slide.ctaSecondary}
              <ChevronRight size={10} />
            </button>

            <button className="flex items-center gap-1.5 bg-accent hover:bg-accent/90 text-primary text-[10px] font-bold tracking-[0.15em] uppercase px-3.5 py-2 rounded-sm transition-all duration-200 hover:-translate-y-px shadow-sm">
              {slide.cta}
              <ArrowRight size={10} />
            </button>

            <div className="hidden sm:flex items-center gap-1.5 pl-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-200 border-none p-0 cursor-pointer ${
                    i === current
                      ? "w-3 h-1.5 bg-accent"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="hidden sm:block w-px h-5 bg-white/10" />

            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss banner"
              className="w-6 h-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            >
              <X size={11} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-accent/60 transition-[width] duration-75 ease-linear rounded-r-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default AdvertisementBanner;