import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import { ChevronRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#fcfdfc] font-['Lexend_Deca']">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "The Future of Industrial Resin: Sustainability & Durability",
                date: "October 12, 2025",
                img: blog1,
                excerpt:
                  "Exploring new eco-friendly resin compositions that don't compromise on heavy-duty performance.",
              },
              {
                title: "Safety First: New NZ Slip Standards for 2026",
                date: "September 28, 2025",
                img: blog2,
                excerpt:
                  "What commercial property managers need to know about the upcoming safety regulation updates.",
              },
              {
                title:
                  "Transforming Commercial Spaces with High-Gloss Finishes",
                date: "September 15, 2025",
                img: blog3,
                excerpt:
                  "How architectural resin flooring is becoming the top choice for modern retail and office environments.",
              },
            ].map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-xl mb-6 bg-muted">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  {post.date}
                </span>
                <h3 className="text-xl font-serif text-primary mt-2 mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-accent text-sm font-bold">
                  READ MORE <ChevronRight size={14} className="ml-1" />
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
