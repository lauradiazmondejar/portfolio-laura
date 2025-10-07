import { useRef, useMemo, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function Planeta({
  name,
  color,
  size,
  orbit,
  info,
  onHover,
  onLeave,
}) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  // Carga la textura desde /public/textures/
  const textureName = useMemo(() => {
    const map = {
      Origina: "origina.png",
      Logika: "logika.png",
      Kodia: "kodia.png",
      Praxis: "praxis.png",
      Synthia: "synthia.png",
      Nova: "nova.png",
      Cirrus: "cirrus.png",
    };
    return map[name] || "default.png";
  }, [name]);

  // ✅ las texturas deben estar en public/textures/
  const colorMap = useLoader(THREE.TextureLoader, `/textures/${textureName}`);

  // Movimiento orbital
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (orbit !== 0) {
      const distance = orbit * 2.5;
      const speed = 0.05 + orbit * 0.01;
      ref.current.position.x = Math.cos(t * speed + orbit) * distance;
      ref.current.position.z = Math.sin(t * speed + orbit) * distance;
    }
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => {
        setHovered(true);
        onHover({ name, color, info });  // Pasamos la información completa al tooltip
      }}
      onPointerOut={() => {
        setHovered(false);
        onLeave();
      }}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        metalness={0.5}
        roughness={0.3}
        emissive={hovered ? new THREE.Color("#ffffff") : new THREE.Color(color)} // Sombra blanca al hover
        emissiveIntensity={hovered ? 1.5 : 0.2} // Aumenta el brillo cuando está en hover
      />

      {/* 🌫 Halo atmosférico para planetas brillantes */}
      {["Origina", "Synthia", "Nova"].includes(name) && (
        <mesh>
          <sphereGeometry args={[size * 1.08, 32, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.12} />
        </mesh>
      )}
    </mesh>
  );
}
