const stats = [
  { value: "10,000+", label: "Sold Listings Analyzed" },
  { value: "3", label: "Platforms Compared" },
  { value: "AI", label: "Powered Identification" },
];

const StatsBar = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center py-6 md:py-0 px-4">
          <p className="font-serif text-4xl md:text-5xl font-bold text-stone-900">{stat.value}</p>
          <p className="mt-1 text-sm text-stone-400 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
