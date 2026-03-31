export interface ItemData {
  category: string;
  brand: string;
  condition: string;
  color: string;
  estimated_retail: number;
  image_url?: string;
}

export interface PriceTiers {
  fast_sale: number;
  balanced: number;
  max_revenue: number;
}

export interface PlatformRecommendation {
  platform: "Depop" | "Poshmark" | "eBay";
  rank: number;
  fit_score: number;
  price_tiers: PriceTiers;
  sell_probability_30d: number;
  estimated_days_to_sale: number;
  reasoning: string;
}

export interface AnalysisResult {
  item: ItemData;
  recommendations: PlatformRecommendation[];
}
