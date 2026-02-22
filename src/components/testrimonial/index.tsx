import { Star } from 'lucide-react'
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";

const Testimonial = () => {
  return (
    <section className="py-24 bg-white border-y">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="max-w-md">
            <h2 className="text-4xl font-serif text-primary mb-6">
              Client Feedback
            </h2>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} fill="#F26522" color="#F26522" />
              ))}
            </div>
            <p className="text-xl font-serif italic text-muted-foreground leading-relaxed">
              "The resin floor ALPS installed has transformed our facility.
              Their attention to detail and safety compliance is unmatched in
              New Zealand."
            </p>
            <p className="mt-4 font-bold text-primary">— NZ Logistics Hub</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[client1, client2, client1, client2].map((img, i) => (
              <div
                key={i}
                className="w-32 h-32 bg-muted rounded-xl flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all border border-border"
              >
                <img
                  src={img}
                  alt={`Client feedback ${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial