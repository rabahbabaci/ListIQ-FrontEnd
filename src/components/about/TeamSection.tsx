const team = [
  { name: "Rabah", role: "Lead Engineer & Data Pipeline" },
  { name: "Lisa", role: "Data Science & Modeling" },
  { name: "Perla", role: "Product Design & Frontend" },
];

const TeamSection = () => (
  <section className="mb-16">
    <h2 className="font-sans text-2xl font-bold text-stone-900 text-center mb-10">The Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {team.map((member) => (
        <div key={member.name} className="text-center">
          <div className="w-20 h-20 rounded-full bg-[#EDEAFC] mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#5B4FD6]">{member.name[0]}</span>
          </div>
          <p className="font-sans text-lg font-bold text-stone-900">{member.name}</p>
          <p className="text-sm text-stone-500">{member.role}</p>
        </div>
      ))}
    </div>
    <p className="text-xs text-stone-400 text-center mt-6">
      UC Berkeley · Data 198: Fashion × Data Science · Spring 2026
    </p>
  </section>
);

export default TeamSection;
