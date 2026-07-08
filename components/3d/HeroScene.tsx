"use client";

import { Scene3D } from "./Scene3D";
import { DNAHelix } from "./DNAHelix";
// import { MoleculeField } from './MoleculeStructure'
// import { ParticleField } from './ParticleField'

export function HeroScene() {
  return (
    <Scene3D camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.6} />

      <pointLight position={[10, 10, 10]} intensity={1} color="#0EA5E9" />

      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10B981" />

      <DNAHelix position={[-3, 0, 0]} />

      {/* <MoleculeField /> */}
      {/* <ParticleField count={300} /> */}
    </Scene3D>
  );
}
