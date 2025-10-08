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
                Soy Laura Díaz Mondéjar (24/08/2004), de Miguelturra. Estudiante de último año
                del Grado en Ingeniería Informática en la Escuela Superior de Informática de
                Ciudad Real. Me apasiona crear interfaces vivas y cuidadas, donde diseño y
                código trabajan juntos.
                <br />
                <em className="origina-motto">En este planeta empieza todo: aquí arranca mi universo digital, el Sistema Lauralis.</em>
              </p>

              <div className="origina-contact">
                <a className="contact-link" href="mailto:lauradiazmondejar@gmail.com">lauradiazmondejar@gmail.com</a>
                <a className="contact-link" href="mailto:laura.diaz30@alu.uclm.es">laura.diaz30@alu.uclm.es</a>
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
                <a className="cv-btn" href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank" rel="noopener noreferrer">Ver CV</a>
              </div>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}laura-vertical.jpeg`}
              alt="Laura Díaz Mondéjar"
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

