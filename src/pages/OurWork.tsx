import { workImage1, workImage10, workImage11, workImage12, workImage13, workImage14, workImage2, workImage3, workImage4, workImage5, workImage6, workImage7, workImage8, workImage9 } from "@/assets/work";
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
        <p className="text-xl text-muted-foreground mb-12  leading-relaxed">
          Choosing <span className="font-bold text-accent">Alps Contractors, Auckland</span>, means choosing a team that takes pride in delivering flooring solutions built for performance and longevity. We only use trusted brands such as Sika, Mapei, Flowcrete, Allnex, and Equus, ensuring every floor we install is backed by proven quality. Our experienced applicators combine technical knowledge with practical problem-solving, so you’ll always receive advice that suits your project. From the first consultation through to installation and ongoing maintenance, our focus is on creating safe, reliable, and durable resin flooring that meets your exact needs. With epoxy resin flooring from Alps Contractors, you can be confident your floor will stand up to whatever demands are placed on it.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
  {[
    {
      title: "Unipharm Healthy Manufacturing",
      desc: "Durable resin flooring designed for heavy industrial environments.",
      img: workImage4,
    },
    {
      title: "Metrix Bathrooms Showroom",
      desc: "Seamless commercial flooring with high chemical resistance.",
      img: workImage11,
    },
    {
      title: "Browns Bay School",
      desc: "Long-lasting coating system for high-traffic warehouse floors.",
      img: workImage10,
    },
    {
      title: "Botany School",
      desc: "Stylish epoxy solutions for modern commercial interiors.",
      img: workImage1,
    },
    {
      title: "Colwill School",
      desc: "Hygienic flooring systems ideal for food processing areas.",
      img: workImage2,
    },
    {
      title: "Heritage Hotel",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage3,
    },
    {
      title: "Venerdi Bakery",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage12,
    },
    {
      title: "Colwill School",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage9,
    },
    {
      title: "Te Puea Marae",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage14,
    },
    {
      title: "Sea Link Ferry",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage6,
    },
    {
      title: "Sylvia Park",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage8,
    },
    {
      title: "Jack Link's",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage5,
    },
    {
      title: "OMC Carpark",
      desc: "Impact-resistant flooring built for demanding environments.",
      img: workImage7,
    },
    {
      title: "Service Foods",
      desc: "Impact-resistant flooring built for demanding environments.",
      img:workImage13,
    },
  ].map((project, i) => (
    <div
      key={i}
      className="group relative aspect-square rounded-xl overflow-hidden shadow-lg"
    >
      {/* Background Image */}
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Title */}
      <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold z-10">
        {project.title}
      </h3>

      {/* Hover Description Panel */}
      <div className="absolute inset-0 bg-black/80 text-white flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-500">
        <p className="text-sm md:text-base leading-relaxed">
          {project.title}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
