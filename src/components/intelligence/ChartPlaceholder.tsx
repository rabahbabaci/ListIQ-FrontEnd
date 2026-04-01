import { LucideIcon } from "lucide-react";

interface ChartPlaceholderProps {
  title: string;
  icon: LucideIcon;
}

const ChartPlaceholder = ({ title, icon: Icon }: ChartPlaceholderProps) => (
  <div className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col items-center justify-center min-h-[300px]">
    <Icon size={64} className="text-[#5B4FD6]/20" />
    <h3 className="font-sans text-xl font-bold text-stone-900 mt-4 text-center">{title}</h3>
    <p className="text-sm text-stone-400 mt-2">Coming soon</p>
  </div>
);

export default ChartPlaceholder;
