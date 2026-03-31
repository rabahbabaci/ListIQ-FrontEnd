import { Clock, TrendingUp } from "lucide-react";

interface SellEstimateProps {
  estimatedDays: number;
  sellProbability: number;
  platform: string;
}

const SellEstimate = ({ estimatedDays, sellProbability, platform }: SellEstimateProps) => {
  const pct = Math.round(sellProbability * 100);

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-2 mb-4">
        <Clock size={18} className="text-primary" />
        <h3 className="text-lg font-serif text-foreground">Sell Estimate on {platform}</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Estimated Days to Sale</p>
          <p className="text-4xl font-serif text-foreground">{estimatedDays}</p>
          <p className="text-xs text-muted-foreground mt-1">days</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">30-Day Sell Probability</p>
          <p className={`text-4xl font-serif ${pct >= 70 ? "text-success" : pct >= 50 ? "text-gold" : "text-warning"}`}>
            {pct}%
          </p>
          <div className="mt-2 w-full h-2 bg-background rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                pct >= 70 ? "bg-success" : pct >= 50 ? "bg-gold" : "bg-warning"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellEstimate;
