import { useCallback, useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/projects';

const visibleProjects = projects.filter(p => !p.hidden);

const CARD_W   = 330;
const CARD_GAP = 16;
const STEP     = CARD_W + CARD_GAP;

export default function ProjectsCarousel() {
  const [idx, setIdx]   = useState(0);
  const vpRef           = useRef<HTMLDivElement>(null);
  const trackRef        = useRef<HTMLDivElement>(null);
  const dragState       = useRef({ active: false, startX: 0, startIdx: 0 });
  const headerRef       = useScrollReveal<HTMLDivElement>();

  const maxIdx = useCallback(() => {
    const vp = vpRef.current;
    if (!vp) return visibleProjects.length - 1;
    const visible = Math.floor(vp.offsetWidth / STEP);
    return Math.max(0, visibleProjects.length - visible);
  }, []);

  const moveTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(n, maxIdx()));
    setIdx(next);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next * STEP}px)`;
    }
  }, [maxIdx]);

  useEffect(() => {
    const onResize = () => moveTo(idx);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [idx, moveTo]);

  useEffect(() => {
    const vp    = vpRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;

    const onDown = (e: MouseEvent) => {
      dragState.current = { active: true, startX: e.clientX, startIdx: idx };
      vp.classList.add('grabbing');
      track.style.transition = 'none';
    };

    const onMove = (e: MouseEvent) => {
      if (!dragState.current.active) return;
      const { startX, startIdx } = dragState.current;
      track.style.transform = `translateX(${-startIdx * STEP + (e.clientX - startX)}px)`;
    };

    const onUp = (e: MouseEvent) => {
      if (!dragState.current.active) return;
      dragState.current.active = false;
      vp.classList.remove('grabbing');
      track.style.transition = '';
      const diff = e.clientX - dragState.current.startX;
      if (diff < -80)      moveTo(dragState.current.startIdx + 1);
      else if (diff > 80)  moveTo(dragState.current.startIdx - 1);
      else                 moveTo(dragState.current.startIdx);
    };

    let touchStart = 0;
    const onTouchStart = (e: TouchEvent) => { touchStart = e.touches[0].clientX; };
    const onTouchEnd   = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientX - touchStart;
      if (diff < -60) moveTo(idx + 1);
      else if (diff > 60) moveTo(idx - 1);
    };

    vp.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    vp.addEventListener('touchstart', onTouchStart, { passive: true });
    vp.addEventListener('touchend', onTouchEnd);

    return () => {
      vp.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      vp.removeEventListener('touchstart', onTouchStart);
      vp.removeEventListener('touchend', onTouchEnd);
    };
  }, [idx, moveTo]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal" ref={headerRef}>
        <div>
          <div className="sec-tag">Projects</div>
          <h2 className="sec-heading">What I've Built</h2>
          <p className="sec-sub">Enterprise platforms, 3D tools, mobile prototypes, and everything in between.</p>
        </div>
        <div className="carousel-nav">
          <button className="c-btn" onClick={() => moveTo(idx - 1)} aria-label="Previous">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="c-btn" onClick={() => moveTo(idx + 1)} aria-label="Next">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="carousel-viewport" ref={vpRef}>
        <div className="carousel-track" ref={trackRef}>
          {visibleProjects.map((p) => (
            <div key={p.title} className="p-card">
              <div className="p-img-wrap">
                <img src={p.image} alt={p.title} draggable={false} loading="lazy" />
                <div className="p-img-scrim" />
                {p.featured && <span className="p-featured">Featured</span>}
                {p.githubUrl && (
                  <a
                    className="p-open"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub — ${p.title}`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                )}
              </div>
              <div className="p-body">
                <div className="p-title">{p.title}</div>
                <div className="p-tags">
                  {p.technologies.map((t) => (
                    <span key={t} className="p-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
