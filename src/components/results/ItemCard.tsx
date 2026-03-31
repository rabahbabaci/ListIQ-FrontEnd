import { ItemData } from "@/types/api";
import { Tag } from "lucide-react";

interface ItemCardProps {
  item: ItemData;
}

const ItemCard = ({ item }: ItemCardProps) => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col md:flex-row gap-6 animate-fade-in">
    {item.image_url ? (
      <img
        src={item.image_url}
        alt={item.category}
        className="w-full md:w-40 h-40 object-cover rounded-lg bg-accent"
      />
    ) : (
      <div className="w-full md:w-40 h-40 rounded-lg bg-accent flex items-center justify-center">
        <Tag size={32} className="text-primary/40" />
      </div>
    )}
    <div className="flex-1">
      <h3 className="text-xl font-serif text-foreground">{item.brand} {item.category}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          { label: "Size", value: item.size },
          { label: "Condition", value: item.condition },
          { label: "Color", value: item.color },
          { label: "Est. Retail", value: `$${item.estimated_retail.toFixed(2)}` },
        ].map((attr) => (
          <span
            key={attr.label}
            className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent text-accent-foreground px-3 py-1.5 rounded-full"
          >
            <span className="text-muted-foreground">{attr.label}:</span> {attr.value}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ItemCard;
