import { useMemo } from "react";
import * as THREE from "three";
import { Line } from "@react-three/drei";

export default function OrbitPath({ orbit }) {
  // No dibujar si el planeta es el central
  if (orbit === 0) return null;

  const points = useMemo(() => {
    const curve = new THREE.EllipseCurve(
      0, 0,                   // centro
      orbit * 2.5, orbit * 2.5, // radios del círculo (coinciden con Planet.jsx)
      0, 2 * Math.PI,          // ángulo inicial y final
      false,                   // sentido
      0
    );
    return curve.getPoints(100).map((p) => new THREE.Vector3(p.x, 0, p.y));
  }, [orbit]);

  return (
    <Line
        points={points}
        color="#ffd6f6" // tono rosado suave
        opacity={0.25}
        transparent
        linewidth={0.6}
        />

  );
}
