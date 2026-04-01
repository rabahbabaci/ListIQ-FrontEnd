import { LucideIcon } from "lucide-react";

interface ChartPlaceholderProps {
  title: string;
  icon: LucideIcon;
}

const ChartPlaceholder = ({ title, icon: Icon }: ChartPlaceholderProps) => (
  <div className="bg-white rounded-2xl border border-zinc-100 p-8 flex flex-col items-center justify-center min-h-[300px]">
    <Icon size={64} className="text-zinc-200" />
    <h3 className="font-sans text-xl font-bold text-zinc-900 mt-4 text-center">{title}</h3>
    <p className="text-sm text-zinc-400 mt-2">Coming soon</p>
  </div>
);

export default ChartPlaceholder;
