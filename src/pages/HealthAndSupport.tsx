
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DATA } from "@/data";

import healthandsafety from "@/assets/5-1920w.jpg";
import { Plus } from "lucide-react";

const HealthandSupport = () => {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-['Lexend_Deca']">
      <Navbar />

      <section className="relative h-[500px] flex items-center overflow-hidden rounded-b-4xl">
        <img
          src={healthandsafety}
          alt="Slip Resistance Testing"
          className="absolute inset-0 w-full h-full object-cover rounded-b-4xl"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-4">
            Health & Safety
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            Our Commitment to a Safe and Healthy Workplace
          </h1>
          <p className="mt-8 text-white/60 font-serif italic text-lg">
            Delivering Excellence in All We Do
          </p>
        </div>
      </section>

      {/* ================= PROMISE SECTION ================= */}
      <section className="py-20 bg-[#F4F3EF]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <img
                src={DATA.certification[3].images}
                alt="Site Safe Member"
                className="h-48 mx-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 uppercase">
              Our Health & Safety Promise
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ALPS is committed to maintain a safe and healthy workplace for
                our employees, contractors, visitors and clients.
              </p>

              <p>
                It is our policy to take all reasonably practical steps to comply
                with the provisions of the Health and Safety at Work Act 2015,
                all relevant regulations, codes practices, and best practice
                guidelines, which apply to our business.
              </p>

              <p>
                Our key staff, including project managers are Site Safe Gold
                passport holders. Before commencing work a Site Specific method
                statement is written to ensure all risks and workplace hazards
                are identified.
              </p>

              <p>
                Our staff and contractors will all wear appropriate PPE gear,
                and hazard board set up on site.
              </p>

              <p>Our H&S policy is reviewed every 12 months.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center mb-12">

          <h3 className="text-3xl md:text-4xl font-bold uppercase">
            Certifications
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-6">
          {DATA.certification.map((cert, i) => (
            <div
              key={i}
              className="w-40 md:w-52 h-24 md:h-32 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={cert.images}
                alt={cert.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-primary border-t border-white/5 text-white text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-4">
            <Plus className="text-accent" size={24} />
          </div>
          <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-bold">
            At Alps Contractors, safety is built into everything we do.
          </p>
          <p className="text-xl md:text-2xl font-serif">
            Call{" "}
            <a href={`tel:${DATA.tel1.href}`} className="hover:underline hover:text-accent transition-colors">
              <span className="text-accent">{DATA.tel1.number}</span>
            </a>{" "}
            OR {" "}
            <a href={`tel:${DATA.tel2.href}`} className="hover:underline hover:text-accent transition-colors">
              <span className="text-accent">{DATA.tel2.number}</span>
            </a>{" "}
            to discuss your next project with a team you can trust.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthandSupport;