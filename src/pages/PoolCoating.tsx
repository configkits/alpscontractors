import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PoolCoating() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Pool Coating Solutions</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Chemical-resistant and durable resin systems specifically engineered for concrete swimming pools.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Epoxy Pool Finishes</h2>
              <p className="text-muted-foreground mb-6">High-gloss, chemical-resistant coatings for lasting clarity.</p>
              <Button className="bg-accent hover:bg-accent/90">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
