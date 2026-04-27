const skillCategories = [
  {
    label: '// core_stack',
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/10',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Redux', 'Tailwind CSS', 'SCSS'],
  },
  {
    label: '// design_&_3d',
    color: 'text-secondary',
    borderColor: 'border-secondary/30',
    bgColor: 'bg-secondary/10',
    skills: ['Figma', 'Illustrator', 'Three.js', 'Material UI', 'Design Systems', 'UI/UX', 'Accessibility'],
  },
  {
    label: '// tools_&_more',
    color: 'text-accent',
    borderColor: 'border-accent/30',
    bgColor: 'bg-accent/10',
    skills: ['React Native', 'PostgreSQL', 'Python', 'Git', 'WordPress', 'Vue.js', 'Bootstrap', 'Expo'],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-sm text-secondary/80 mb-2">
            <span className="text-primary">[user@earamburo ~]</span>$ ls skills/
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map(({ label, color, borderColor, bgColor, skills }) => (
            <div
              key={label}
              className="hologram-panel rounded-2xl p-6 border border-border/60 hover:border-primary/30 transition-all duration-300"
            >
              <p className={`font-mono text-xs ${color} mb-5 tracking-wide`}>{label}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 ${bgColor} border ${borderColor} rounded-full font-mono text-xs text-foreground/80 hover:text-foreground transition-colors duration-150`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
