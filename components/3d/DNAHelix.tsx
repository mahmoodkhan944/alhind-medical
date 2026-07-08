'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Euler, Group, Mesh, Quaternion, Vector3 } from 'three'

type DNAHelixProps = {
  position?: [number, number, number]
}

export function DNAHelix({
  position = [0, 0, 0],
}: DNAHelixProps) {
  const groupRef = useRef<Group>(null)
  const strandsRef = useRef<Group>(null)

  const helixData = useMemo(() => {
    const points: {
      position: [number, number, number]
      color: string
      phase: number
    }[] = []

    const turns = 3
    const pointsPerTurn = 20
    const totalPoints = turns * pointsPerTurn
    const radius = 1.2
    const height = 8

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints
      const angle = t * turns * Math.PI * 2
      const y = (t - 0.5) * height

      points.push({
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius,
        ],
        color: '#0EA5E9',
        phase: i,
      })

      points.push({
        position: [
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius,
        ],
        color: '#10B981',
        phase: i,
      })
    }

    return points
  }, [])

  const connectingBars = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const t = i / 30
      const angle = t * 3 * Math.PI * 2
      const y = (t - 0.5) * 8

      const p1 = new Vector3(
        Math.cos(angle) * 1.2,
        y,
        Math.sin(angle) * 1.2
      )

      const p2 = new Vector3(
        Math.cos(angle + Math.PI) * 1.2,
        y,
        Math.sin(angle + Math.PI) * 1.2
      )

      const mid = p1.clone().add(p2).multiplyScalar(0.5)

      const length = p1.distanceTo(p2)

      const direction = p2.clone().sub(p1).normalize()

      const quaternion = new Quaternion().setFromUnitVectors(
        new Vector3(0, 1, 0),
        direction
      )

      const rotation = new Vector3()

      const euler = new Euler().setFromQuaternion(quaternion)

      rotation.set(euler.x, euler.y, euler.z)

      return {
        id: i,
        position: [
          mid.x,
          mid.y,
          mid.z,
        ] as [number, number, number],
        rotation: [
          rotation.x,
          rotation.y,
          rotation.z,
        ] as [number, number, number],
        length,
      }
    })
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.2
    }

    if (strandsRef.current) {
      strandsRef.current.children.forEach((child, i) => {
        const mesh = child as Mesh

        const phase = helixData[i]?.phase ?? 0

        const scale =
          1 +
          Math.sin(
            state.clock.elapsedTime * 2 +
              phase * 0.3
          ) *
            0.15

        mesh.scale.setScalar(scale)
      })
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <group ref={strandsRef}>
        {helixData.map((point, i) => (
          <mesh
            key={i}
            position={point.position}
          >
            <sphereGeometry args={[0.12, 16, 16]} />

            <meshStandardMaterial
              color={point.color}
              emissive={point.color}
              emissiveIntensity={0.5}
              roughness={0.3}
              metalness={0.6}
            />
          </mesh>
        ))}
      </group>

      {connectingBars.map((bar) => (
        <mesh
          key={`bar-${bar.id}`}
          position={bar.position}
          rotation={bar.rotation}
        >
          <cylinderGeometry
            args={[0.02, 0.02, bar.length, 8]}
          />

          <meshStandardMaterial
            color="#06B6D4"
            emissive="#06B6D4"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}