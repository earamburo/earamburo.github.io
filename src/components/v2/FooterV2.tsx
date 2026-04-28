export default function FooterV2() {
  return (
    <footer className="v2-footer">
      <div className="footer-inner">
        <p className="foot-copy">© {new Date().getFullYear()} Andres Aramburo</p>
        <div className="foot-links">
          <a href="mailto:edwin.aramburo1@gmail.com">Email</a>
          <a href="https://linkedin.com/in/edwin-aramburo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/Andres-Aramburo-Resume-SWE_2026.pdf" download>Resume</a>
        </div>
      </div>
    </footer>
  );
}
