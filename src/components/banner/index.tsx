import Facebook from "@/assets/logo/facebook";
import Linkedin from "@/assets/logo/linkedin";
import { DATA } from "@/data";
import { 
    Phone, Mail, MapPin,
    Instagram
} from "lucide-react";


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
          <a href={`mailto:${DATA.email}`}>
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
          <div className="flex gap-3 pr-4">
            <a
              href="https://www.facebook.com/share/1CJXK9ibnd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/alpscontractors?igsh=ZnRqdWRwcWhxdTAy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/alpscontractors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner