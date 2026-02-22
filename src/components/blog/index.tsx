import { Button } from "../ui/button"
import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import { ChevronRight } from "lucide-react";

const BlogSection = () => {
  return (
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-primary mb-4">
                Latest News
              </h2>
              <p className="text-muted-foreground italic">
                Insights and updates from the world of industrial flooring
              </p>
            </div>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white font-bold hidden md:flex"
            >
              VIEW ALL POSTS
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Industrial Epoxy Floors in Auckland, NZ: What to Expect",
                date: "October 12, 2025",
                img: blog1,
                excerpt:
                  "Exploring new eco-friendly resin compositions that don't compromise on heavy-duty performance.",
              },
              {
                title: "How Floor Inspection Services Help Maintain Property Value",
                date: "September 28, 2025",
                img: blog2,
                excerpt:
                  "What commercial property managers need to know about the upcoming safety regulation updates.",
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
          <div className="mt-12 text-center md:hidden">
            <Button
              variant="outline"
              className="border-accent text-accent w-full font-bold"
            >
              VIEW ALL POSTS
            </Button>
          </div>
        </div>
      </section>
  )
}

export default BlogSection