import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function OurWork() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Banner />
      <Navbar />
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-xl md:text-xl font-sans text-accent mb-3">SHOWCASING OUR EXPERT WORK – ALPS CONTRACTORS PROJECTS IN AUCKLAND & SURROUNDS</h1>
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Our Work</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Choosing Alps Contractors, Auckland, means choosing a team that takes pride in delivering flooring solutions built for performance and longevity. We only use trusted brands such as Sika, Mapei, Flowcrete, Allnex, and Equus, ensuring every floor we install is backed by proven quality. Our experienced applicators combine technical knowledge with practical problem-solving, so you’ll always receive advice that suits your project. From the first consultation through to installation and ongoing maintenance, our focus is on creating safe, reliable, and durable resin flooring that meets your exact needs. With epoxy resin flooring from Alps Contractors, you can be confident your floor will stand up to whatever demands are placed on it.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-primary/20 font-serif text-4xl">Project {i}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
