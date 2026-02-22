import Facebook from "@/assets/logo/facebook";
import GoogleMap from "@/assets/logo/googleMap";
import Linkedin from "@/assets/logo/linkedin";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MapView from "@/components/ui/mapView";
import { Textarea } from "@/components/ui/textarea";
import { DATA } from "@/data";
import { Clock, Earth, Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Navbar />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Get in touch with our specialists for a consultation on your next
              industrial or commercial flooring project.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
          <div className="rounded-2xl bg-muted/30 border border-border z-10">
            <MapView />
          </div>

          <form className="grid gap-6 bg-muted/30 p-6 md:p-10 rounded-2xl border border-border">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">
                  Full Name
                </label>
                <Input placeholder="Enter your full name" className="bg-white w-full" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">
                  Email Address
                </label>
                <Input placeholder="Enter your email" className="bg-white w-full" />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-primary">
                Project Location
              </label>
              <Input placeholder="Project location" className="bg-white w-full" />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-primary">
                How can we help?
              </label>
              <Textarea
                placeholder="Tell us about your project"
                className="min-h-[150px] bg-white w-full"
              />
            </div>

            {/* Button */}
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold py-3 text-lg w-full ">
              SUBMIT INQUIRY
            </Button>
          </form>

          <div className="rounded-2xl bg-muted/30 border border-border p-8 md:p-10 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Earth className="text-accent" />
                <h2 className="text-2xl font-serif text-primary">Socials</h2>
              </div>
              <div className=" flex flex-row">
                <div className="flex flex-row gap-2 ">
                  <a href={DATA.linkedin} target="_blank">
                    <Linkedin className="w-14 h-14" />
                  </a>
                </div>
                <div className="flex flex-row gap-2 ">
                  <a href={DATA.facebook} target="_blank">
                    <Facebook className="w-14 h-14" />
                  </a>
                </div>
                <div className="flex flex-row gap-2 ">
                  <a href={DATA.googlemap} target="_blank">
                    <GoogleMap className="w-14 h-14" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-accent" />
                <h2 className="text-2xl font-serif text-primary">Email Us</h2>
              </div>
              <a href={`mailto:${DATA.email}`}>
                <p className="text-muted-foreground ">
                  {DATA.email}
                </p>
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="text-accent" />
                <h2 className="text-2xl font-serif text-primary">
                  Contact Number
                </h2>
              </div>
              <a href={`tel:${DATA.tel1.withCode}`}>
                <p className="text-muted-foreground hover:text-primary transition cursor-pointer">
                  {DATA.tel1.number}
                </p>
              </a>

              <a href={`tel:${DATA.tel2.withCode}`}>
                <p className="text-muted-foreground hover:text-primary transition cursor-pointer">
                {DATA.tel2.number}
                </p>
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-accent" />
                <h2 className="text-2xl font-serif text-primary">
                  Business Hours
                </h2>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-y-1 ">
                <p className="text-muted-foreground">Mon - Fri</p>
                <p className="text-muted-foreground">7:30 am - 5:00 pm</p>
                <p className="text-muted-foreground">Saturday</p>
                <p className="text-muted-foreground">8:00 am - 12:00 pm</p>
                <p className="text-muted-foreground">Sunday</p>
                <p className="text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
