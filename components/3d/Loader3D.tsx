"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export function Loader3D() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 2;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });
  return (
    <group ref={ref}>
      {/* Medical cross */}
      <mesh>
        <boxGeometry args={[0.3, 1, 0.3]} />
        <meshStandardMaterial
          color="#0EA5E9"
          emissive="#0EA5E9"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 0.3, 0.3]} />
        <meshStandardMaterial
          color="#10B981"
          emissive="#10B981"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}
