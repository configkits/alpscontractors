import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LiquidWaterproofing() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Liquid Waterproofing Solutions</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Advanced liquid-applied membranes for seamless, high-performance protection of industrial and commercial structures.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Roofing Membranes</h2>
              <p className="text-muted-foreground mb-6">Seamless protection for flat and pitched industrial roofs.</p>
              <Button className="bg-accent hover:bg-accent/90">View Specifications</Button>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Wet Area Systems</h2>
              <p className="text-muted-foreground mb-6">Reliable waterproofing for internal and external wet zones.</p>
              <Button className="bg-accent hover:bg-accent/90">View Specifications</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
