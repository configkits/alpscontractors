import { 
    Phone, Mail, MapPin, Facebook, Linkedin
} from "lucide-react";


const Banner = () => {
  return (
    <div className="hidden sm:block bg-white text-muted-foreground py-2 px-6 border-b border-border">
        <div className="container mx-auto flex justify-between items-center text-[11px] font-medium">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5"><Phone size={14} className="text-accent" /> 0800 754 773</span>
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-accent" /> info@alps-contractors.co.nz</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent" /> Auckland, NZ</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3 pr-4 border-r border-border">
              <a href="https://facebook.com/alps" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
              <a href="https://linkedin.com/company/alps" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={14} /></a>
            </div>
            <a href="#" className="hover:text-accent transition-colors">News</a>
            <a href="#" className="hover:text-accent transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
  )
}

export default Banner