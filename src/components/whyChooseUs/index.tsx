import { Clock, Shield, Users, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-5/6 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className=" mb-16 text-center">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-6">The ALPS Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-primary mb-8">Why Choose Us?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality craftsmanship, technical expertise, and long-lasting performance ensures every project meets the highest standards—giving you confidence and peace of mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Compliance Driven", desc: "Full adherence to NZBC and WorkSafe standards." },
              { icon: Zap, title: "Fast Turnaround", desc: "Advanced fast-cure systems to minimize downtime." },
              { icon: Clock, title: "Proven Durability", desc: "Systems designed for extreme industrial wear." },
              { icon: Users, title: "Expert Leadership", desc: "Hands-on project management from 25+ years experience." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl shadow-lg">
                  <item.icon size={28} className="text-accent" />
                </div>
                <h5 className="text-xl font-serif text-primary">{item.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs