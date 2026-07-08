'use client'

import { Html } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'



interface Hospital {
  name: string
  city: string
  country: string
  lat: number
  lon: number
  color: string
}

const HOSPITALS: Hospital[] = [
  {
    name: 'Apollo Hospitals',
    city: 'Chennai',
    country: 'India',
    lat: 13.0827,
    lon: 80.2707,
    color: '#0ea5e9',
  },
  {
    name: 'Fortis Memorial Research Institute',
    city: 'Gurugram',
    country: 'India',
    lat: 28.4595,
    lon: 77.0266,
    color: '#0ea5e9',
  },
  {
    name: 'Medanta - The Medicity',
    city: 'Gurugram',
    country: 'India',
    lat: 28.4395,
    lon: 77.0407,
    color: '#0ea5e9',
  },
  {
    name: 'Memorial Şişli Hospital',
    city: 'Istanbul',
    country: 'Turkey',
    lat: 41.0602,
    lon: 28.9877,
    color: '#10b981',
  },
  {
    name: 'Acıbadem Hospital',
    city: 'Istanbul',
    country: 'Turkey',
    lat: 41.0082,
    lon: 29.0562,
    color: '#10b981',
  },
  {
    name: 'Liv Hospital Ankara',
    city: 'Ankara',
    country: 'Turkey',
    lat: 39.9334,
    lon: 32.8597,
    color: '#10b981',
  },
]

const RADIUS = 2.5

function latLonToVector3(
  lat: number,
  lon: number,
  radius: number
) {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lon + 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

export function Globe3D() {
  const globeRef = useRef<THREE.Group>(null)

  const earthTexture = useLoader(
    THREE.TextureLoader,
    '/textures/earth-day.jpg'
  )

  const { viewport } = useThree()

const globeScale = viewport.width < 6 ? 0.72 : 1

  const [selectedHospital, setSelectedHospital] =
  useState<string | null>(null)

  return (
    <group ref={globeRef}
    rotation={[0.15, -1.2, 0]}
    scale={globeScale}
    onClick={() => setSelectedHospital(null)}>

      {/* EARTH */}

      <mesh>
        <sphereGeometry args={[RADIUS, 96, 96]} />

        <meshStandardMaterial
          map={earthTexture}
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>

      {/* ATMOSPHERE */}

      <mesh>
        <sphereGeometry args={[RADIUS * 1.025, 64, 64]} />

        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* HOSPITALS */}

      {/* HOSPITALS */}

{HOSPITALS.map((hospital) => {
  const position = latLonToVector3(
    hospital.lat,
    hospital.lon,
    RADIUS * 1.015
  )

  return (
    <HospitalMarker
      key={hospital.name}
      position={position}
      color={hospital.color}
      name={hospital.name}
      country={`${hospital.city}, ${hospital.country}`}
      isOpen={selectedHospital === hospital.name}
      onToggle={() =>
        setSelectedHospital((current) =>
          current === hospital.name
            ? null
            : hospital.name
        )
      }
    />
  )
})}

      {/* INDIA → TURKEY ROUTES */}

      <FlightPath
        from={HOSPITALS[0]}
        to={HOSPITALS[3]}
      />

      <FlightPath
        from={HOSPITALS[1]}
        to={HOSPITALS[4]}
      />

    </group>
  )
}

function HospitalMarker({
  position,
  color,
  name,
  country,
  isOpen,
  onToggle,
}: {
  position: THREE.Vector3
  color: string
  name: string
  country: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <group position={position}>
      {/* CLICKABLE LOCATION DOT */}
      <mesh
        onClick={(event) => {
          event.stopPropagation()
          onToggle()
        }}
      >
        {/* Visible dot small rahega */}
        <sphereGeometry args={[0.022, 16, 16]} />

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>

      {/* INVISIBLE LARGER CLICK AREA */}
      <mesh
        onClick={(event) => {
          event.stopPropagation()
          onToggle()
        }}
      >
        <sphereGeometry args={[0.09, 16, 16]} />

        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      {/* PULSE EFFECT */}
      <PulseMarker color={color} />

      {/* LABEL */}
      {isOpen && (
        <Html
          center
          position={[0, 0.14, 0]}
          distanceFactor={8}
          occlude
          style={{
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              minWidth: '150px',
              padding: '10px 14px',
              background: 'rgba(255,255,255,0.96)',
              border: '1px solid rgba(14,165,233,0.2)',
              borderRadius: '10px',
              boxShadow: '0 8px 25px rgba(15,23,42,0.15)',
              whiteSpace: 'nowrap',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#0F2747',
              }}
            >
              {name}
            </div>

            <div
              style={{
                marginTop: '2px',
                fontSize: '11px',
                color: '#7890AC',
              }}
            >
              {country}
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}

function PulseMarker({
  color,
}: {
  color: string
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return

    const time =
      (state.clock.elapsedTime % 2) / 2

    ref.current.scale.setScalar(
      1 + time * 3
    )

    const material =
      ref.current.material as THREE.MeshBasicMaterial

    material.opacity = 0.6 * (1 - time)
  })

  return (
    <mesh ref={ref}>

      <sphereGeometry args={[0.065, 20, 20]} />

      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.6}
      />

    </mesh>
  )
}

function FlightPath({
  from,
  to,
}: {
  from: Hospital
  to: Hospital
}) {
  const particleRef = useRef<THREE.Mesh>(null)

  const curve = useMemo(() => {
    const start = latLonToVector3(
      from.lat,
      from.lon,
      RADIUS * 1.015
    )

    const end = latLonToVector3(
      to.lat,
      to.lon,
      RADIUS * 1.015
    )

    const middle = start
      .clone()
      .add(end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(RADIUS * 1.25)

    return new THREE.QuadraticBezierCurve3(
      start,
      middle,
      end
    )
  }, [from, to])

  const geometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(
      curve.getPoints(100)
    )
  }, [curve])

  useFrame((state) => {
    if (!particleRef.current) return

    const speed = 0.12

    const progress =
      (state.clock.elapsedTime * speed) % 1

    const position = curve.getPoint(progress)

    particleRef.current.position.copy(position)
  })

  return (
    <group>
      {/* SUBTLE ROUTE LINE */}

      <line geometry={geometry}>
        <lineBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.45}
        />
      </line>

      {/* MOVING PARTICLE */}

      <mesh ref={particleRef}>
        <sphereGeometry args={[0.025, 16, 16]} />

        <meshBasicMaterial
          color="#fbbf24"
          toneMapped={false}
        />
      </mesh>

      {/* PARTICLE GLOW */}

      <mesh ref={particleRef}>
        <sphereGeometry args={[0.05, 16, 16]} />

        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.25}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}