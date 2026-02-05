import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Get in touch with our specialists for a consultation on your next industrial or commercial flooring project.
          </p>
          <form className="grid gap-6 bg-muted/30 p-8 md:p-12 rounded-2xl border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Full Name" className="bg-white" />
              <Input placeholder="Email Address" className="bg-white" />
            </div>
            <Input placeholder="Project Location" className="bg-white" />
            <Textarea placeholder="How can we help?" className="min-h-[150px] bg-white" />
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg">SUBMIT INQUIRY</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
