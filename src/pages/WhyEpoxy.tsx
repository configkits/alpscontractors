import { Button } from "@/components/ui/button";

export default function WhyEpoxy() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Why Epoxy Flooring?</h1>
        <div className="prose prose-lg text-muted-foreground leading-relaxed">
          <p className="mb-6">
            Epoxy flooring is a high-performance surface treatment that transforms standard concrete into a durable, chemical-resistant, and aesthetically pleasing floor system.
          </p>
          <h2 className="text-2xl font-serif text-primary mb-4">Key Benefits</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Unmatched Durability and Strength</li>
            <li>Chemical and Spill Resistance</li>
            <li>Seamless and Hygienic Surface</li>
            <li>Minimal Maintenance Requirements</li>
            <li>Enhanced Safety with Anti-Slip Additives</li>
          </ul>
          <Button className="bg-accent hover:bg-accent/90 mt-8">Consult an Expert</Button>
        </div>
      </div>
    </div>
  );
}
