import { Lightbulb } from "lucide-react";

interface WhyThisPlatformProps {
  platform: string;
  reasoning: string;
}

const platformBorderColor: Record<string, string> = {
  Depop: "border-l-[#FF2300]",
  Poshmark: "border-l-[#7B2D8E]",
  eBay: "border-l-[#0064D2]",
};

const platformBgColor: Record<string, string> = {
  Depop: "bg-red-50/30",
  Poshmark: "bg-purple-50/30",
  eBay: "bg-blue-50/30",
};

const platformIconColor: Record<string, string> = {
  Depop: "text-[#FF2300]",
  Poshmark: "text-[#7B2D8E]",
  eBay: "text-[#0064D2]",
};

const WhyThisPlatform = ({ platform, reasoning }: WhyThisPlatformProps) => (
  <div
    className={`rounded-2xl border-l-4 ${platformBorderColor[platform] || "border-l-stone-300"} ${platformBgColor[platform] || "bg-stone-50"} shadow-sm p-6 md:p-8 animate-fade-in`}
    style={{ animationDelay: "0.4s" }}
  >
    <div className="flex items-center gap-2 mb-3">
      <Lightbulb size={18} className={platformIconColor[platform] || "text-stone-600"} />
      <h3 className="font-sans text-xl font-bold text-stone-900">Why {platform}?</h3>
    </div>
    <p className="text-stone-600 leading-relaxed text-base">{reasoning}</p>
  </div>
);

export default WhyThisPlatform;
