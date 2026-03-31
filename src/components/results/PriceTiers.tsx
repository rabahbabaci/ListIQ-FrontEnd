import { PriceTiers as PriceTiersType } from "@/types/api";
import { DollarSign, Zap, Scale, TrendingUp } from "lucide-react";

interface PriceTiersProps {
  priceTiers: PriceTiersType;
  platform: string;
}

const tiers = [
  { key: "fast_sale" as const, label: "Quick Sale", icon: Zap, description: "Sell within days" },
  { key: "balanced" as const, label: "Balanced", icon: Scale, description: "Best value tradeoff" },
  { key: "max_revenue" as const, label: "Max Revenue", icon: TrendingUp, description: "Hold for top dollar" },
];

const PriceTiersComponent = ({ priceTiers, platform }: PriceTiersProps) => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <div className="flex items-center gap-2 mb-4">
      <DollarSign size={18} className="text-gold" />
      <h3 className="text-lg font-serif text-foreground">Price Tiers on {platform}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tiers.map((tier, i) => {
        const value = priceTiers[tier.key];
        const isMiddle = i === 1;
        return (
          <div
            key={tier.key}
            className={`rounded-lg p-5 text-center ${
              isMiddle ? "bg-accent border border-primary/20" : "bg-background"
            }`}
          >
            <tier.icon size={18} className={`mx-auto mb-2 ${isMiddle ? "text-primary" : "text-muted-foreground"}`} />
            <p className="text-xs font-medium text-muted-foreground mb-1">{tier.label}</p>
            <p className="text-3xl font-serif text-gold">${value}</p>
            <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default PriceTiersComponent;
