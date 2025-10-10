import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import Planet from "./Planet";
import PlanetTooltip from "./PlanetTooltip";
import planets from "../data/planets.json";
import OrbitPath from "./OrbitPath";

export default function Universe({ onPlanetClick }) {
  const [seleccionado, setSeleccionado] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      onMouseMove={handleMouseMove}
    >
      <Canvas shadows camera={{ position: [0, 10, 25], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[15, 10, 10]} intensity={1.4} color="#fffbe7" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#70a1ff" />
        <pointLight position={[0, 0, 0]} intensity={0.4} color="#ffffff" />

        <Stars radius={100} depth={50} count={4000} factor={4} fade />

        {planets.map((p, i) => (
          <group key={`group-${i}`}>
            <OrbitPath orbit={p.orbit} />
            <Planet
              {...p}
              onClick={() => {
                setSeleccionado(p);
                if (onPlanetClick) onPlanetClick(p);
              }}
              onHover={(planet) => setSeleccionado(planet)}
              onLeave={() => setSeleccionado(null)}
            />
          </group>
        ))}

        <OrbitControls enableZoom />
      </Canvas>

      <PlanetTooltip planet={seleccionado} position={tooltipPos} />
    </div>
  );
}

