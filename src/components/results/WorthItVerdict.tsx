import { WorthItVerdict as WorthItVerdictType } from "@/types/api";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface WorthItVerdictProps {
  worthIt: WorthItVerdictType;
}

const WorthItVerdictComponent = ({ worthIt }: WorthItVerdictProps) => {
  const isTrue = worthIt.verdict === true;
  const isMarginal = worthIt.verdict === "marginal";
  const isFalse = worthIt.verdict === false;

  const config = isTrue
    ? {
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-l-emerald-500",
        icon: <CheckCircle2 size={32} className="text-emerald-600" />,
        headline: "Worth Selling!",
      }
    : isMarginal
    ? {
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-l-amber-500",
        icon: <AlertTriangle size={32} className="text-amber-600" />,
        headline: "Marginal — Consider Your Time",
      }
    : {
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-l-red-500",
        icon: <XCircle size={32} className="text-red-600" />,
        headline: "Not Worth Listing",
      };

  return (
    <div
      className={`rounded-xl border-l-4 ${config.border} ${config.bg} p-8 animate-fade-in shadow-sm`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">{config.icon}</div>
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
            {config.headline}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            {worthIt.explanation}
          </p>
          <p className="text-lg font-medium text-foreground">
            Estimated{" "}
            <span className="text-gold font-serif text-2xl">
              ${worthIt.best_net_profit.toFixed(2)}
            </span>{" "}
            net profit on {worthIt.best_platform}
          </p>
          {isFalse && (
            <p className="mt-3 text-sm text-muted-foreground italic">
              Consider donating or gifting this item instead.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorthItVerdictComponent;
