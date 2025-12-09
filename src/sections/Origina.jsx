import { motion } from "framer-motion";
import "./Origina.css";

export default function Origina() {
  return (
    <section id="Origina" className="origina-section">
      <div className="origina-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="origina-header"
        >
          <span className="origina-chip">Planeta central</span>
          <div className="origina-divider" />

          <div className="origina-intro">
            <div className="origina-text">
              <h2 className="origina-title">Origina — Sobre mí</h2>
              <p className="origina-subtitle">
                Soy Laura Díaz Mondéjar, de Miguelturra. Estudiante de último año
                del Grado en Ingeniería Informática en la Escuela Superior de Informática de
                Ciudad Real. Pertenezco a la intensificación en Tecnologías de la Información.

                <br />
                Mi pasión por la tecnología ha guiado mi formación como ingeniera. Tengo interés en el ciclo completo del desarrollo: desde la creatividad del Frontend y la solidez del Backend, hasta la protección crítica de la Ciberseguridad. Mi objetivo es aportar no solo mis conocimientos técnicos, sino también mi energía, compromiso y capacidad de superación. 

                <br />
                <em className="origina-motto">En este planeta empieza todo: aquí arranca mi universo digital, el Sistema Lauralis.</em>
              </p>

              <div className="origina-contact">
                <a className="cv-btn" href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">CV</a>
                <a className="contact-link" href="mailto:laura.diaz30@alu.uclm.es" aria-label="Enviar correo a laura.diaz30@alu.uclm.es">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z"/>
                  </svg>
                  <span>laura.diaz30@alu.uclm.es</span>
                </a>
                <a
                  className="linkedin-btn"
                  href="https://www.linkedin.com/in/laura-diaz-mondejar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Laura"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.6c0-1.82-.03-4.17-2.54-4.17-2.54 0-2.93 1.98-2.93 4.03V24h-5V8z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  className="github-btn"
                  href="https://github.com/lauradiazmondejar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Laura"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.4-1.26.72-1.55-2.57-.29-5.27-1.29-5.27-5.76 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.15 11.15 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.74.82 1.2 1.86 1.2 3.13 0 4.48-2.71 5.46-5.29 5.75.41.35.77 1.04.77 2.1v3.11c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}laura-vertical.jpeg`}
              alt="Laura D�az Mond�jar"
              className="origina-photo"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <div className="origina-aurora" aria-hidden="true" />
      <div className="origina-stars" aria-hidden="true" />
      <div className="origina-glow" aria-hidden="true" />
    </section>
  );
}
