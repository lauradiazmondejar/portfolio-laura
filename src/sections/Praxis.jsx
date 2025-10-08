import { motion } from "framer-motion";
import "./Praxis.css";

export default function Praxis() {
  const items = [
    {
      period: "sep 2024 — may 2025",
      title: "Becaria de colaboración — Programas Mentor (Clásico y Profesional)",
      place: "Escuela Superior de Informática (UCLM) · Ciudad Real",
      details:
        "Apoyo a alumnado de nuevo ingreso, tutorías técnicas y acompañamiento académico.",
    },
    {
      period: "sep 2025 — nov 2025",
      title:
        "Prácticas extracurriculares de Ingeniería Informática — LULLAX SL",
      place:
        "Programa de Retención de Talento · Ciudad Real 2025",
      details:
        "Colaboración en desarrollo frontend, prototipado y soporte a producto.",
    },
  ];

  return (
    <section id="Praxis" className="praxis-section">
      <div className="praxis-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="praxis-header"
        >
          <span className="praxis-chip">Experiencia</span>
          <h2 className="praxis-title">Praxis — Línea del tiempo</h2>
          <p className="praxis-subtitle">Mi experiencia laboral reciente.</p>
          <div className="praxis-divider" />
        </motion.div>

        <div className="timeline-right">
          <div className="timeline-line-right" aria-hidden="true" />
          <ul className="timeline-list-right">
            {items.map((it, idx) => (
              <motion.li
                key={idx}
                className="timeline-item-right"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.06 * idx }}
              >
                <div className="dot-right" />
                <div className="content-right">
                  <div className="period">{it.period}</div>
                  <h3 className="title">{it.title}</h3>
                  <div className="place">{it.place}</div>
                  <p className="details">{it.details}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <div className="praxis-aurora" aria-hidden="true" />
      <div className="praxis-stars" aria-hidden="true" />
    </section>
  );
}

