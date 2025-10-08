import { motion } from "framer-motion";
import "./Praxis.css";

export default function Praxis() {
  const items = [
    {
      period: "sep 2024 — may 2025",
      title: "Becaria de colaboración — Escuela Superior de Informática (UCLM)",
      place: "Beca de colaboración en la gestión y desarrollo de los Programas Mentor Clásico y Mentor Profesional de la Escuela Superior de Informática de Ciudad Real.",
      details:
        "Mis funciones principales fueron la gestión de los programas, la organización de eventos y la comunicación con estudiantes y mentores.",
      skills: ["Microsoft Excel", "Gestión de programas"],
    },
    {
      period: "sep 2025 — nov 2025",
      title:
        "Estudiante en prácticas — LULLAX SL",
      place:
        "Prácticas extracurriculares del Grado en Ingeniería Informática.",
      details:
        "Fui beneficiaria del Programa de Retención de Talento Ciudad Real 2025. Realicé prácticas en LULLAX SL como estudiante en prácticas, ayudando a mejorar la página web de la empresa y optimizando los marketplaces en los que se encuentran sus productos.",
      skills: ["WordPress", "Bases de datos", "Marketplaces", "Control de versiones", "Comercio eletrónico"],
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
          <span className="praxis-chip">Planeta rojo</span>
          <h2 className="praxis-title">Praxis — Experiencia laboral</h2>
          <p className="praxis-subtitle">Mi experiencia laboral reciente.</p>
          <div className="praxis-divider" />
        </motion.div>

        <div className="timeline-left">
          <div className="timeline-line-left" aria-hidden="true" />
          <ul className="timeline-list-left">
            {items.map((it, idx) => (
              <motion.li
                key={idx}
                className="timeline-item-left"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.06 * idx }}
              >
                <div className="dot-left" />
                <div className="content-left">
                  <div className="period">{it.period}</div>
                  <h3 className="title">{it.title}</h3>
                  <div className="place">{it.place}</div>
                  <p className="details">{it.details}</p>
                  {it.skills && (
                    <ul className="tags" aria-label="Aptitudes">
                      {it.skills.map((s, si) => (
                        <li key={si} className="tag">{s}</li>
                      ))}
                    </ul>
                  )}
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

