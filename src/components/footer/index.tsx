import { Link } from "wouter";
import {  
  Phone, 
  Mail,  
} from "lucide-react";
import logo from "../../assets/alpslogo.jpg";
import { DATA } from "@/data";
import Facebook from "@/assets/logo/facebook";
import Linkedin from "@/assets/logo/linkedin";
import GoogleMap from "@/assets/logo/googleMap";

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 text-center sm:text-left bg-white/10 p-6 rounded-lg">
            <img
              src={logo}
              alt="ALPS Logo"
              className="h-10 w-auto mx-auto sm:mx-0 object-cover"
            />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto sm:mx-0 mt-6">
              New Zealand's premier industrial resin contractors. Engineering
              safety and performance since 2005.
            </p>
          </div>
          <div className="text-center sm:text-left bg-white/10 p-6 rounded-lg">
            <h4 className="font-bold mb-6 text-accent uppercase tracking-[0.2em] text-[10px]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/50 font-medium">
              <li>
                <Link
                  href="/services/industrial-resin"
                  className="hover:text-white transition-colors"
                >
                  Industrial Resin
                </Link>
              </li>
              <li>
                <Link
                  href="/services/liquid-waterproofing"
                  className="hover:text-white transition-colors"
                >
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left bg-white/10 p-6 rounded-lg">
            <h4 className="font-bold mb-6 text-accent uppercase tracking-[0.2em] text-[10px]">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-white/50 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Health & Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technical Specs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Maintenance Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  NZ Standards
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left bg-white/10 p-6 rounded-lg">
            <h4 className="font-bold mb-6 text-accent uppercase tracking-[0.2em] text-[10px]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/50 font-medium">
              <li className="flex items-center justify-center sm:justify-start gap-3 ">
                <Phone size={14} className="text-accent" />
                <a href={DATA.tel1.href} className="hover:text-accent-foreground">{DATA.tel1.number}</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-3 ">
                <Mail size={14} className="text-accent" />{" "}
                <a href={`mailto:${DATA.email}`} className="hover:text-accent-foreground">
                info@alps-contractors.co.nz
                </a>
              </li>
              <li className="flex gap-4 mt-6 justify-center sm:justify-start">
                <a
                  href={DATA.facebook}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-foreground transition-all group"
                >
                  <Facebook
                    className="text-white h-8 w-8 group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href={DATA.linkedin}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-foreground transition-all group"
                >
                  <Linkedin
                    className="text-white h-8 w-8 group-hover:scale-110 transition-transform"
                  />
                </a>
                <a
                  href={DATA.googlemap}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-foreground transition-all group"
                >
                  <GoogleMap
                    className="text-white h-8 w-8 group-hover:scale-110 transition-transform"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase">
            © 2026 ALPS Industrial Resin Systems. Engineered for Performance in
            NZ.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer