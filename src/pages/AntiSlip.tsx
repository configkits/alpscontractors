import ServiceTemplate from "./ServiceTemplate";

export default function AntiSlip() {
  return (
    <ServiceTemplate 
      title="Anti-Slip Solutions"
      subtitle="Certified safety treatments that exceed NZ slip-resistance standards."
      description="Reduce slip liability and ensure worker safety with our specialized anti-slip treatments. From industrial grit systems to commercial safety coatings, we provide certified solutions that maintain performance even in wet or oily conditions."
      features={[
        "Certified slip-resistance testing",
        "Heavy-duty industrial grit systems",
        "Invisible anti-slip treatments",
        "H&S compliance documentation"
      ]}
      benefits={[
        "Reduced Liability",
        "Enhanced Safety",
        "Certified Performance",
        "Durable Finishes",
        "Easy to Clean",
        "NZ Standard Verified"
      ]}
    />
  );
}
