import { Clock } from "lucide-react";

interface SellEstimateProps {
  estimatedDays: number;
  sellProbability: number;
  platform: string;
}

const SellEstimate = ({ estimatedDays, sellProbability, platform }: SellEstimateProps) => {
  const pct = Math.round(sellProbability * 100);
  const colorClass = pct >= 70 ? "text-emerald-600" : pct >= 50 ? "text-amber-600" : "text-red-500";
  const barColor = pct >= 70 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-2 mb-6">
        <Clock size={18} className="text-teal-600" />
        <h3 className="font-serif text-lg font-bold text-gray-900">Sell Estimate on {platform}</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Estimated Days to Sale</p>
          <p className="font-serif text-5xl font-bold text-gray-900">{estimatedDays}</p>
          <p className="text-sm text-gray-500 mt-1">days</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">30-Day Sell Probability</p>
          <p className={`font-serif text-5xl font-bold ${colorClass}`}>{pct}%</p>
          <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${barColor}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellEstimate;
