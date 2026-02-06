import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

const FeatureCard = ({ icon: Icon, title, description, highlight }: FeatureCardProps) => {
  return (
    <div className="group bg-card rounded-2xl p-6 border border-border card-hover">
      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      {highlight && (
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
          <span className="text-sm font-semibold text-primary">{highlight}</span>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
