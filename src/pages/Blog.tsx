import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
      <Banner />
      <Navbar />
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">
            Industrial Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            The latest updates on resin technology, safety standards, and
            project highlights.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-primary/10 font-serif text-2xl">
                    Article Image
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors">
                  Safety Standards Update 2026
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  Essential information for industrial facility managers
                  regarding the new New Zealand safety protocols...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
