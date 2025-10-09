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
          <span className="kodia-chip">Planeta verde</span>
          <h2 className="kodia-title">Kodia — Lenguajes y tecnologías</h2>
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
            <div className="kd-icons">
              <span className="kd-icon" data-tip="Java"><img src={`${import.meta.env.BASE_URL}logos/java.png`} alt="Java" /></span>
              <span className="kd-icon" data-tip="Python"><img src={`${import.meta.env.BASE_URL}logos/python.png`} alt="Python" /></span>
              <span className="kd-icon" data-tip="SQL"><img src={`${import.meta.env.BASE_URL}logos/sql.png`} alt="SQL" /></span>
              <span className="kd-icon" data-tip="JavaScript"><img src={`${import.meta.env.BASE_URL}logos/javascript.png`} alt="JavaScript" /></span>
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
            <div className="kd-icons">
              <span className="kd-icon" data-tip="HTML"><img src={`${import.meta.env.BASE_URL}logos/html.png`} alt="HTML" /></span>
              <span className="kd-icon" data-tip="CSS"><img src={`${import.meta.env.BASE_URL}logos/css.png`} alt="CSS" /></span>
            </div>
          </motion.div>

          <motion.div
            className="kodia-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h3>Entornos y control de versiones</h3>
            <div className="kd-icons">
              <a className="kd-icon" data-tip="VS Code" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" aria-label="VS Code">
                <img src={`${import.meta.env.BASE_URL}logos/visualstudiocode.png`} alt="VS Code" />
              </a>
              <a className="kd-icon" data-tip="GitHub" href="https://github.com/lauradiazmondejar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={`${import.meta.env.BASE_URL}logos/github.png`} alt="GitHub" />
              </a>
              <span className="kd-icon" data-tip="Git"><img src={`${import.meta.env.BASE_URL}logos/git.png`} alt="Git" /></span>
              <span className="kd-icon" data-tip="Eclipse"><img src={`${import.meta.env.BASE_URL}logos/eclipse.png`} alt="Eclipse" /></span>
              <span className="kd-icon" data-tip="MySQL Workbench"><img src={`${import.meta.env.BASE_URL}logos/workbench.png`} alt="MySQL Workbench" /></span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="kodia-aurora" aria-hidden="true" />
      <div className="kodia-stars" aria-hidden="true" />
    </section>
  );
}























