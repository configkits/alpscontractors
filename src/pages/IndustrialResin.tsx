import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function IndustrialResin() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8">Industrial Resin Flooring</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          High-performance flooring solutions engineered for the toughest industrial environments.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">Epoxy Systems</h2>
              <p className="text-muted-foreground mb-6">Chemical resistant and extremely durable surfaces.</p>
              <Button className="bg-accent hover:bg-accent/90">View Specifications</Button>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-64 bg-muted" />
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif mb-4">PU Screeds</h2>
              <p className="text-muted-foreground mb-6">Thermal shock resistant solutions for food processing.</p>
              <Button className="bg-accent hover:bg-accent/90">View Specifications</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
