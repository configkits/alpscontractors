import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import IndustrialResin from "@/pages/IndustrialResin";
import LiquidWaterproofing from "@/pages/LiquidWaterproofing";
import AntiSlip from "@/pages/AntiSlip";
import PoolCoating from "@/pages/PoolCoating";
import ConcreteRepairs from "@/pages/ConcreteRepairs";
import InteriorEpoxy from "@/pages/InteriorEpoxy";
import WhyEpoxy from "@/pages/WhyEpoxy";
import OurWork from "@/pages/OurWork";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/industrial-resin" component={IndustrialResin} />
      <Route path="/services/liquid-waterproofing" component={LiquidWaterproofing} />
      <Route path="/services/anti-slip" component={AntiSlip} />
      <Route path="/services/pool-coating" component={PoolCoating} />
      <Route path="/services/concrete-repairs" component={ConcreteRepairs} />
      <Route path="/services/interior-epoxy" component={InteriorEpoxy} />
      <Route path="/services/why-epoxy" component={WhyEpoxy} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;