import { motion } from "framer-motion";
import "./Synthia.css";

const proyectos = [
  {
    id: "sokoban",
    title: "Sokoban",
    description: "Implementación del juego Sokoban que consigue la secuencia de movimientos desde cualquier nivel válido del tablero hasta su solución empleando estrategias de búsqueda estudiadas en la asignatura Sistemas Inteligentes.",
    img: "sokoban.png",
    href: "https://github.com/lauradiazmondejar/sokoban-inteligentes.git",
    github: "https://github.com/lauradiazmondejar/sokoban-inteligentes.git",
    tech: ["Java", "Heurísticas", "Búsqueda", "VSCode"],
  },
  {
    id: "victini",
    title: "IPOkemon",
    description: "Aplicación de escritorio que permite intereactuar con un pokemon (Victini), permitiendo al usuario ver sus diferentes estados y acciones. Desarrollada para la asignatura de Interacción Persona-Ordenador II.",
    img: "victini.png",
    href: "https://github.com/lauradiazmondejar/VictiniLDM.git",
    github: "https://github.com/lauradiazmondejar/VictiniLDM.git",
    tech: ["C#", "Visual Studio", "UI"],
  },
  {
    id: "remotetypes",
    title: "RemoteTypes",
    description: "Servicio de almacenamiento para diferentes estructuras de datos: listas, conjuntos y diccionarios. El servicio realiza la persistencia de los objetos, permitiendo su acceso y modificación de manera interactiva. Desarrollado para la asignatura de Sistemas Distribuidos.",
    img: "remotetypes.png",
    href: "https://github.com/lauradiazmondejar/LAURA-DIAZ-REMOTETYPES.git",
    github: "https://github.com/lauradiazmondejar/LAURA-DIAZ-REMOTETYPES.git",
    tech: ["Python", "ZeroC Ice", "Kafka", "Docker", "VSCode", "Ubuntu"],
  },
  {
    id: "alfatrip",
    title: "AlfaTrip",
    description: "Plataforma web integral diseñada para planificar y gestionar viajes de forma eficiente, centralizando la búsqueda de vuelos, alojamientos y herramientas de navegación mediante la integración de APIs externas como Google Flights, Google Hotels y OpenStreetMap. Desarrollada en equipo para la asignatura de Integración de Sistemas Informáticos.",
    img: "alfatrip.png",
    href: "https://github.com/lauradiazmondejar/isi-alfatrip.git",
    github: "https://github.com/lauradiazmondejar/isi-alfatrip.git",
    tech: ["HTML", "CSS", "Python", "Microservicios", "APIs", "Docker", "PostgreSQL", "VSCode"],
  },
  {
    id: "geoparque",
    title: "Geoparque ESIstencial",
    description: "Prototipo de alta fidelidad que simula la navegación entre pantallas de una aplicación móvil educativa orientada a fomentar la exploración del entorno natural mediante rutas y participación ciudadana. Desarrollado para la asignatura de Interacción Persona-Ordenador II.",
    img: "geoparque.png",
    href: "https://github.com/lauradiazmondejar/geoparque_esistencial.git",
    github: "https://github.com/lauradiazmondejar/geoparque_esistencial.git",
    tech: ["Dart", "Flutter", "Android Studio"],
  },
  {
    id: "gsi",
    title: "Gmail Security Interface (GSI)",
    description: "Herramienta de concienciación en ciberseguridad diseñada para proteger a los usuarios frente al phishing y el robo de credenciales mediante un panel visual intuitivo. Integra funcionalidades para analizar correos de Gmail, escanear la seguridad de redes WiFi y evaluar la fortaleza de contraseñas. Desarrollada en equipo para la asignatura Gestión de Sistemas de la Información.",
    img: "placeholder.png",
    href: "https://github.com/Jsesm/gsi.git",
    github: "https://github.com/Jsesm/gsi.git",
    tech: ["Python", "Flask", "HTML", "CSS", "Ubuntu", "VSCode"],
  },
  {
    id: "iso24",
    title: "ISO24",
    description: "Proyecto del laboratorio de la asignatura Ingeniería del Software II. Aborda la planificación integral de un sistema, abarcando desde la elicitación de requisitos y definición de casos de uso para cinco roles de usuario hasta la estructuración en grupos funcionales, todo bajo una arquitectura cliente-servidor.",
    img: "placeholder.png",
    href: "https://github.com/aadriii03/-ISO24-ISO2-B04.git",
    github: "https://github.com/aadriii03/-ISO24-ISO2-B04.git",
    tech: ["Git", "Visual Paradigm", "Gestión de proyectos", "Análisis de requisitos", "Agile" ],
  },
  {
    id: "palettefit",
    title: "PaletteFit",
    description: "Aplicación móvil multimedia para ayudar a los usuarios a combinar su ropa mediante puntuaciones de análisis de color inteligente. La app permite subir fotos de prendas, almacenar las prendas en un armario virtual, asignar conjuntos en un calendario, ver estadisticas y gamificación en base a cumplir retos diarios. Desarrollada para la asignatura de Multimedia.",
    img: "placeholder.png",
    href: "https://github.com/lauradiazmondejar/PaletteFit-Multimedia.git",
    github: "https://github.com/lauradiazmondejar/PaletteFit-Multimedia.git",
    tech: ["Dart", "Flutter", "Android Studio"],
  },
  {
    id: "cve-2023-0386",
    title: "PoC CVE-2023-0386",
    description: "Prueba de Concepto (PoC) sobre la vulnerabilidad CVE-2023-0386 en el kernel de Linux (OverlayFS), logrando una escalada local de privilegios hasta obtener acceso root en una máquina Ubuntu 22.04. Trabajo para la asignatura de Seguridad en Sistemas Informáticos.",
    img: "placeholder.png",
    href: "#",
    github: "",
    tech: ["Linux", "Ubuntu", "Metasploit Framework"],
  },
  {
    id: "gramola",
    title: "Gramola",
    description: "Aplicación web Full-Stack que digitaliza la experiencia de una gramola moderna, permitiendo a los establecimientos (bares) registrarse y a los usuarios seleccionar y pagar por canciones. Integra autenticación, monetización y gestión de reproducción musical mediante APIs externas. Desarrollada para la asignatura de Tecnologías y Sistemas Web.",
    img: "placeholder.png",
    href: "https://github.com/lauradiazmondejar/Gramola.git",
    github: "https://github.com/lauradiazmondejar/Gramola.git",
    tech: ["Java", "Spring Boot", "TypeScript", "Angular","MySQL", "Selenium", "VSCode"],
  },
];

export default function Synthia() {
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

            return (
              <motion.article
                key={p.id}
                className="synthia-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
              >
                <div className="synthia-card-media">
                  <img
                    src={`${import.meta.env.BASE_URL}proyectos/${p.img}`}
                    alt={p.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
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
                      <a
                        className="synthia-btn primary"
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
    </section>
  );
}
