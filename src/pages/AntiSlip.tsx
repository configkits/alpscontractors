import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AntiSlip() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Anti-Slip Solutions</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Certified safety treatments and coatings designed to exceed NZ safety standards and minimize slip liability.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Industrial Slip Guard</h2>
              <p className="text-muted-foreground mb-6">Heavy-duty anti-slip treatments for high-traffic zones.</p>
              <Button className="bg-accent hover:bg-accent/90">Safety Specs</Button>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Commercial Grit Systems</h2>
              <p className="text-muted-foreground mb-6">Aesthetic yet functional safety finishes for public spaces.</p>
              <Button className="bg-accent hover:bg-accent/90">Safety Specs</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
