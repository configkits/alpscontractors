import bcito from "../../assets/certifications/1-f91fb712-640w.png";

const FloatingPromo = () => {
  return (
    <div
  className="
    absolute 
    -top-2 right-2
    sm:top-0 sm:right-8
    lg:top-6 lg:right-12
    
    w-[72px] h-[72px]
    sm:w-[120px] sm:h-[120px]
    lg:w-[160px] lg:h-[160px]
    
    flex items-center justify-center
    z-20
    group
    
    transition-transform duration-500
    hover:scale-110
  "
>
  {/* Main Seal Body */}
  <div
    className="
      absolute inset-0
      bg-accent
      rounded-full
      border border-white/30
      sm:border-2
      lg:border-4
      shadow-xl
      flex items-center justify-center
      overflow-hidden
    "
  >
    {/* Inner Decorative Ring */}
    <div
      className="
        absolute inset-1
        sm:inset-2
        border border-dashed
        sm:border-2
        border-white/20
        rounded-full
        
        hidden sm:block
        animate-[spin_20s_linear_infinite]
      "
    />

    {/* Logo (commented out to disable floating certification image) */}
    <img
      src={bcito}
      alt="bcito Seal"
      className="
        w-8 h-8
        sm:w-16 sm:h-16
        lg:w-24 lg:h-24
        rotate-12
        
        object-contain
        brightness-0 invert
        opacity-95
        relative z-10
        drop-shadow-md
      "
    />
   

    {/* Texture Overlay */}
    <div
      className="
        absolute inset-0
        opacity-10 sm:opacity-20
        pointer-events-none
        mix-blend-overlay
        bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
      "
    />
  </div>

  {/* Outer Pulse (lighter on mobile) */}
  <div
    className="
      absolute
      inset-[-3px] sm:inset-[-6px]
      rounded-full
      border border-accent/40
      opacity-60
      hidden sm:block
      animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]
    "
  />

  {/* Static outer ring */}
  <div
    className="
      absolute
      inset-[-3px] sm:inset-[-6px]
      rounded-full
      border border-accent/50
      opacity-80
      -z-10
    "
  />

  {/* Subtle Glow (disabled on mobile hover since no hover) */}
  <div
    className="
      absolute inset-0
      bg-accent/20
      rounded-full
      blur-lg
      opacity-0
      sm:group-hover:opacity-100
      transition-opacity duration-500
    "
  />
</div>
  );
};

export default FloatingPromo;
