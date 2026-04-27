import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
}

export default function ContactModal({ onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd      = new FormData(e.currentTarget);
    const name    = fd.get('name')    as string;
    const email   = fd.get('email')   as string;
    const project = fd.get('project') as string;
    const message = fd.get('message') as string;
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body    = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nWhat I'm building:\n${project}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:edwin.aramburo1@gmail.com?subject=${subject}&body=${body}`;
  };

  return createPortal(
    <div
      className="cm-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div className="cm-panel">
        <div className="cm-head">
          <div>
            <p className="cm-eyebrow">Let's talk</p>
            <h2 className="cm-title">Start a project</h2>
          </div>
          <button className="cm-close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <form className="cm-form" onSubmit={handleSubmit} noValidate>
          <div className="cm-row">
            <label className="cm-field">
              <span className="cm-label">Your name</span>
              <input name="name" type="text" className="cm-input" placeholder="Jane Smith" required />
            </label>
            <label className="cm-field">
              <span className="cm-label">Email address</span>
              <input name="email" type="email" className="cm-input" placeholder="jane@company.com" required />
            </label>
          </div>
          <label className="cm-field">
            <span className="cm-label">What are you building?</span>
            <input
              name="project"
              type="text"
              className="cm-input"
              placeholder="e.g. E-commerce platform, mobile app, dashboard..."
              required
            />
          </label>
          <label className="cm-field">
            <span className="cm-label">Tell me more</span>
            <textarea
              name="message"
              className="cm-textarea"
              placeholder="Timeline, budget range, specific requirements..."
              rows={4}
              required
            />
          </label>
          <button type="submit" className="cm-submit">
            Send message
            <svg viewBox="0 0 16 16" fill="none" width="14" height="14" aria-hidden="true">
              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
