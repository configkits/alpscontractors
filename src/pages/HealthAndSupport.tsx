import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DATA } from "@/data";

import healthandsafety from "@/assets/5-1920w.jpg";

const HealthandSupport = () => {
  return (
    <div className="min-h-screen bg-white text-[#222222] font-['Lexend_Deca']">
      <Banner />
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-b-4xl"
          style={{
            backgroundImage: `url(${healthandsafety})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60 rounded-b-4xl" />

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="font-bold uppercase tracking-wide leading-tight text-4xl md:text-6xl font-serif text-accent-foreground mb-8">
            Committed to a Safe and Responsible Workplace
          </h1>
          <p className="mt-4 text-lg text-accent font-medium">
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

      {/* ================= CERTIFICATIONS ================= */}
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

      {/* ================= CTA ================= */}
      <section className="py-20 bg-[#2F4A3F] text-white text-center rounded-t-4xl">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg mb-4 font-medium">
            At Alps Contractors, safety is built into everything we do.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold uppercase leading-relaxed">
            Call{" "}
            <span className="text-accent">0210 828 2760</span> or{" "}
            <span className="text-accent">021 276 2761</span> to discuss your
            next project with a team you can trust.
          </h3>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthandSupport;