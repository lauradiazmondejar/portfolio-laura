import { motion } from "framer-motion";
import "./Cirrus.css";

const skills = [
  { id: "adaptabilidad", name: "Adaptabilidad y aprendizaje agil", img: "sokoban.png" },
  { id: "comunicacion", name: "Comunicacion asertiva", img: "victini.png" },
  { id: "analitico", name: "Pensamiento analitico", img: "remotetypes.png" },
  { id: "tiempo", name: "Gestion del tiempo", img: "alfatrip.png" },
  { id: "equipo", name: "Trabajo en equipo", img: "geoparque.png" },
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
          <h2 className="cirrus-title">Cirrus - Soft Skills</h2>
          <p className="cirrus-subtitle">Un cielo de habilidades: cada estrella representa una fortaleza.</p>
          <div className="cirrus-divider" />
        </motion.div>

        <div className="cirrus-grid">
          {skills.map((s, i) => (
            <motion.article
              key={s.id}
              className="cirrus-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
            >
              <div className="cirrus-card-media">
                <img
                  src={`${import.meta.env.BASE_URL}proyectos/${s.img}`}
                  alt={s.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="cirrus-card-body">
                <h3>{s.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="cirrus-aurora" aria-hidden="true" />
      <div className="cirrus-stars" aria-hidden="true" />
    </section>
  );
}
