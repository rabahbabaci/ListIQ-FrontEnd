import { BarChart3, Clock, Grid3X3 } from "lucide-react";
import ChartPlaceholder from "@/components/intelligence/ChartPlaceholder";
import Footer from "@/components/layout/Footer";

const charts = [
  { title: "Average Price by Category × Platform", icon: BarChart3 },
  { title: "Days to Sale Distribution", icon: Clock },
  { title: "Platform-Item Fit Matrix", icon: Grid3X3 },
];

const Intelligence = () => (
  <div className="min-h-screen bg-background pt-24 pb-12">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <h1 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-2">Platform Intelligence Dashboard</h1>
      <p className="text-center text-muted-foreground mb-12">
        Insights from 10,000+ real sold listings across Poshmark, eBay, and Depop
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {charts.map((chart) => (
          <ChartPlaceholder key={chart.title} title={chart.title} icon={chart.icon} />
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm p-8">
        <h3 className="text-lg font-serif text-foreground mb-4">Data Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Listings", value: "10,247" },
            { label: "Date Range", value: "Jan–Dec 2024" },
            { label: "Categories", value: "12" },
            { label: "Platforms", value: "3" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-xl font-serif text-foreground mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Intelligence;
