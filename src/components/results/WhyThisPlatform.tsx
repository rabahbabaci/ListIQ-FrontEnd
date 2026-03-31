import { MessageSquare } from "lucide-react";

interface WhyThisPlatformProps {
  platform: string;
  reasoning: string;
}

const WhyThisPlatform = ({ platform, reasoning }: WhyThisPlatformProps) => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
    <div className="flex items-center gap-2 mb-3">
      <MessageSquare size={18} className="text-primary" />
      <h3 className="text-lg font-serif text-foreground">Why {platform}?</h3>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{reasoning}</p>
  </div>
);

export default WhyThisPlatform;
