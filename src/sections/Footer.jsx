import "./Footer.css";

export default function Footer() {
  return (
    <footer id="Footer" className="footer-section">
      <div className="footer-content">
        <p className="footer-title">¡Que tengas un buen día! :)</p>
        <div className="footer-icons">
          <a
            className="footer-icon"
            href="mailto:lauradiazmondejar@gmail.com"
            aria-label="Enviar correo a Laura"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6.5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-11Zm2 0 6 4.5 6-4.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="footer-icon"
            href="https://github.com/lauradiazmondejar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Laura"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.4-1.26.72-1.55-2.57-.29-5.27-1.29-5.27-5.76 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.15 11.15 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.74.82 1.2 1.86 1.2 3.13 0 4.48-2.71 5.46-5.29 5.75.41.35.77 1.04.77 2.1v3.11c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a
            className="footer-icon"
            href="https://www.linkedin.com/in/lauradiazmondejar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Laura"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.25h3.98v11.5H3V9.25ZM10.5 9.25h3.8v1.76h.05c.53-.94 1.82-1.93 3.76-1.93 4.02 0 4.77 2.64 4.77 6.07v5.6h-3.98v-4.96c0-1.18-.02-2.7-1.64-2.7-1.64 0-1.89 1.28-1.89 2.6v5.06h-3.97V9.25Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
