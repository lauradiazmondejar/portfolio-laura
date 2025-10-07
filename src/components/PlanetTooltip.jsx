import { motion } from "framer-motion";

export default function PlanetTooltip({ planet, position }) {
  if (!planet) return null;  // No mostrar si no hay planeta seleccionado

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "12px",
        backdropFilter: "blur(8px)",
        color: "#fff",
        padding: "10px 15px",
        pointerEvents: "none",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "0.95rem",
        whiteSpace: "nowrap",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
        zIndex: 20,
      }}
    >
      <strong style={{ color: planet.color }}>{planet.name}</strong>: {planet.info}
    </motion.div>
  );
}
