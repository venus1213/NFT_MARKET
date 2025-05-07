'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function AnimatedBackground() {
  const mesh = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.1
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <mesh ref={mesh} scale={20}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#120724"
        roughness={1}
        metalness={0}
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  )
}
