import { PlatformRecommendation } from "@/types/api";
import { Trophy } from "lucide-react";

interface PlatformRankingProps {
  recommendations: PlatformRecommendation[];
}

const platformDotColor: Record<string, string> = {
  Depop: "bg-[#FF2300]",
  Poshmark: "bg-[#7B2D8E]",
  eBay: "bg-[#0064D2]",
};

const platformBorderColor: Record<string, string> = {
  Depop: "border-l-[#FF2300]",
  Poshmark: "border-l-[#7B2D8E]",
  eBay: "border-l-[#0064D2]",
};

const PlatformRanking = ({ recommendations }: PlatformRankingProps) => {
  const sorted = [...recommendations].sort((a, b) => a.rank - b.rank);
  const top = sorted[0];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center gap-2 mb-6">
        <Trophy size={18} className="text-amber-600" />
        <h3 className="font-serif text-lg font-bold text-gray-900">Platform Rankings</h3>
      </div>

      {/* #1 platform — hero card */}
      <div className={`border-l-4 ${platformBorderColor[top.platform]} bg-teal-50/40 rounded-xl p-5 mb-4`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${platformDotColor[top.platform]}`} />
            <span className="font-serif text-xl font-bold text-gray-900">{top.platform}</span>
            <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full ml-2">Best Match</span>
          </div>
          <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
            {top.fit_score}/10
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-gray-900">${top.net_profit.balanced.toFixed(0)}</p>
            <p className="text-xs text-gray-500">net profit</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{top.estimated_days_to_sale}d</p>
            <p className="text-xs text-gray-500">to sell</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-teal-600">${top.effective_hourly_rate.toFixed(0)}/hr</p>
            <p className="text-xs text-gray-500">effective rate</p>
          </div>
        </div>
      </div>

      {/* #2 and #3 */}
      <div className="grid grid-cols-2 gap-3">
        {sorted.slice(1).map((rec) => (
          <div key={rec.platform} className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <span className={`w-2 h-2 rounded-full ${platformDotColor[rec.platform]}`} />
              <span className="text-sm font-medium text-gray-700">{rec.platform}</span>
              <span className="text-xs text-gray-400 ml-1">{rec.fit_score}/10</span>
            </div>
            <p className="text-xl font-bold text-gray-900">${rec.net_profit.balanced.toFixed(0)}</p>
            <p className="text-xs text-gray-500">net profit</p>
            <div className="mt-2 pt-2 border-t border-gray-200 flex justify-center gap-4">
              <span className="text-xs text-gray-500">{rec.estimated_days_to_sale}d</span>
              <span className="text-xs font-medium text-teal-600">${rec.effective_hourly_rate.toFixed(0)}/hr</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformRanking;
