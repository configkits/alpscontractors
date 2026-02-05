import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-muted/30">
      <div className="text-center px-6">
        <h1 className="text-9xl font-serif text-primary/10 absolute inset-0 flex items-center justify-center -z-10 select-none">404</h1>
        <h2 className="text-4xl font-serif text-primary mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          The industrial solution you are looking for might have been moved or doesn't exist.
        </p>
        <Link href="/">
          <Button className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg font-bold">
            RETURN TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
