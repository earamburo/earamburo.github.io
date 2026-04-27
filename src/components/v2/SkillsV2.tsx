import { useScrollReveal } from '@/hooks/useScrollReveal';

const SKILL_GROUPS = [
  {
    label: 'Core Stack',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Redux', 'Tailwind CSS', 'SCSS'],
  },
  {
    label: 'Design & 3D',
    skills: ['Figma', 'Illustrator', 'Three.js', 'Material UI', 'Design Systems', 'UI/UX', 'Accessibility'],
  },
  {
    label: 'Tools & More',
    skills: ['React Native', 'PostgreSQL', 'Python', 'Git', 'WordPress', 'Vue.js', 'Bootstrap', 'Expo'],
  },
] as const;

export default function SkillsV2() {
  const headRef  = useScrollReveal<HTMLDivElement>();
  const gridRef  = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="reveal" ref={headRef}>
          <div className="sec-tag">Skills</div>
          <h2 className="sec-heading">Tech Stack</h2>
          <p className="sec-sub">The tools I reach for to build, design, and ship.</p>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {SKILL_GROUPS.map(({ label, skills }) => (
            <div key={label} className="sk-group">
              <div className="sk-lbl">{label}</div>
              <div className="sk-tags">
                {skills.map((skill) => (
                  <span key={skill} className="sk-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
