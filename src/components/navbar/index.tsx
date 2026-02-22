import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/alpslogo-green.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Banner from "../banner";

/* ---------- DATA ---------- */

const services = [
  { name: "Industrial Resin Flooring Solutions", path: "/services/industrial-resin" },
  { name: "Liquid Waterproofing Solutions", path: "/services/liquid-waterproofing" },
  { name: "Anti-Slip Solutions", path: "/services/anti-slip" },
  { name: "Concrete Pool Coating Solutions", path: "/services/pool-coating" },
  { name: "Interior Epoxy Floors", path: "/services/interior-epoxy" },
  { name: "Concrete Repairs", path: "/services/concrete-repairs" },
];

const navLinks = [
  { name: "About Us", path: "/about-us" },
  { name: "Our Work", path: "/our-work" },
  { name: "H&S", fullName: "Health and Safety", path: "/health-and-safety" },
  { name: "Slip Testing", fullName: "Slip Resistance Testing", path: "/slip-resistance-testing" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <Banner />
      <nav className="bg-white/95 backdrop-blur-sm border-b px-4 sm:px-6 py-4 flex justify-between items-center ">
        {/* LOGO */}
        <Link href="/">
          <img
            src={logo}
            alt="ALPS Logo"
            className="h-8 sm:h-10 cursor-pointer object-contain"
          />
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <div className="hidden md:flex gap-8 text-sm font-semibold text-primary items-center mx-2">
          <Link
            href="/"
            className="hover:text-accent border-b-2 border-transparent hover:border-accent pb-1"
          >
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-accent border-b-2 border-transparent hover:border-accent pb-1 outline-none">
              Services <ChevronDown size={14} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white border shadow-xl min-w-[320px] p-2 grid grid-cols-2 gap-2">
              {services.map((service) => (
                <Link key={service.path} href={service.path}>
                  <DropdownMenuItem className="cursor-pointer py-3 px-4 font-bold hover:bg-muted focus:bg-accent focus:text-white rounded-md">
                    {service.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="group relative hover:text-accent border-b-2 border-transparent hover:border-accent pb-1"
            >
              {/* md → short label */}
              <span className="lg:hidden">{link.name}</span>

              {/* lg+ → full label */}
              <span className="hidden lg:inline">
                {link.fullName || link.name}
              </span>

              {/* Tooltip only at md */}
              {link.fullName && (
                <span className="absolute hidden group-hover:block lg:hidden top-full mt-2 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                  {link.fullName}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* CTA + MOBILE MENU BUTTON */}
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button className="hidden sm:flex bg-accent text-white font-bold px-6">
              GET A QUOTE
            </Button>
          </Link>

          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ---------- MOBILE MENU ---------- */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold border-b pb-2"
              >
                Home
              </Link>

              <div className="border-b pb-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full text-lg font-bold text-primary  "
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="flex flex-col gap-2 mt-2 border-muted overflow-hidden transition-all duration-700">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="py-2 text-primary hover:text-accent font-medium pl-4 border-l-2 border-muted hover:border-accent"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold border-b pb-2"
                >
                  {link.fullName || link.name}
                </Link>
              ))}

              {/* <Link href="/contact">
              <Button className="w-full bg-accent text-white py-4 mt-2">
                GET A QUOTE
              </Button>
            </Link> */}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}