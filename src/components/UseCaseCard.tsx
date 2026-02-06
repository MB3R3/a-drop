import { LucideIcon } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  saving: string;
  bgClass: string;
}

const UseCaseCard = ({ icon: Icon, title, description, saving, bgClass }: UseCaseCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 ${bgClass} card-hover`}>
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
        <Icon className="w-full h-full" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-card/90 backdrop-blur rounded-xl flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur rounded-full">
          <span className="text-sm font-bold text-success">Save up to {saving}</span>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
