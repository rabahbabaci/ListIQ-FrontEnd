const team = [
  { name: "Rabah", role: "Lead Engineer & Data Pipeline" },
  { name: "Lisa", role: "Data Science & Modeling" },
  { name: "Perla", role: "Product Design & Frontend" },
];

const TeamSection = () => (
  <section className="mb-16">
    <h2 className="text-2xl font-serif text-foreground text-center mb-10">The Team</h2>
    <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
      {team.map((member) => (
        <div key={member.name} className="text-center">
          <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
            <span className="text-xl font-serif text-primary">{member.name[0]}</span>
          </div>
          <p className="text-sm font-medium text-foreground">{member.name}</p>
          <p className="text-xs text-muted-foreground">{member.role}</p>
        </div>
      ))}
    </div>
    <p className="text-xs text-muted-foreground text-center mt-6">
      UC Berkeley · Data 198: Fashion × Data Science · Spring 2026
    </p>
  </section>
);

export default TeamSection;
