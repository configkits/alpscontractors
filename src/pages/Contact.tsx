import { useState } from "react";
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

type FormData = {
  name: string;
  email: string;
  location: string;
  message: string;
};

export default function Contact() {

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const subject = encodeURIComponent("New Project Inquiry");

  const body = encodeURIComponent(
    `Name: ${form.name}
    Email: ${form.email}
    Location: ${form.location}

    Message:
    ${form.message}`
  );

    window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Navbar />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-3xl md:text-4xl text-muted-foreground mb-3 text-center max-w-5xl mx-auto">
              Contact <span className="font-bold text-accent">ALPS</span> Contractors for Resin Flooring and Waterproofing Solutions Across Auckland and Surrounding Areas
            </p>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Get in touch with our specialists for a consultation on your next
              flooring project.
            </p>
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
          <div className="rounded-2xl bg-muted/30 border border-border z-10">
            <MapView />
          </div>

          <form 
          onSubmit={handleSubmit}
          className="grid gap-6 bg-muted/30 p-6 md:p-10 rounded-2xl border border-border">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">
                  Full Name
                </label>
                <Input
                  name="name"
                  value={form.name}
                  placeholder="Enter your full name"
                  className="bg-white w-full"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-primary">
                  Email Address
                </label>
                <Input
                  name="email"
                  value={form.email}
                  placeholder="Enter your email"
                  className="bg-white w-full"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-primary">
                Project Location
              </label>
              <Input
                name="location"
                value={form.location}
                placeholder="Project location"
                className="bg-white w-full"
                onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-primary">
                How can we help?
              </label>
              <Textarea
                name="message"
                value={form.message}
                placeholder="Tell us about your project"
                className="min-h-[150px] bg-white w-full"
                onChange={handleChange}
              />
            </div>

            {/* Button */}
            <Button 
            type="submit"
            className="bg-accent hover:bg-accent/90 active:bg-accent/70 text-white font-bold py-3 text-lg w-full ">
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
