import { useState, useEffect } from "react";
import Universo from "./components/Universe";
import { motion } from "framer-motion";
import Origina from "./sections/Origina";
import Logika from "./sections/Logika";
import Praxis from "./sections/Praxis";
import Kodia from "./sections/Kodia";
import Synthia from "./sections/Synthia";
import Cirrus from "./sections/Cirrus";
import Footer from "./sections/Footer";
import "./Hero.css";

export default function App() {
  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);

  const manejarClickPlaneta = (planeta) => {
    // Guardamos el planeta y forzamos el scroll inmediato
    setPlanetaSeleccionado(planeta);
    if (planeta?.name) {
      const el = document.getElementById(planeta.name);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };


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
        <motion.img className="hero-avatar" src={`${import.meta.env.BASE_URL}laura.jpeg`} alt="Laura D��az" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} />

        {/* ðŸ’¬ Bocadillo */}
        <motion.div className="hero-bubble" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
          Bienvenido/a a {" "}
          <span
            style={{
              color: "#ffd6f6",
              fontWeight: "500",
            }}
          >
            Sistema Lauralis
          </span>
          {". Pulsa un planeta:"}
        </motion.div>
      </motion.div>

      {/* ðŸŒŒ Universo detrÃ¡s */}
      <div className="universe-wrap">
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
          marginTop: "100dvh",
          background:
            "linear-gradient(180deg, rgba(11,13,23,0) 0%, rgba(11,13,23,0.8) 60%, rgba(11,13,23,1) 100%)",
        }}
      >
        <Origina />
        <Logika />
        <Praxis />
        <Kodia />
        <Synthia />
        <Cirrus />
        <Footer />
        {/* SecciÃ³n de los planetas */}
        

        

        

        

        

        

        
      </div>
    </div>
  );
}









