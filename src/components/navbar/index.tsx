
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  
  ChevronDown,
  Menu,
  X 
} from "lucide-react";
import logo from "../../assets/alpslogo.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src={logo} alt="ALPS Logo" className="h-8 sm:h-10 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Links */}
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

        <div className="flex items-center gap-4">
          <Button className="hidden sm:flex bg-accent hover:bg-accent/90 text-white font-bold px-6">
            GET A QUOTE
          </Button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              <Link href="/" className="text-lg font-bold text-primary py-2 border-b border-muted" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Services</span>
                {[
                  { name: "Industrial Resin", path: "/services/industrial-resin" },
                  { name: "Waterproofing", path: "/services/liquid-waterproofing" },
                  { name: "Anti-Slip", path: "/services/anti-slip" },
                  { name: "Pool Coating", path: "/services/pool-coating" },
                  { name: "Concrete Repairs", path: "/services/concrete-repairs" },
                  { name: "Interior Epoxy", path: "/services/interior-epoxy" }
                ].map((s, i) => (
                  <Link key={i} href={s.path} className="text-primary font-medium py-2 pl-4 border-l-2 border-muted hover:border-accent" onClick={() => setIsMobileMenuOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
              <Link href="/our-work" className="text-lg font-bold text-primary py-2 border-b border-muted" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link>
              <Link href="/contact" className="text-lg font-bold text-primary py-2 border-b border-muted" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link href="/blog" className="text-lg font-bold text-primary py-2 border-b border-muted" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 mt-2">
                GET A QUOTE
              </Button>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar