"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, BufferAttribute } from "three";

export function ParticleField({ count = 500 }: { count?: number }) {
  const pointsRef = useRef<Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const palette = [
      [14 / 255, 165 / 255, 233 / 255],
      [16 / 255, 185 / 255, 129 / 255],
      [6 / 255, 182 / 255, 212 / 255],
      [20 / 255, 184 / 255, 166 / 255],
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;

      const c = palette[Math.floor(Math.random() * palette.length)];

      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }

    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    pointsRef.current.rotation.y =
      state.clock.elapsedTime * 0.02;

    const posAttr =
      pointsRef.current.geometry.attributes
        .position as BufferAttribute;

    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] +=
        Math.sin(
          state.clock.elapsedTime * 0.5 + i
        ) * 0.002;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />

        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />

      </bufferGeometry>

      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}