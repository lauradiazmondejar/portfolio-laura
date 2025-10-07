import Universo from "./components/Universe";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* 🌙 Foto + bocadillo alineados a la izquierda */}
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
          zIndex: 10, // ✨ superpone sobre el universo
        }}
      >
        {/* 🪩 Imagen redonda */}
        <motion.img
          src="/laura.jpeg"
          alt="Laura Díaz"
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

        {/* 💬 Bocadillo */}
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

      {/* 🌌 Universo detrás */}
      <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
        <Universo />
      </div>
    </div>
  );
}
