import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactV2() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
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
          <a href="mailto:edwin.aramburo1@gmail.com" className="btn-primary">
            Get In Touch
          </a>
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
  );
}
