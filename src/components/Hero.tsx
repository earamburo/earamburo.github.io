import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Download } from 'lucide-react';
import { projects } from '@/data/projects';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const TYPEWRITER_TEXT = 'Edwin Aramburo';
const CAROUSEL_INTERVAL = 4000;

export default function Hero({ onNavigate }: HeroProps) {
  const [typed, setTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Typewriter
  useEffect(() => {
    if (typed.length >= TYPEWRITER_TEXT.length) return;
    const t = setTimeout(() => setTyped(TYPEWRITER_TEXT.slice(0, typed.length + 1)), 80);
    return () => clearTimeout(t);
  }, [typed]);

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(iv);
  }, []);

  const next = useCallback(() => setActiveIndex(i => (i + 1) % projects.length), []);
  const prev = useCallback(() => setActiveIndex(i => (i - 1 + projects.length) % projects.length), []);

  useEffect(() => {
    if (isPaused) return;
    const iv = setInterval(next, CAROUSEL_INTERVAL);
    return () => clearInterval(iv);
  }, [isPaused, next]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Edwin-Aramburo-Resume-SWE.pdf';
    link.download = 'Edwin-Aramburo-Resume.pdf';
    link.click();
  };

  const current = projects[activeIndex];

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: terminal intro ── */}
        <div className="flex flex-col gap-6 animate-fade-in">

          <div className="font-mono text-sm text-foreground/50">
            <span className="text-primary">[user@earamburo ~]</span>
            <span className="ml-2 text-foreground/40">$ whoami</span>
          </div>

          <div>
            <p className="font-mono text-sm text-secondary mb-1">&gt;_</p>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight glitch-text"
              data-text={TYPEWRITER_TEXT}
            >
              <span className="text-foreground">{typed}</span>
              <span
                className="text-primary ml-0.5"
                style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
              >|</span>
            </h1>
          </div>

          <div className="font-mono text-sm text-foreground/50">
            <span className="text-foreground/30">//</span>
            <span className="ml-2">Fullstack Engineer <span className="text-secondary">&amp;</span> UI/UX Designer</span>
          </div>

          <p className="text-foreground/60 leading-relaxed max-w-lg">
            I build fast, accessible, and visually striking digital products — from enterprise platforms to interactive 3D experiences. 6+ years shipping at NCR Voyix, Inspire Brands, and GoodR.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 hover:shadow-glow-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
            >
              View Projects
              <ExternalLink className="h-4 w-4" />
            </button>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground/70 font-semibold rounded-lg hover:border-primary/60 hover:text-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Right: image-first project carousel ── */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hologram-panel rounded-2xl overflow-hidden border border-border/60">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-muted/40">
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-red/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <span className="font-mono text-xs text-foreground/35 ml-2 truncate">
                ~/projects/{current.title.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>

            {/* Full image — the star of the show */}
            <div className="relative h-80 overflow-hidden">
              <img
                key={activeIndex}
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover animate-fade-in"
              />

              {/* Dark scrim at bottom for text legibility */}
              <div className="absolute inset-0 bg-card/10" />
              <div className="absolute bottom-0 inset-x-0 h-2/3 bg-card/80" style={{ maskImage: 'linear-gradient(to top, black 60%, transparent)' }} />

              {current.featured && (
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-bold font-mono tracking-wide">
                  FEATURED
                </span>
              )}

              {/* Title + tags overlaid on image */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">{current.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {current.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-background/60 border border-border/60 text-foreground/70 rounded-full text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Minimal footer */}
            <div className="px-5 py-3 flex items-center justify-between border-t border-border/40">
              {current.liveUrl ? (
                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary/80 transition-colors duration-150"
                >
                  <span className="text-foreground/30">&gt;_</span> open project
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : <span />}
              <span className="font-mono text-xs text-foreground/30">
                {activeIndex + 1} / {projects.length}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-3 px-1">
            <div className="flex gap-1.5">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Project ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                    i === activeIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-foreground/30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {[{ fn: prev, label: 'Previous', Icon: ChevronLeft }, { fn: next, label: 'Next', Icon: ChevronRight }].map(({ fn, label, Icon }) => (
                <button
                  key={label}
                  onClick={fn}
                  aria-label={label}
                  className="w-7 h-7 flex items-center justify-center rounded-md border border-border/60 text-foreground/40 hover:border-primary/50 hover:text-primary transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
                >
                  <Icon className="h-3.5 w-3.5" />
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
