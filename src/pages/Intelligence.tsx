import { BarChart3, Clock, Grid3X3 } from "lucide-react";
import ChartPlaceholder from "@/components/intelligence/ChartPlaceholder";
import Footer from "@/components/layout/Footer";

const charts = [
  { title: "Average Price by Category × Platform", icon: BarChart3 },
  { title: "Days to Sale Distribution", icon: Clock },
  { title: "Platform-Item Fit Matrix", icon: Grid3X3 },
];

const Intelligence = () => (
  <div className="min-h-screen bg-[#FAFAF8] pt-24 pb-12">
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 text-center mb-3">Platform Intelligence Dashboard</h1>
      <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
        Insights from 10,000+ real sold listings across Poshmark, eBay, and Depop
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {charts.map((chart) => (
          <ChartPlaceholder key={chart.title} title={chart.title} icon={chart.icon} />
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">Data Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Listings", value: "10,247" },
            { label: "Date Range", value: "Jan–Dec 2024" },
            { label: "Categories", value: "12" },
            { label: "Platforms", value: "3" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="font-serif text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Intelligence;
