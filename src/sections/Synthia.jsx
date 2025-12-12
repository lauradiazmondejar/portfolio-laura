import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Synthia.css";

const proyectos = [
  {
    id: "sokoban",
    title: "Sokoban",
    description:
      "Implementacion del juego Sokoban que calcula la secuencia de movimientos desde cualquier nivel valido usando estrategias de busqueda de Sistemas Inteligentes.",
    img: "sokoban.png",
    images: ["sokoban/NIVEL.png", "sokoban/BFS.png", "sokoban/AESTRELLA.png"],
    href: "https://github.com/lauradiazmondejar/sokoban-inteligentes.git",
    github: "https://github.com/lauradiazmondejar/sokoban-inteligentes.git",
    tech: ["Java", "Heuristicas", "Busqueda", "VSCode"],
  },
  {
    id: "victini",
    title: "IPOkemon",
    description:
      "Aplicacion de escritorio para interactuar con Victini, mostrando estados y acciones. Proyecto de Interaccion Persona-Ordenador II.",
    img: "victini.png",
    videos: ["IPOkemon/VictiniLDM.mp4"],
    href: "https://github.com/lauradiazmondejar/VictiniLDM.git",
    github: "https://github.com/lauradiazmondejar/VictiniLDM.git",
    tech: ["C#", "Visual Studio", "UI"],
  },
  {
    id: "remotetypes",
    title: "RemoteTypes",
    description:
      "Servicio para listas, conjuntos y diccionarios con persistencia y acceso interactivo. Trabajo de Sistemas Distribuidos.",
    img: "remotetypes.png",
    href: "https://github.com/lauradiazmondejar/LAURA-DIAZ-REMOTETYPES.git",
    github: "https://github.com/lauradiazmondejar/LAURA-DIAZ-REMOTETYPES.git",
    tech: ["Python", "ZeroC Ice", "Kafka", "Docker", "VSCode", "Ubuntu"],
  },
  {
    id: "alfatrip",
    title: "AlfaTrip",
    description:
      "Plataforma web para planificar viajes integrando APIs (Flights, Hotels, OpenStreetMap). Proyecto en equipo para Integracion de Sistemas Informaticos.",
    img: "alfatrip.png",
    images: [
      "alfatrip/alfatrip1.png",
      "alfatrip/alfatrip2.png",
      "alfatrip/alfatrip3.png",
      "alfatrip/alfatrip4.png",
      "alfatrip/alfatrip5.png",
      "alfatrip/alfatrip6.png",
      "alfatrip/alfatrip7.png",
      "alfatrip/alfatrip8.png",
    ],
    href: "https://github.com/lauradiazmondejar/isi-alfatrip.git",
    github: "https://github.com/lauradiazmondejar/isi-alfatrip.git",
    tech: ["HTML", "CSS", "Python", "Microservicios", "APIs", "Docker", "PostgreSQL", "VSCode"],
  },
  {
    id: "geoparque",
    title: "Geoparque ESIstencial",
    description:
      "Prototipo de alta fidelidad para una app educativa con rutas y participacion ciudadana. Proyecto de Interaccion Persona-Ordenador II.",
    img: "geoparque.png",
    videos: ["geoparque_esistencial/app.mp4"],
    href: "https://github.com/lauradiazmondejar/geoparque_esistencial.git",
    github: "https://github.com/lauradiazmondejar/geoparque_esistencial.git",
    tech: ["Dart", "Flutter", "Android Studio"],
  },
  {
    id: "gsi",
    title: "Gmail Security Interface (GSI)",
    description:
      "Herramienta de concienciacion en ciberseguridad para proteger frente a phishing y robo de credenciales. Analiza correos, redes WiFi y fortalece contrasenas.",
    images: ["GSI/gsi1.png", "GSI/gsi2.png", "GSI/gsi3.png", "GSI/gsi4.png", "GSI/gsi5.png", "GSI/gsi6.png", "GSI/gsi7.png", "GSI/gsi8.png"],
    href: "https://github.com/Jsesm/gsi.git",
    github: "https://github.com/Jsesm/gsi.git",
    tech: ["Python", "Flask", "HTML", "CSS", "Ubuntu", "VSCode"],
  },
  {
    id: "iso24",
    title: "ISO24",
    description:
      "Proyecto de Ingenieria del Software II: planificacion, requisitos, casos de uso y arquitectura cliente-servidor para cinco roles.",
    img: "placeholder.png",
    href: "https://github.com/aadriii03/-ISO24-ISO2-B04.git",
    github: "https://github.com/aadriii03/-ISO24-ISO2-B04.git",
    tech: ["Git", "Visual Paradigm", "Gestion de proyectos", "Analisis de requisitos", "Agile"],
  },
  {
    id: "palettefit",
    title: "PaletteFit",
    description:
      "App movil multimedia para combinar ropa con analisis de color. Armario virtual, calendario de conjuntos, estadisticas y gamificacion.",
    img: "placeholder.png",
    href: "https://github.com/lauradiazmondejar/PaletteFit-Multimedia.git",
    github: "https://github.com/lauradiazmondejar/PaletteFit-Multimedia.git",
    tech: ["Dart", "Flutter", "Android Studio"],
  },
  {
    id: "cve-2023-0386",
    title: "PoC CVE-2023-0386",
    description:
      "Escalada local de privilegios en Ubuntu 22.04 explotando OverlayFS (CVE-2023-0386). Trabajo de Seguridad en Sistemas Informaticos.",
    img: "placeholder.png",
    href: "#",
    github: "",
    tech: ["Linux", "Ubuntu", "Metasploit Framework"],
  },
  {
    id: "gramola",
    title: "Gramola",
    description:
      "Aplicacion web full-stack para que los usuarios paguen y reproduzcan canciones en bares. Integra autenticacion, monetizacion y APIs musicales.",
    img: "placeholder.png",
    href: "",
    github: "",
    tech: ["Java", "Spring Boot", "TypeScript", "Angular", "MySQL", "Selenium", "VSCode"],
  },
];

