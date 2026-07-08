"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export function HeartModel({
  position = [0, 0, 0] as [number, number, number],
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Heartbeat pulse
    const t = state.clock.elapsedTime;
    const beat = Math.pow(Math.sin(t * 4) * 0.5 + 0.5, 8);
    const scale = 1 + beat * 0.15;
    meshRef.current.scale.setScalar(scale);
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#EF4444"
        emissive="#DC2626"
        emissiveIntensity={0.4}
        roughness={0.3}
        metalness={0.5}
      />
    </mesh>
  );
}
