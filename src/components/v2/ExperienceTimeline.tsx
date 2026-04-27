import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { experiences, type ExperienceItem } from '@/data/experience';

function DetailPanel({ exp }: { exp: ExperienceItem }) {
  return (
    <div className="tl-detail show">
      <div className="det-header">
        <div>
          <div className="det-title">{exp.title}</div>
          <div className="det-co">{exp.company}</div>
        </div>
        <div className="det-dates">{exp.dates}</div>
      </div>
      <ul className="det-bullets">
        {exp.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="det-tech">
        {exp.tech.map((t) => (
          <span key={t} className="det-chip">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const headRef                   = useScrollReveal<HTMLDivElement>();

  const fillPct = (activeIdx / (experiences.length - 1)) * 100;

  return (
    <section id="experience" className="experience-section">
      <div className="exp-head reveal" ref={headRef}>
        <div className="sec-tag">Experience</div>
        <h2 className="sec-heading">Where I've Worked</h2>
        <p className="sec-sub">Click a node to explore my professional journey.</p>
      </div>

      <div className="timeline-wrap">
        <div className="timeline-row">
          <div className="tl-line">
            <div className="tl-fill" style={{ width: `${fillPct}%` }} />
          </div>

          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`tl-node${i === activeIdx ? ' active' : ''}`}
              onClick={() => setActiveIdx(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveIdx(i)}
              aria-pressed={i === activeIdx}
            >
              <div className="tl-dot">{i + 1}</div>
              <div className="tl-lbl">
                <div className="tl-co">{exp.company}</div>
                <div className="tl-yr">{exp.year}</div>
              </div>
            </div>
          ))}
        </div>

        <DetailPanel key={activeIdx} exp={experiences[activeIdx]} />
      </div>
    </section>
  );
}
