import { PriceTiers as PriceTiersType, NetProfit } from "@/types/api";
import { Zap, Scale, TrendingUp } from "lucide-react";

interface PriceTiersProps {
  priceTiers: PriceTiersType;
  netProfit: NetProfit;
  platformFeePct: number;
  estimatedShipping: number;
  platform: string;
}

const tiers = [
  { key: "fast_sale" as const, label: "Quick Sale", icon: Zap, description: "Sell within days" },
  { key: "balanced" as const, label: "Balanced", icon: Scale, description: "Best value tradeoff" },
  { key: "max_revenue" as const, label: "Max Revenue", icon: TrendingUp, description: "Hold for top dollar" },
];

const PriceTiersComponent = ({ priceTiers, netProfit, platformFeePct, estimatedShipping, platform }: PriceTiersProps) => (
  <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 md:p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
    <div className="flex items-center gap-2 mb-6">
      <Scale size={18} className="text-[#E5A22D]" />
      <h3 className="font-sans text-lg font-bold text-stone-900">Price Tiers on {platform}</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tiers.map((tier, i) => {
        const salePrice = priceTiers[tier.key];
        const net = netProfit[tier.key];
        const isMiddle = i === 1;
        return (
          <div
            key={tier.key}
            className={`rounded-xl p-5 text-center relative ${
              isMiddle ? "ring-2 ring-[#5B4FD6] bg-[#EDEAFC]/40" : "border border-stone-200 bg-white"
            }`}
          >
            {isMiddle && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#5B4FD6] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Recommended
              </span>
            )}
            <div className="flex items-center justify-center gap-2">
              <tier.icon size={18} className={isMiddle ? "text-[#5B4FD6]" : "text-stone-500"} />
              <span className="font-semibold text-stone-900">{tier.label}</span>
            </div>
            <p className="text-xs text-stone-500 mt-1">{tier.description}</p>

            <div className="pt-3 mt-3 border-t border-stone-200/70 space-y-1">
              <p className="text-base font-semibold text-stone-700">
                List at{" "}
                <span className="text-xl font-bold text-stone-900">${salePrice}</span>
              </p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-stone-900 break-words">
                You keep {net < 0 ? "-" : ""}${Math.abs(net).toFixed(2)}
              </p>
              <p className="text-xs text-stone-400">
                after {Math.round(platformFeePct * 100)}% fee + ${estimatedShipping.toFixed(2)} shipping
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default PriceTiersComponent;
