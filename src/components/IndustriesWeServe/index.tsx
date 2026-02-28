import React from 'react'



const IndustriesWeServe = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-accent uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-primary cursor-default">Industries We Serve</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Construction & Development",
              "Supermarkets & Retail",
              "Education Facilities",
              "Retirement Villages",
              "Hotels & Hospitality",
              "Commercial Carparks",
              "Warehouses & Logistics",
              "Food & Beverage Processing",
              "Pharmaceutical Environments",
              "Marine Industries"
            ].map((industry, i) => (
              <div key={i} className="p-6 bg-muted/30 rounded-2xl border border-transparent hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all group">
                <p className="text-sm cursor-default font-bold text-primary/70 group-hover:text-primary transition-colors uppercase tracking-wide leading-tight">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IndustriesWeServe