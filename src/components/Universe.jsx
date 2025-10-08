import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import Planet from "./Planet";
import PlanetTooltip from "./PlanetTooltip";
import planets from "../data/planets.json";
import OrbitPath from "./OrbitPath";

export default function Universe({ onPlanetClick }) {
  const [seleccionado, setSeleccionado] = useState(null); // Estado para el planeta hoverado
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 }); // PosiciÃ³n del tooltip

  // Actualiza la posiciÃ³n del tooltip cuando el ratÃ³n se mueve
  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseMove={handleMouseMove}  // Capturamos el movimiento del ratÃ³n
    >
      <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[15, 10, 10]} intensity={1.4} color="#fffbe7" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#70a1ff" />
        <pointLight position={[0, 0, 0]} intensity={0.4} color="#ffffff" />

        {/* âœ¨ Fondo estrellado */}
        <Stars radius={100} depth={50} count={4000} factor={4} fade />

        {/* Mapea los planetas y pasa las funciones de hover */}
        {planets.map((p, i) => (
          <>
            <OrbitPath key={`orbit-${i}`} orbit={p.orbit} />
            <Planet
              key={`planet-${i}`}
              {...p}
              onClick={() => {
                setSeleccionado(p);
                if (onPlanetClick) onPlanetClick(p);
              }}
              onHover={(planet) => setSeleccionado(planet)}
              onLeave={() => setSeleccionado(null)}
            />
          </>
        ))}
        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* Mostrar el tooltip si un planeta estÃ¡ siendo hoverado */}
      <PlanetTooltip planet={seleccionado} position={tooltipPos} />
    </div>
  );
}


