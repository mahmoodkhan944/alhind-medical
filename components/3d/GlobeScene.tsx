"use client";

import { OrbitControls } from "@react-three/drei";
import { Globe3D } from "./Globe3D";
import { Scene3D } from "./Scene3D";

export function GlobeScene() {
  return (
    <Scene3D
      camera={{
        position: [0, 0, 8],
        fov: 42,
      }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight position={[5, 5, 8]} intensity={1.5} />

      <pointLight position={[-5, 2, 5]} intensity={0.5} />

      <Globe3D />

      <OrbitControls
        enableZoom
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.25}
        minDistance={6.5}
        maxDistance={9}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.4}
        zoomSpeed={0.6}
      />
    </Scene3D>
  );
}
