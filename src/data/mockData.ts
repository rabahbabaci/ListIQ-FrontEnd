import { AnalysisResult } from "@/types/api";

export const mockDenimJacket: AnalysisResult = {
  item: {
    category: "Denim Jacket",
    brand: "Levi's",
    condition: "Like New",
    color: "Blue",
    estimated_retail: 89.99,
    image_url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
  },
  recommendations: [
    {
      platform: "Depop",
      rank: 1,
      fit_score: 8.7,
      price_tiers: { fast_sale: 42, balanced: 55, max_revenue: 68 },
      sell_probability_30d: 0.82,
      estimated_days_to_sale: 11,
      reasoning: "Denim jackets sell 2.1x faster on Depop at 15% higher average price. Depop's younger demographic drives strong demand for vintage and branded denim.",
    },
    {
      platform: "Poshmark",
      rank: 2,
      fit_score: 7.1,
      price_tiers: { fast_sale: 38, balanced: 48, max_revenue: 62 },
      sell_probability_30d: 0.68,
      estimated_days_to_sale: 18,
      reasoning: "Poshmark has steady demand for Levi's but longer sell-through times. Social sharing features help, but competition is higher in this category.",
    },
    {
      platform: "eBay",
      rank: 3,
      fit_score: 5.9,
      price_tiers: { fast_sale: 32, balanced: 44, max_revenue: 58 },
      sell_probability_30d: 0.54,
      estimated_days_to_sale: 24,
      reasoning: "eBay has the largest audience but lower conversion for fashion items. Best for rare or collectible Levi's pieces rather than standard styles.",
    },
  ],
};

export const mockSneakers: AnalysisResult = {
  item: {
    category: "Sneakers",
    brand: "Nike",
    condition: "Good",
    color: "White/Black",
    estimated_retail: 120.0,
  },
  recommendations: [
    {
      platform: "eBay",
      rank: 1,
      fit_score: 9.1,
      price_tiers: { fast_sale: 55, balanced: 72, max_revenue: 95 },
      sell_probability_30d: 0.88,
      estimated_days_to_sale: 8,
      reasoning: "Nike sneakers have the highest sell-through rate on eBay. Authenticity guarantee program builds buyer confidence and drives premium prices.",
    },
    {
      platform: "Depop",
      rank: 2,
      fit_score: 7.8,
      price_tiers: { fast_sale: 48, balanced: 65, max_revenue: 85 },
      sell_probability_30d: 0.75,
      estimated_days_to_sale: 14,
      reasoning: "Strong streetwear audience on Depop, but slightly lower price ceiling than eBay for mainstream Nike models.",
    },
    {
      platform: "Poshmark",
      rank: 3,
      fit_score: 6.2,
      price_tiers: { fast_sale: 42, balanced: 58, max_revenue: 78 },
      sell_probability_30d: 0.61,
      estimated_days_to_sale: 21,
      reasoning: "Poshmark's audience skews toward women's fashion. Men's sneakers have lower visibility and slower turnover here.",
    },
  ],
};

export const mockHandbag: AnalysisResult = {
  item: {
    category: "Handbag",
    brand: "Coach",
    condition: "New With Tags",
    color: "Brown",
    estimated_retail: 295.0,
  },
  recommendations: [
    {
      platform: "Poshmark",
      rank: 1,
      fit_score: 9.3,
      price_tiers: { fast_sale: 145, balanced: 185, max_revenue: 225 },
      sell_probability_30d: 0.91,
      estimated_days_to_sale: 6,
      reasoning: "Coach handbags are Poshmark's strongest category. NWT condition commands a significant premium, and Poshmark's authentication builds buyer trust for luxury items.",
    },
    {
      platform: "eBay",
      rank: 2,
      fit_score: 7.4,
      price_tiers: { fast_sale: 130, balanced: 170, max_revenue: 210 },
      sell_probability_30d: 0.78,
      estimated_days_to_sale: 12,
      reasoning: "eBay's broad reach means more potential buyers, but prices trend slightly lower without Poshmark's curated fashion audience.",
    },
    {
      platform: "Depop",
      rank: 3,
      fit_score: 5.5,
      price_tiers: { fast_sale: 110, balanced: 145, max_revenue: 180 },
      sell_probability_30d: 0.52,
      estimated_days_to_sale: 22,
      reasoning: "Depop's younger audience has lower budget for premium handbags. Coach has moderate appeal here, but sell-through is significantly slower.",
    },
  ],
};

export const allMockItems = [mockDenimJacket, mockSneakers, mockHandbag];
