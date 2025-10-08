import { motion } from "framer-motion";
import "./Logika.css";

export default function Logika() {
  const items = [
    {
      title: "Educación Secundaria Obligatoria",
      place: "IES Campo de Calatrava",
      period: "2016 — 2020",
      details: "Bases generales, inicio del interés por la tecnología.",
    },
    {
      title: "Bachillerato Científico",
      place: "IES Campo de Calatrava (Miguelturra)",
      period: "2020 — 2022",
      details: "Itinerario científico, matemáticas, física e informática.",
    },
    {
      title: "Grado en Ingeniería Informática",
      place: "Universidad de Castilla‑La Mancha (Ciudad Real)",
      period: "2022 — Actualidad",
      details: "Desarrollo de software, estructuras de datos, web y gráficos.",
    },
  ];

  return (
    <section id="Logika" className="logika-section">
      <div className="logika-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="logika-header"
        >
          <span className="logika-chip">Planeta azul</span>
          <h2 className="logika-title">Logika — Formación</h2>
          <p className="logika-subtitle">
            Mi recorrido académico, de los fundamentos a la ingeniería.
          </p>
          <div className="logika-divider" />
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          <ul className="timeline-list">
            {items.map((it, idx) => (
              <motion.li
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.05 * idx }}
              >
                <div className="dot" />
                <div className="content">
                  <div className="period">{it.period}</div>
                  <h3 className="title">{it.title}</h3>
                  <div className="place">{it.place}</div>
                  <p className="details">{it.details}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Certificaciones y licencias */}
        <div className="certs">
          <h3 className="certs-title">Certificaciones y licencias</h3>
          <ul className="certs-list">
            <li className="cert-card">
              <div className="cert-dot" aria-hidden="true" />
              <div className="cert-content">
                <div className="cert-title">FCE (B2) — Cambridge</div>
                <div className="cert-meta">Desde septiembre de 2020</div>
              </div>
            </li>
            <li className="cert-card">
              <div className="cert-dot" aria-hidden="true" />
              <div className="cert-content">
                <div className="cert-title">Permiso B — DGT</div>
                <div className="cert-meta">Desde abril de 2025</div>
              </div>
            </li>
            <li className="cert-card">
              <div className="cert-dot" aria-hidden="true" />
              <div className="cert-content">
                <div className="cert-title">Getting Started with Artificial Intelligence — IBM</div>
                <div className="cert-meta">Desde septiembre de 2025</div>
                <div className="cert-actions">
                  <a className="cred-btn" href="https://www.credly.com/badges/f507f3d3-aa8d-4125-8de9-5b59c9d8f30b/linked_in_profile" target="_blank" rel="noopener noreferrer">Ver credencial</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="logika-aurora" aria-hidden="true" />
      <div className="logika-stars" aria-hidden="true" />
    </section>
  );
}

