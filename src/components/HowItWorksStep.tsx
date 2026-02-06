interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const HowItWorksStep = ({ number, title, description, isLast }: HowItWorksStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary to-primary/20"></div>
      )}
      
      {/* Number badge */}
      <div className="relative z-10 w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
        <span className="text-2xl font-bold text-primary-foreground">{number}</span>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};

export default HowItWorksStep;
