import { PlatformRecommendation } from "@/types/api";
import { Trophy } from "lucide-react";

interface PlatformRankingProps {
  recommendations: PlatformRecommendation[];
}

const platformColors: Record<string, string> = {
  Depop: "bg-depop",
  Poshmark: "bg-poshmark",
  eBay: "bg-ebay",
};

const PlatformRanking = ({ recommendations }: PlatformRankingProps) => {
  const sorted = [...recommendations].sort((a, b) => a.rank - b.rank);
  const top = sorted[0];

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={18} className="text-gold" />
        <h3 className="text-lg font-serif text-foreground">Best Platform</h3>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className={`w-3 h-3 rounded-full ${platformColors[top.platform]}`} />
        <span className="text-2xl font-serif text-foreground">{top.platform}</span>
        <span className="ml-auto text-sm font-medium text-primary bg-accent px-3 py-1 rounded-full">
          {top.fit_score}/10 Fit Score
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {sorted.map((rec) => (
          <div
            key={rec.platform}
            className={`text-center p-3 rounded-lg ${
              rec.rank === 1 ? "bg-accent border border-primary/20 border-l-4 border-l-primary" : "bg-background opacity-75"
            }`}
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className={`w-2 h-2 rounded-full ${platformColors[rec.platform]}`} />
              <span className="text-xs font-medium text-foreground">{rec.platform}</span>
            </div>
            <p className="text-lg font-serif text-foreground">#{rec.rank}</p>
            <p className="text-xs text-muted-foreground">{rec.fit_score}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformRanking;
