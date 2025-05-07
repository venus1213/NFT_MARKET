'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingObjects() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3
  })

  return (
    <group ref={group} renderOrder={0}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Float
          key={i}
          speed={1}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            Math.sin((i * Math.PI * 2) / 5) * 2,
            Math.cos((i * Math.PI * 2) / 5) * 2,
            0
          ]}
        >
          <mesh>
            <octahedronGeometry args={[0.4]} />
            <meshStandardMaterial
               color="#B366FF"
               emissive="#9333EA"
               emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}


