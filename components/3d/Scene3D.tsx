"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, useEffect, useState } from "react";

interface Scene3DProps {
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };

  children: ReactNode;
}

export function Scene3D({ camera, children }: Scene3DProps) {
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);

  useEffect(() => {
    const updateDpr = () => {
      setDpr(window.innerWidth < 768 ? [0.7, 1] : [1, 2]);
    };

    updateDpr();

    window.addEventListener("resize", updateDpr);

    return () => window.removeEventListener("resize", updateDpr);
  }, []);

  return (
    <Canvas
      dpr={dpr}
      camera={{
        position: camera?.position ?? [0, 0, 7],

        fov: camera?.fov ?? 42,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
