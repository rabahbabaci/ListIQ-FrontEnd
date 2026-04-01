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
        bg: "bg-emerald-50",
        border: "border-l-emerald-500",
        icon: <CheckCircle2 size={40} className="text-emerald-600" />,
        headline: "Worth Selling!",
        headlineColor: "text-emerald-800",
        profitColor: "text-emerald-700",
      }
    : isMarginal
    ? {
        bg: "bg-amber-50",
        border: "border-l-amber-500",
        icon: <AlertTriangle size={40} className="text-amber-600" />,
        headline: "Marginal — Consider Your Time",
        headlineColor: "text-amber-800",
        profitColor: "text-amber-700",
      }
    : {
        bg: "bg-red-50",
        border: "border-l-red-500",
        icon: <XCircle size={40} className="text-red-600" />,
        headline: "Not Worth Listing",
        headlineColor: "text-red-800",
        profitColor: "text-red-700",
      };

  return (
    <div
      className={`rounded-2xl border-l-4 ${config.border} ${config.bg} p-8 md:p-10 animate-fade-in`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">{config.icon}</div>
        <div>
          <h2 className={`font-serif text-2xl md:text-3xl font-bold ${config.headlineColor} mb-2`}>
            {config.headline}
          </h2>
          <p className="text-base text-stone-600 leading-relaxed mb-4">
            {worthIt.explanation}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <p className="text-lg font-medium text-stone-900">
              Estimated{" "}
              <span className={`font-serif text-3xl font-bold ${config.profitColor}`}>
                ${worthIt.best_net_profit.toFixed(2)}
              </span>{" "}
              net on {worthIt.best_platform}
            </p>
            <p className="text-lg font-semibold text-stone-700">
              ${worthIt.effective_hourly_rate.toFixed(2)}/hr
              <span className="text-sm font-normal text-stone-400 ml-1">effective rate</span>
            </p>
          </div>
          {isFalse && (
            <p className="mt-3 text-sm text-red-600/70">
              Consider donating, gifting, or bundling with other items.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorthItVerdictComponent;
