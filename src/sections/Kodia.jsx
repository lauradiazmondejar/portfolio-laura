import { motion } from "framer-motion";
import "./Kodia.css";

function TechItem({ name, logo }) {
  const iconClass = logo ? "kd-tech-icon has-logo" : "kd-tech-icon kd-tech-icon--fallback";
  return (
    <div className="kd-tech" title={name} data-tip={name} aria-label={name}>
      <div className={iconClass}>
        {logo ? (
          <img
            src={`${import.meta.env.BASE_URL}logos/${logo}`}
            alt={name}
            loading="lazy"
            onError={(e) => {
              const parent = e.currentTarget.parentElement;
              if (parent) parent.classList.add("kd-tech-icon--fallback");
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <span className="kd-tech-letter">{name?.[0] || "?"}</span>
      </div>
    </div>
  );
}

export default function Kodia() {
  const categories = [
    {
      title: "Lenguajes de programacion",
      items: [
        { name: "Java", logo: "java.png" },
        { name: "Python", logo: "python.png" },
        { name: "C" },
        { name: "C#" },
        { name: "JavaScript", logo: "javascript.png" },
        { name: "TypeScript" },
        { name: "Dart" },
      ],
    },
    {
      title: "Desarrollo web",
      items: [
        { name: "Angular" },
        { name: "Spring Boot" },
        { name: "HTML5", logo: "html.png" },
        { name: "CSS3", logo: "css.png" },
        { name: "WordPress" },
        { name: "APIs REST" },
        { name: "Microservicios" },
      ],
    },
    {
      title: "Desarrollo de aplicaciones",
      items: [
        { name: "Flutter" },
        { name: "React Native" },
        { name: "Android Studio" },
      ],
    },
    {
      title: "Bases de datos",
      items: [
        { name: "MySQL" },
        { name: "Oracle SQL" },
        { name: "PostgreSQL" },
      ],
    },
    {
      title: "Herramientas de desarrollo",
      items: [
        { name: "Git", logo: "git.png" },
        { name: "Docker" },
        { name: "Visual Studio", logo: "visualstudio.png" },
        { name: "VS Code", logo: "visualstudiocode.png" },
        { name: "Eclipse", logo: "eclipse.png" },
        { name: "Visual Paradigm" },
      ],
    },
    {
      title: "Sistemas, redes y seguridad",
      items: [
        { name: "Metasploit Framework" },
        { name: "Cisco Packet Tracer" },
        { name: "Oracle VirtualBox" },
      ],
    },
    {
      title: "Gestion de proyectos",
      items: [
        { name: "Microsoft Project" },
      ],
    },
  ];

  return (
    <section id="Kodia" className="kodia-section">
      <div className="kodia-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="kodia-header"
        >
          <span className="kodia-chip">Planeta verde</span>
          <h2 className="kodia-title">Kodia - Lenguajes y tecnologias</h2>
          <p className="kodia-subtitle">Stacks agrupados por foco: backend, frontend, apps, datos y herramientas.</p>
          <div className="kodia-divider" />
        </motion.div>

        <div className="kodia-grid">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="kodia-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.03 * idx }}
            >
              <h3>{cat.title}</h3>
              <div className="kd-tech-list">
                {cat.items.map((item) => (
                  <TechItem key={item.name} name={item.name} logo={item.logo} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="kodia-aurora" aria-hidden="true" />
      <div className="kodia-stars" aria-hidden="true" />
    </section>
  );
}
