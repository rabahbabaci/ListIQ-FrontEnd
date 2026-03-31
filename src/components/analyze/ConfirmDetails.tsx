import { useState } from "react";
import { AIDetectedAttributes } from "@/types/api";
import { ArrowLeft, Sparkles } from "lucide-react";

interface ConfirmDetailsProps {
  imageUrl?: string;
  detected: AIDetectedAttributes;
  onConfirm: (details: { brand: string; size: string; category: string; color: string; condition: string }) => void;
  onBack: () => void;
}

const categories = [
  "Denim Jacket", "Sneakers", "Handbag", "T-Shirt", "Dress",
  "Sweater", "Pants", "Skirt", "Coat", "Activewear", "Accessories", "Other",
];

const conditions = ["New With Tags", "Like New", "Good", "Fair"];

const brands = [
  "Nike", "Adidas", "Levi's", "Coach", "Gucci", "Zara", "H&M",
  "Ralph Lauren", "The North Face", "Patagonia", "Lululemon",
  "Free People", "Anthropologie", "Urban Outfitters", "Other",
];

const topSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSizes = Array.from({ length: 21 }, (_, i) => String(5 + i * 0.5));
const oneSizeOnly = ["One Size"];

function getSizesForCategory(category: string): string[] {
  const lower = category.toLowerCase();
  if (lower.includes("sneaker") || lower.includes("shoe") || lower.includes("boot")) return shoeSizes;
  if (lower.includes("handbag") || lower.includes("accessor") || lower.includes("bag")) return oneSizeOnly;
  return topSizes;
}

const AiBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary bg-accent px-2 py-0.5 rounded-full">
    <Sparkles size={10} /> AI Detected
  </span>
);

const ConfirmDetails = ({ imageUrl, detected, onConfirm, onBack }: ConfirmDetailsProps) => {
  const [category, setCategory] = useState(detected.category);
  const [color, setColor] = useState(detected.color);
  const [condition, setCondition] = useState(detected.condition);
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const sizes = getSizesForCategory(category);
  const filteredBrands = brands.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const canSubmit = brand.trim() !== "" && size.trim() !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;
    onConfirm({ brand, size, category, color, condition });
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-72 flex-shrink-0">
            {imageUrl ? (
              <img src={imageUrl} alt="Item" className="w-full h-64 md:h-full object-cover" />
            ) : (
              <div className="w-full h-64 md:h-full bg-accent" />
            )}
          </div>

          {/* Form */}
          <div className="flex-1 p-6 md:p-8">
            <h2 className="text-2xl font-serif text-foreground mb-6">Confirm Your Item</h2>

            <div className="space-y-4">
              {/* AI-detected fields */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <label className="text-sm font-medium text-foreground">Category</label>
                  <AiBadge />
                </div>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setSize("");
                  }}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <label className="text-sm font-medium text-foreground">Color</label>
                  <AiBadge />
                </div>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <label className="text-sm font-medium text-foreground">Condition</label>
                  <AiBadge />
                </div>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {conditions.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* User-input fields */}
              <div className="border-l-4 border-gold pl-4">
                <div className="mb-1.5">
                  <label className="text-sm font-medium text-foreground">Brand</label>
                  <span className="text-xs text-muted-foreground ml-2">Your input needed</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={brandSearch || brand}
                    onChange={(e) => {
                      setBrandSearch(e.target.value);
                      setBrand("");
                      setShowBrandDropdown(true);
                    }}
                    onFocus={() => setShowBrandDropdown(true)}
                    placeholder="Search brands..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {showBrandDropdown && brandSearch && (
                    <div className="absolute z-10 w-full mt-1 bg-card border border-border rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {filteredBrands.map((b) => (
                        <button
                          key={b}
                          onClick={() => {
                            setBrand(b);
                            setBrandSearch("");
                            setShowBrandDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors"
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="border-l-4 border-gold pl-4">
                <div className="mb-1.5">
                  <label className="text-sm font-medium text-foreground">Size</label>
                  <span className="text-xs text-muted-foreground ml-2">Your input needed</span>
                </div>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select size</option>
                  {sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="mt-8 w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Get My Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDetails;
