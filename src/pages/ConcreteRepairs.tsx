import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ConcreteRepairs() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Concrete Repairs</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Structural and aesthetic concrete restoration services for industrial and commercial facilities.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Crack Injection</h2>
              <p className="text-muted-foreground mb-6">Structural resin injection for concrete stabilization.</p>
              <Button className="bg-accent hover:bg-accent/90">View Services</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
