import HowItWorksStep from "./HowItWorksStep";

const steps = [
  {
    number: "1",
    title: "Enter Your Route",
    description: "Set your pickup location, destination, and when you want to travel."
  },
  {
    number: "2",
    title: "Get Matched",
    description: "Our smart algorithm finds other riders heading the same way at the same time."
  },
  {
    number: "3",
    title: "Ride & Save",
    description: "Share the ride, split the fare, and enjoy your journey together!"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and transform your daily commute.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <HowItWorksStep 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
