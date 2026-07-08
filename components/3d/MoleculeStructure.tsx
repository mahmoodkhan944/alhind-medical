"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

interface MoleculeProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
}

function Molecule({
  position = [0, 0, 0],
  scale = 1,
  color = "#0EA5E9",
}: MoleculeProps) {
  const groupRef = useRef<Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.3 + offset;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2 + offset;
    groupRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.3;
  });

  const atoms = [
    { pos: [0, 0, 0] as [number, number, number], size: 0.3, color },
    {
      pos: [0.8, 0.3, 0] as [number, number, number],
      size: 0.2,
      color: "#10B981",
    },
    {
      pos: [-0.7, -0.4, 0.3] as [number, number, number],
      size: 0.2,
      color: "#06B6D4",
    },
    {
      pos: [0.2, 0.8, -0.5] as [number, number, number],
      size: 0.2,
      color: "#14B8A6",
    },
    {
      pos: [-0.3, -0.8, -0.4] as [number, number, number],
      size: 0.2,
      color: "#0EA5E9",
    },
  ];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {atoms.map((atom, i) => (
        <mesh key={i} position={atom.pos}>
          <sphereGeometry args={[atom.size, 24, 24]} />
          <meshStandardMaterial
            color={atom.color}
            emissive={atom.color}
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.7}
          />
        </mesh>
      ))}
      {/* Bonds */}
      {atoms.slice(1).map((atom, i) => {
        const start = atoms[0].pos;
        const end = atom.pos;
        const mid: [number, number, number] = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2,
          (start[2] + end[2]) / 2,
        ];
        const length = Math.sqrt(
          (end[0] - start[0]) ** 2 +
            (end[1] - start[1]) ** 2 +
            (end[2] - start[2]) ** 2,
        );
        return (
          <mesh key={`bond-${i}`} position={mid}>
            <cylinderGeometry args={[0.03, 0.03, length, 8]} />
            <meshStandardMaterial color="#94A3B8" transparent opacity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

export function MoleculeField() {
  const molecules = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => ({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 2,
        ] as [number, number, number],
        scale: 0.4 + Math.random() * 0.6,
        color: ["#0EA5E9", "#10B981", "#06B6D4", "#14B8A6"][
          Math.floor(Math.random() * 4)
        ],
      })),
    [],
  );

  return (
    <group>
      {molecules.map((mol, i) => (
        <Molecule key={i} {...mol} />
      ))}
    </group>
  );
}
