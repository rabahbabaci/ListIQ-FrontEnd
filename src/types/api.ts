export interface ItemData {
  category: string;
  brand: string;
  size: string;
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

export interface NetProfit {
  fast_sale: number;
  balanced: number;
  max_revenue: number;
}

export interface PlatformRecommendation {
  platform: "Depop" | "Poshmark" | "eBay";
  rank: number;
  fit_score: number;
  price_tiers: PriceTiers;
  platform_fee_pct: number;
  estimated_shipping: number;
  net_profit: NetProfit;
  sell_probability_30d: number;
  estimated_days_to_sale: number;
  estimated_time_minutes: number;
  effective_hourly_rate: number;
  reasoning: string;
}

export interface WorthItVerdict {
  verdict: boolean | "marginal";
  best_net_profit: number;
  best_platform: string;
  effective_hourly_rate: number;
  explanation: string;
}

export interface AnalysisResult {
  item: ItemData;
  recommendations: PlatformRecommendation[];
  worth_it: WorthItVerdict;
}

export interface AIDetectedAttributes {
  category: string;
  color: string;
  condition: string;
  style?: string;
  image_url?: string;
}
