import { motion } from "framer-motion";
import "./Cirrus.css";

const skills = [
  { name: "Comunicación", value: 75 },
  { name: "Trabajo en equipo", value: 80 },
  { name: "Organización", value: 90 },
  { name: "Responsabilidad", value: 95 },
  { name: "Resolución de problemas", value: 85 },
  { name: "Aprendizaje rápido", value: 90 },
];

export default function Cirrus() {
  return (
    <section id="Cirrus" className="cirrus-section">
      <div className="cirrus-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="cirrus-header"
        >
          <span className="cirrus-chip">Planeta blanco</span>
          <h2 className="cirrus-title">Cirrus — Soft Skills</h2>
          <p className="cirrus-subtitle">Aquí te muestro mis habilidades interpersonales.</p>
          <div className="cirrus-divider" />
        </motion.div>

        <div className="cirrus-grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-row"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="skill-head">
                <span className="skill-name">{s.name}</span>
                <span className="skill-value">{s.value}%</span>
              </div>
              <div className="bar">
                <div className="bar-fill" style={{ width: `${s.value}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="cirrus-aurora" aria-hidden="true" />
      <div className="cirrus-stars" aria-hidden="true" />
    </section>
  );
}