export default function Synthia() {
  const videoRefs = useRef({});
  const lightboxVideoRef = useRef(null);
  const videoTimesRef = useRef({});
  const [slides, setSlides] = useState(() => {
    const initial = {};
    proyectos.forEach((p) => {
      if (Array.isArray(p.images) && p.images.length > 0) initial[p.id] = 0;
      if (Array.isArray(p.videos) && p.videos.length > 0) initial[p.id] = 0;
    });
    return initial;
  });

  const [fullscreen, setFullscreen] = useState(null);
  const getVideoTime = (id) => videoTimesRef.current[id] ?? 0;
  const setVideoTime = (id, time) => {
    videoTimesRef.current[id] = time;
  };

  const changeSlide = (id, total, direction) => {
    setSlides((prev) => {
      const current = prev[id] ?? 0;
      const next = (current + direction + total) % total;
      return { ...prev, [id]: next };
    });
    setFullscreen((prev) => {
      if (!prev || prev.id !== id) return prev;
      const next = (prev.index + direction + total) % total;
      return { ...prev, index: next };
    });
  };

  const openVideoFullscreen = (projectId, index) => {
    const vid = videoRefs.current[projectId];
    const currentTime = vid ? vid.currentTime : 0;
    if (vid) vid.pause();
    setFullscreen({ id: projectId, index, kind: "video", startTime: currentTime });
  };

  const closeFullscreen = () => {
    if (fullscreen?.kind === "video") {
      const lbVid = lightboxVideoRef.current;
      const time = lbVid ? lbVid.currentTime : 0;
      setVideoTime(fullscreen.id, time);
      const cardVid = videoRefs.current[fullscreen.id];
      if (cardVid) {
        cardVid.currentTime = time;
        cardVid.pause();
      }
    }
    setFullscreen(null);
  };

  return (
    <section id="Synthia" className="synthia-section">
      <div className="synthia-veil" aria-hidden="true" />
      <div className="synthia-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="synthia-header"
        >
          <span className="synthia-chip">Planeta violeta</span>
          <h2 className="synthia-title">Synthia - Proyectos de la carrera</h2>
          <p className="synthia-subtitle">Capturas, resumen y stack en una grilla pensada para explorar.</p>
          <div className="synthia-divider" />
        </motion.div>

        <div className="synthia-grid">
          {proyectos.map((p, index) => {
            const repoLink = p.href || p.github || "#";
            const hasCarousel = Array.isArray(p.images) && p.images.length > 0;
            const hasVideo = Array.isArray(p.videos) && p.videos.length > 0;
            const totalItems = hasCarousel ? p.images.length : hasVideo ? p.videos.length : 1;
            const activeIndex = (slides[p.id] ?? 0) % totalItems;
            const mediaSrc = hasCarousel
              ? `${import.meta.env.BASE_URL}proyectos/${p.images[activeIndex]}`
              : hasVideo
              ? `${import.meta.env.BASE_URL}proyectos/${p.videos[activeIndex]}`
              : `${import.meta.env.BASE_URL}proyectos/${p.img}`;

            return (
              <motion.article
                key={p.id}
                className="synthia-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
              >
                <div className={`synthia-card-media ${hasCarousel ? "has-carousel" : ""}`}>
                  {hasVideo ? (
                    <video
                      controls
                      src={mediaSrc}
                      playsInline
                      onLoadedMetadata={(e) => {
                        const t = getVideoTime(p.id);
                        if (t) e.currentTarget.currentTime = t;
                      }}
                      onTimeUpdate={(e) => {
                        setVideoTime(p.id, e.currentTarget.currentTime);
                      }}
                      ref={(el) => {
                        if (el) videoRefs.current[p.id] = el;
                      }}
                    />
                  ) : (
                    <img
                      src={mediaSrc}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}

                  {hasCarousel ? (
                    <>
                      <button
                        type="button"
                        className="synthia-nav prev"
                        aria-label={`Anterior ${p.title}`}
                        onClick={() => changeSlide(p.id, totalItems, -1)}
                      >
                        {"‹"}
                      </button>
                      <button
                        type="button"
                        className="synthia-nav next"
                        aria-label={`Siguiente ${p.title}`}
                        onClick={() => changeSlide(p.id, totalItems, 1)}
                      >
                        {"›"}
                      </button>
                      <div className="synthia-dots" aria-hidden="true">
                        {p.images.map((_, dotIdx) => (
                          <span key={dotIdx} className={`synthia-dot ${dotIdx === activeIndex ? "active" : ""}`} />
                        ))}
                      </div>
                      <button
                        type="button"
                        className="synthia-fullscreen"
                        aria-label={`Maximizar ${p.title}`}
                        onClick={() => setFullscreen({ id: p.id, index: activeIndex, kind: "image" })}
                      >
                        {"⤢"}
                      </button>
                    </>
                  ) : null}

                  {!hasCarousel && hasVideo ? (
                    <button
                      type="button"
                      className="synthia-fullscreen"
                      aria-label={`Maximizar ${p.title}`}
                      onClick={() => openVideoFullscreen(p.id, activeIndex)}
                    >
                      {"⤢"}
                    </button>
                  ) : null}

                  <span className="synthia-pill">Proyecto {index + 1}</span>
                </div>

                <div className="synthia-card-body">
                  <div className="synthia-card-header">
                    <h3>{p.title}</h3>
                    {p.github ? (
                      <a
                        className="synthia-github-link"
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub: ${p.title}`}
                        title={`GitHub: ${p.title}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56v-2c-3.22.7-3.9-1.39-3.9-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.73 1.26 3.4.96.11-.75.4-1.26.72-1.55-2.57-.29-5.27-1.29-5.27-5.76 0-1.27.46-2.31 1.2-3.13-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.2a11.15 11.15 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.59.23 2.77.11 3.06.74.82 1.2 1.86 1.2 3.13 0 4.48-2.71 5.46-5.29 5.75.41.35.77 1.04.77 2.1v3.11c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>

                  <p className="synthia-desc">{p.description}</p>

                  <div className="synthia-tags">
                    {p.tech.map((tag) => (
                      <span key={tag} className="synthia-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {repoLink ? (
                    <div className="synthia-actions">
                      <a className="synthia-btn primary" href={repoLink} target="_blank" rel="noopener noreferrer">
                        Ver proyecto
                      </a>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {fullscreen ? (
        <div className="synthia-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            className="synthia-lightbox-close"
            aria-label="Cerrar"
            onClick={closeFullscreen}
          >
            ×
          </button>

          {(() => {
            const current = proyectos.find((p) => p.id === fullscreen.id);
            if (!current) return null;

            // Videos
            if (fullscreen.kind === "video" && current.videos && current.videos.length) {
              const total = current.videos.length;
              const idx = fullscreen.index ?? 0;
              const src = `${import.meta.env.BASE_URL}proyectos/${current.videos[idx]}`;

              return (
                <div className="synthia-lightbox-body">
                  <video
                    controls
                    src={src}
                    ref={lightboxVideoRef}
                    onLoadedMetadata={(e) => {
                      const start = fullscreen.startTime ?? getVideoTime(current.id) ?? 0;
                      if (start) e.currentTarget.currentTime = start;
                    }}
                    onTimeUpdate={(e) => {
                      setVideoTime(current.id, e.currentTarget.currentTime);
                    }}
                  />
                  {total > 1 ? (
                    <>
                      <div className="synthia-lightbox-dots">
                        {current.videos.map((_, i) => (
                          <button
                            key={i}
                            className={`synthia-dot ${i === idx ? "active" : ""}`}
                            aria-label={`Ver video ${i + 1}`}
                            onClick={() => {
                              setFullscreen({ id: current.id, index: i, kind: "video" });
                              setSlides((prev) => ({ ...prev, [current.id]: i }));
                            }}
                          />
                        ))}
                      </div>
                      <button
                        type="button"
                        className="synthia-lightbox-nav prev"
                        aria-label="Anterior"
                        onClick={() => changeSlide(current.id, total, -1)}
                      >
                        {"‹"}
                      </button>
                      <button
                        type="button"
                        className="synthia-lightbox-nav next"
                        aria-label="Siguiente"
                        onClick={() => changeSlide(current.id, total, 1)}
                      >
                        {"›"}
                      </button>
                    </>
                  ) : null}
                </div>
              );
            }

            // Imagenes
            if (current.images && current.images.length) {
              const src = `${import.meta.env.BASE_URL}proyectos/${current.images[fullscreen.index]}`;

              return (
                <div className="synthia-lightbox-body">
                  <img src={src} alt={current.title} />
                  <div className="synthia-lightbox-dots">
                    {current.images.map((_, i) => (
                      <button
                        key={i}
                        className={`synthia-dot ${i === fullscreen.index ? "active" : ""}`}
                        aria-label={`Ver imagen ${i + 1}`}
                        onClick={() => {
                          setFullscreen({ id: current.id, index: i, kind: "image" });
                          setSlides((prev) => ({ ...prev, [current.id]: i }));
                        }}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    className="synthia-lightbox-nav prev"
                    aria-label="Anterior"
                    onClick={() => changeSlide(current.id, current.images.length, -1)}
                  >
                    {"‹"}
                  </button>
                  <button
                    type="button"
                    className="synthia-lightbox-nav next"
                    aria-label="Siguiente"
                    onClick={() => changeSlide(current.id, current.images.length, 1)}
                  >
                    {"›"}
                  </button>
                </div>
              );
            }

            return null;
          })()}
        </div>
      ) : null}
    </section>
  );
}
