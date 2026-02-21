import Facebook from "@/assets/logo/facebook";
import Linkedin from "@/assets/logo/linkedin";
import { DATA } from "@/data";
import { 
    Phone, Mail, MapPin
} from "lucide-react";
import { Link } from "wouter";


const Banner = () => {
  return (
    <div className="hidden sm:block sticky bg-white text-muted-foreground py-2 px-6 border-b border-border">
      <div className="container mx-auto flex justify-between items-center text-[11px] font-medium">
        <div className="flex gap-6 items-center">
          <a href={`tel:${DATA.tel1.withCode}`}>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-accent" />
              {DATA.tel1.number}
            </span>
          </a>
          <a href={DATA.email}>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-accent" /> {DATA.email}
            </span>
          </a>
          <a href={DATA.googlemap}>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-accent" /> {DATA.location}
            </span>
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 pr-4 border-r border-border">
            <a
              href="https://facebook.com/alps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/alps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <Link href="/blog" className="hover:text-accent transition-colors ">
            News
          </Link>
          <Link
            href="/contact"
            className="hover:text-accent transition-colors "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner