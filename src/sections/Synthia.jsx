import { motion } from "framer-motion";
import "./Synthia.css";


const proyectos = [
  { id: "sokoban", title: "Sokoban", label: "Sokoban", href: "https://github.com/lauradiazmondejar/sokoban-inteligentes.git", github: "", img: "sokoban.png", top: "22%", left: "18%", labelDx: 12 },
  { id: "victini", title: "Victini", label: "IPOkemon", href: "https://github.com/lauradiazmondejar/VictiniLDM.git", github: "", img: "victini.png", top: "22%", left: "72%", labelDx: -4 },
  { id: "remotetypes", title: "RemoteTypes", label: "Remotetypes", href: "https://github.com/lauradiazmondejar/LAURA-DIAZ-REMOTETYPES.git", github: "", img: "remotetypes.png", top: "48%", left: "50%", labelDx: 0 },
  { id: "alfatrip", title: "AlfaTrip", label: "Alfatrip", href: "https://github.com/lauradiazmondejar/isi-alfatrip.git", github: "", img: "alfatrip.png", top: "70%", left: "28%", labelDx: 8 },
  { id: "geoparque", title: "Geoparque", label: "Geoparque ESIstencial", href: "https://github.com/lauradiazmondejar/geoparque_esistencial.git", github: "", img: "geoparque.png", top: "72%", left: "78%", labelDx: 12 },
];

export default function Synthia() {
  return (
    <section id="Synthia" className="synthia-section">
      <div className="synthia-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="synthia-header"
        >
          <span className="synthia-chip">Planeta violeta</span>
          <h2 className="synthia-title">Synthia — Proyectos de la carrera</h2>
          <p className="synthia-subtitle">Un cielo de proyectos: cada estrella enlaza a un repositorio</p>
          <div className="synthia-divider" />
        </motion.div>

        <div className="synthia-sky">
          {proyectos.map((p, i) => {
            const link = p.href && p.href !== "" && p.href !== "#" ? p.href : (p.github && p.github !== "" ? p.github : null);

            return (
              <div
                key={p.id}
                className="synthia-star-wrap"
                data-id={p.id}
                style={{ top: p.top, left: p.left }}
                title={p.label || p.title}
              >
                {link ? (
                  <a
                    className="synthia-star-hit"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.label || p.title}
                    title={p.label || p.title}
                  >
                    <motion.img
                      key={`${p.id}-img`}
                      src={`${import.meta.env.BASE_URL}proyectos/${p.img}`}
                      alt={p.label || p.title}
                      className="synthia-star"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.05 * i }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.className = "synthia-star-fallback";
                        fallback.title = p.label || p.title;
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                  </a>
                ) : (
                  <motion.img
                    key={`${p.id}-img`}
                    src={`${import.meta.env.BASE_URL}proyectos/${p.img}`}
                    alt={p.label || p.title}
                    className="synthia-star"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className = "synthia-star-fallback";
                      fallback.title = p.label || p.title;
                      e.currentTarget.parentElement?.appendChild(fallback);
                    }}
                  />
                )}

                <div className="synthia-label-wrap" style={{ transform: `translateX(${p.labelDx || 0}px)` }}>
                  <span className="synthia-label">{p.label || p.title}</span>
                  {p.github && p.github !== "" ? (
                    <a
                      className="synthia-github"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`GitHub: ${p.title}`}
                      aria-label={`GitHub: ${p.title}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.4-1.26.72-1.55-2.57-.29-5.27-1.29-5.27-5.76 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.15 11.15 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.74.82 1.2 1.86 1.2 3.13 0 4.48-2.71 5.46-5.29 5.75.41.35.77 1.04.77 2.1v3.11c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}

          <div className="synthia-nebula" aria-hidden="true" />
          <div className="synthia-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}



