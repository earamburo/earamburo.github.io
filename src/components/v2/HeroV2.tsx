import { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';

const visibleProjects = projects.filter(p => !p.hidden);

const STATS = [
  { val: '6+', lbl: 'Years experience' },
  { val: '4',  lbl: 'Companies' },
  { val: '20+', lbl: 'Products shipped' },
  { val: 'AA', lbl: 'Accessibility' },
] as const;

const INTERVAL_MS = 3800;

export default function HeroV2() {
  const [idx, setIdx]       = useState(0);
  const [paused, setPaused] = useState(false);
  const vpRef               = useRef<HTMLDivElement>(null);
  const trackRef            = useRef<HTMLDivElement>(null);
  const dragState           = useRef({ active: false, startX: 0, startIdx: 0 });

  const moveTo = useCallback((n: number) => {
    const next = Math.max(0, Math.min(n, visibleProjects.length - 1));
    setIdx(next);
    const vp    = vpRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;
    const cardW = vp.offsetWidth - 52;
    track.style.transform = `translateX(-${next * (cardW + 12)}px)`;
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => moveTo((idx + 1) % visibleProjects.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, idx, moveTo]);

  // Drag
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
      const cardW = vp.offsetWidth - 52;
      track.style.transform = `translateX(${-startIdx * (cardW + 12) + (e.clientX - startX)}px)`;
    };

    const onUp = (e: MouseEvent) => {
      if (!dragState.current.active) return;
      dragState.current.active = false;
      vp.classList.remove('grabbing');
      track.style.transition = '';
      const diff = e.clientX - dragState.current.startX;
      if (diff < -60)      moveTo(dragState.current.startIdx + 1);
      else if (diff > 60)  moveTo(dragState.current.startIdx - 1);
      else                 moveTo(dragState.current.startIdx);
    };

    const onTouchStart = (e: TouchEvent) => {
      dragState.current.startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const diff = e.changedTouches[0].clientX - dragState.current.startX;
      if (diff < -50) moveTo(idx + 1);
      else if (diff > 50) moveTo(idx - 1);
    };

    const onResize = () => moveTo(idx);

    vp.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    vp.addEventListener('touchstart', onTouchStart, { passive: true });
    vp.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    return () => {
      vp.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      vp.removeEventListener('touchstart', onTouchStart);
      vp.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, [idx, moveTo]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-grid">

          {/* ── Left: intro ── */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              Open to new opportunities
            </div>

            <p className="hero-kicker">Software Solutions Engineer &amp; Designer</p>

            <h1 className="hero-heading">
              <span className="name">Andres<br />Aramburo</span>
              <span className="role">Building products<br />people love to use</span>
            </h1>

            <p className="hero-sub">
              Fast, accessible, and visually striking digital products — from enterprise
              platforms to interactive 3D experiences. 6+ years shipping at NCR Voyix,
              Inspire Brands, and GoodR.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/Edwin-Aramburo-Resume-SWE.pdf" download className="btn-secondary">
                Download Resume
                <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
                  <path d="M8 2v8M5 7l3 4 3-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="hero-stats">
              {STATS.map(({ val, lbl }) => (
                <div key={lbl}>
                  <div className="stat-val">{val}</div>
                  <div className="stat-lbl">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: carousel ── */}
          <div
            className="hero-right"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="hero-right-header">
              <span className="hero-right-label">Featured Projects</span>
              <div className="hero-car-arrows">
                <button className="hc-btn" onClick={() => moveTo(idx - 1)} aria-label="Previous project">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
                    <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="hc-btn" onClick={() => moveTo(idx + 1)} aria-label="Next project">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="hero-car-vp" ref={vpRef}>
              <div className="hero-car-track" ref={trackRef}>
                {visibleProjects.map((p) => (
                  <div
                    key={p.title}
                    className="hc-card"
                    onClick={() => p.liveUrl && window.open(p.liveUrl, '_blank')}
                  >
                    <img className="hc-img" src={p.image} alt={p.title} draggable={false} loading="lazy" />
                    <div className="hc-scrim" />
                    {p.featured && <span className="hc-feat">Featured</span>}
                    {p.liveUrl && (
                      <a
                        className="hc-open"
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open ${p.title}`}
                      >
                        <svg viewBox="0 0 16 16" fill="none" width="13" height="13" aria-hidden="true">
                          <path d="M3 3h10v10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </a>
                    )}
                    <div className="hc-body">
                      <div className="hc-title">{p.title}</div>
                      <div className="hc-tags">
                        {p.technologies.map((t) => (
                          <span key={t} className="hc-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-car-footer">
              <span className="hc-counter">{idx + 1} / {visibleProjects.length}</span>
              <div className="hc-dots">
                {visibleProjects.map((_, i) => (
                  <button
                    key={i}
                    className={`hc-dot${i === idx ? ' on' : ''}`}
                    onClick={() => moveTo(i)}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
