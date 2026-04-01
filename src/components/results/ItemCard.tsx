import { ItemData } from "@/types/api";
import { Camera } from "lucide-react";

interface ItemCardProps {
  item: ItemData;
}

const ItemCard = ({ item }: ItemCardProps) => (
  <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-6 animate-fade-in">
    {item.image_url ? (
      <img
        src={item.image_url}
        alt={item.category}
        className="w-full md:w-40 h-40 object-cover rounded-xl"
      />
    ) : (
      <div className="w-full md:w-40 h-40 rounded-xl bg-zinc-100 flex items-center justify-center">
        <Camera size={32} className="text-zinc-300" />
      </div>
    )}
    <div className="flex-1">
      <h3 className="font-sans text-xl md:text-2xl font-bold text-zinc-900">{item.brand} {item.category}</h3>
      <p className="text-sm text-zinc-400 mt-1">Est. retail ${item.estimated_retail.toFixed(2)}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          { label: "Size", value: item.size },
          { label: "Condition", value: item.condition },
          { label: "Color", value: item.color },
        ].map((attr) => (
          <span
            key={attr.label}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700"
          >
            {attr.label}: {attr.value}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ItemCard;
