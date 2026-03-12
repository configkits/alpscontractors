import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DATA } from "@/data";

export default function OurWork() {


  const applications = [
    "Industrial resin flooring for factories, warehouses, and workshops",
    "Hygienic flooring for food and healthcare facilities",
    "Waterproofing for residential and commercial properties",
    "Anti-slip flooring systems for wet or high-risk areas",
    "Concrete and Fiberglass pool coatings designed for durability and UV stability"
  ]

  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Navbar />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6 mb-20">
          <h1 className="text-lg md:text-xl text-accent  mx-auto italic">
            Showcasing Our Expert Work – ALPS Contractors Projects in Auckland &
            Surrounds
          </h1>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-12">
            Our Work
          </h1>
          {/* <p className="text-xl text-muted-foreground mb-12  leading-relaxed">
            Choosing{" "}
            <span className="font-bold text-accent">
              Alps Contractors, Aucklandz
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
          </p> */}
          <div className="grid md:grid-cols-4 gap-8">
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

        <section className="pb-20 bg-muted/20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-serif text-primary mb-2 border-l-4 border-accent pl-6">
            Tailored Solutions for Every Project
          </h2>
          <p className="text-primary mb-10 pl-6 border-l-4 border-transparent">
            We understand that every space has unique requirements, which is why we take the time to listen to
            your goals and design customized solutions. Whether you need highperformance resin flooring for
            food production, hygienic environments, or automotive workshops or longlasting waterproofing for
            your home we provide expert guidance on the most suitable options for your project. Our focus is on
            delivering costeffective solutions without compromising on quality, ensuring every client receives a
            result that is practical, durable, and perfectly suited to their environment.
          </p>
          
            <h2 className="text-xl font-serif text-primary mb-2 pl-6">
              Project Areas We Specialise In:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 pl-6">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-2xl border p-5 flex place-items-center items-center gap-4 shadow-sm">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">{app}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
