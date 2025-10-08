import { useState, useEffect } from "react";
import Universo from "./components/Universe";
import { motion } from "framer-motion";
import Origina from "./sections/Origina";
import Logika from "./sections/Logika";

export default function App() {
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);

  const manejarClickPlaneta = (planeta) => {
    setPlanetaSeleccionado(planeta); // Actualiza el planeta seleccionado
  };

  useEffect(() => {
    if (planetaSeleccionado?.name) {
      const el = document.getElementById(planetaSeleccionado.name);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [planetaSeleccionado]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflowY: "auto" }}>
      {/* ðŸŒ™ Foto + bocadillo alineados a la izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: "30px",
          left: "40px",
          display: "flex",
          alignItems: "center",
          gap: "18px",
          zIndex: 10, // âœ¨ superpone sobre el universo
        }}
      >
        {/* ðŸª© Imagen redonda */}
        <motion.img
          src="/laura.jpeg"
          alt="Laura DÃ­az"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid #ffd6f6",
            boxShadow: "0 0 30px rgba(255, 214, 246, 0.4)",
            objectFit: "cover",
          }}
        />

        {/* ðŸ’¬ Bocadillo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "12px 22px",
            color: "#ffffff",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1rem",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            whiteSpace: "nowrap",
          }}
        >
          Bienvenido/a a mi portfolio:{" "}
          <span
            style={{
              color: "#ffd6f6",
              fontWeight: "500",
            }}
          >
            Sistema Lauralis
          </span>
        </motion.div>
      </motion.div>

      {/* ðŸŒŒ Universo detrÃ¡s */}
      <div style={{ width: "100%", height: "100vh", position: "absolute", top: 0, left: 0, overflow: "hidden" }}>
        <Universo onPlanetClick={manejarClickPlaneta} />
        {/* Fade inferior para suavizar la transición al contenido */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "120px",
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(11,13,23,0) 0%, rgba(11,13,23,0.65) 55%, rgba(11,13,23,1) 100%)",
          }}
        />
      </div>

      {/* InformaciÃ³n adicional de los planetas */}
      <div
        style={{
          /* Reducimos la separación superior y unificamos con un fade suave */
          padding: "120px 0 160px",
          marginTop: "100vh",
          background:
            "linear-gradient(180deg, rgba(11,13,23,0) 0%, rgba(11,13,23,0.8) 60%, rgba(11,13,23,1) 100%)",
        }}
      >
        <Origina />
        <Logika />
        {/* SecciÃ³n de los planetas */}
        <section id="OriginaOld" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Origina: Sobre mÃ­</h2>
          <p>InformaciÃ³n sobre el planeta Origina...</p>
        </section>

        <section id="LogikaOld" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Logika: FormaciÃ³n y pensamiento lÃ³gico</h2>
          <p>InformaciÃ³n sobre el planeta Logika...</p>
        </section>

        <section id="Kodia" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Kodia: Proyectos y cÃ³digo</h2>
          <p>InformaciÃ³n sobre el planeta Kodia...</p>
        </section>

        <section id="Praxis" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Praxis: Experiencia prÃ¡ctica</h2>
          <p>InformaciÃ³n sobre el planeta Praxis...</p>
        </section>

        <section id="Synthia" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Synthia: Creatividad y arte digital</h2>
          <p>InformaciÃ³n sobre el planeta Synthia...</p>
        </section>

        <section id="Nova" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Nova: ExploraciÃ³n y futuro</h2>
          <p>InformaciÃ³n sobre el planeta Nova...</p>
        </section>

        <section id="Cirrus" style={{ padding: "20px", backgroundColor: "#2c2f3b", borderRadius: "8px", marginBottom: "20px" }}>
          <h2>Cirrus: Espacio personal</h2>
          <p>InformaciÃ³n sobre el planeta Cirrus...</p>
        </section>
      </div>
    </div>
  );
}







