const stats = [
  { value: "10,000+", label: "Sold Listings Analyzed" },
  { value: "3", label: "Platforms Compared" },
  { value: "AI", label: "Powered Identification" },
];

const StatsBar = () => (
  <section className="max-w-[1200px] mx-auto px-6 md:px-12 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center py-6 px-4 bg-card rounded-xl border border-border shadow-sm"
        >
          <p className="text-4xl font-bold text-primary">{stat.value}</p>
          <p className="mt-1 text-sm text-muted-foreground font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
