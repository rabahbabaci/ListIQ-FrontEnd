import { LucideIcon } from "lucide-react";

interface ChartPlaceholderProps {
  title: string;
  icon: LucideIcon;
}

const ChartPlaceholder = ({ title, icon: Icon }: ChartPlaceholderProps) => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-8 flex flex-col items-center justify-center min-h-[240px]">
    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary/50" />
    </div>
    <h3 className="text-base font-serif text-foreground text-center">{title}</h3>
    <p className="text-xs text-muted-foreground mt-2">Coming soon</p>
  </div>
);

export default ChartPlaceholder;
