import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DATA } from "@/data";

export default function OurWork() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Banner />
      <Navbar />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-xl md:text-xl font-sans text-accent mb-3">
            SHOWCASING OUR EXPERT WORK – ALPS CONTRACTORS PROJECTS IN AUCKLAND &
            SURROUNDS
          </h1>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground mb-12  leading-relaxed">
            Choosing{" "}
            <span className="font-bold text-accent">
              Alps Contractors, Auckland
            </span>
            , means choosing a team that takes pride in delivering flooring
            solutions built for performance and longevity. We only use trusted
            brands such as Sika, Mapei, Flowcrete, Allnex, and Equus, ensuring
            every floor we install is backed by proven quality. Our experienced
            applicators combine technical knowledge with practical
            problem-solving, so you’ll always receive advice that suits your
            project. From the first consultation through to installation and
            ongoing maintenance, our focus is on creating safe, reliable, and
            durable resin flooring that meets your exact needs. With epoxy resin
            flooring from Alps Contractors, you can be confident your floor will
            stand up to whatever demands are placed on it.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.work.map((project, i) => (
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
