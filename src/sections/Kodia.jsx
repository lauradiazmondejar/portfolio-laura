import { motion } from "framer-motion";
import "./Kodia.css";

function Badge({ label, color, bg, title }) {
  return (
    <span className="kd-badge" title={title} style={{ color, backgroundColor: bg }}>
      {label}
    </span>
  );
}

function Tool({ name, children, href }) {
  const content = (
    <div className="kd-tool">
      <div className="icon">{children}</div>
      <div className="txt">{name}</div>
    </div>
  );
  if (href) {
    return (
      <a className="kd-tool-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
        {content}
      </a>
    );
  }
  return content;
}

export default function Kodia() {
  const projects = [
    {
      title: "Gestor de tareas (Java)",
      desc: "CLI simple con persistencia y pruebas.",
      link: "https://github.com/lauradiazmondejar",
    },
    {
      title: "AnÃ¡lisis de datos (Python)",
      desc: "Pandas + visualizaciÃ³n bÃ¡sica.",
      link: "https://github.com/lauradiazmondejar",
    },
    {
      title: "Miniâ€‘web (HTML/CSS/JS)",
      desc: "Landing responsive con interacciones.",
      link: "https://github.com/lauradiazmondejar",
    },
  ];

  return (
    <section id="Kodia" className="kodia-section">
      <div className="kodia-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="kodia-header"
        >
          <span className="kodia-chip">Código</span>
          <h2 className="kodia-title">Kodia — Desarrollo</h2>
          <p className="kodia-subtitle">Lenguajes de programación, lenguajes de marcas y entornos.</p>
          <div className="kodia-divider" />
        </motion.div>

        <div className="kodia-grid">
          <motion.div
            className="kodia-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h3>Lenguajes de programación</h3>
            <div className="kd-badges">
              <Badge label="Java" color="#f5f5f5" bg="rgba(244,68,62,0.18)" title="Java" />
              <Badge label="Python" color="#f5f5f5" bg="rgba(53,114,165,0.22)" title="Python" />
              <Badge label="SQL" color="#0b0d17" bg="rgba(0,200,215,0.65)" title="SQL" />
              <Badge label="JS" color="#0b0d17" bg="rgba(247,223,30,0.7)" title="JavaScript" />
            </div>
          </motion.div>

          <motion.div
            className="kodia-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h3>Lenguajes de marcas</h3>
            <div className="kd-badges">
              <Badge label="HTML" color="#f5f5f5" bg="rgba(227,76,38,0.28)" title="HTML5" />
              <Badge label="CSS" color="#f5f5f5" bg="rgba(38,77,228,0.28)" title="CSS3" />
            </div>
          </motion.div>

          <motion.div
            className="kodia-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h3>Entornos de desarrollo y control de versiones</h3>
            <div className="kd-tools">
              <Tool name="VS Code" href="https://code.visualstudio.com/">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
                  <path fill="#23a6f2" d="M23 2.5v19l-7.5 2-9.6-8.1-3.4 3.1-2.1-2.1 4.7-4.2L.4 6.9 2.5 4.8l3.4 3.1L15.5 0 23 2.5z"/>
                </svg>
              </Tool>
              <Tool name="GitHub" href="https://github.com/lauradiazmondejar">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.4-1.26.72-1.55-2.57-.29-5.27-1.29-5.27-5.76 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.15 11.15 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.74.82 1.2 1.86 1.2 3.13 0 4.48-2.71 5.46-5.29 5.75.41.35.77 1.04.77 2.1v3.11c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
                </svg>
              </Tool>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="kodia-aurora" aria-hidden="true" />
      <div className="kodia-stars" aria-hidden="true" />
    </section>
  );
}






