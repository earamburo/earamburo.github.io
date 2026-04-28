import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ContactModal from './ContactModal';

export default function ContactV2() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
    <section id="contact" className="contact-section">
      <div className="contact-inner reveal" ref={ref}>
        <div className="sec-tag" style={{ display: 'inline-flex', marginBottom: '24px' }}>
          Let's Talk
        </div>
        <h2 className="contact-head">
          Let's Build<br />Something
        </h2>
        <p className="contact-sub">
          Open to full-time roles, freelance projects, and interesting collaborations.
          Reach out — I reply fast.
        </p>
        <div className="contact-links">
          <button className="btn-primary" onClick={() => setModalOpen(true)}>
            Get In Touch
          </button>
          <a
            href="https://linkedin.com/in/edwin-aramburo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/earamburo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>

    {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
