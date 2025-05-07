'use client';

import React, { useState, useEffect } from 'react';
import { Environment, PerspectiveCamera, Text3D } from '@react-three/drei';
import { AnimatedBackground } from './three/animated-background';
import { Particles } from './three/particles';
import { FloatingObjects } from './three/floating-objects';

const Scene: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 5.5]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const matches = e.matches !== undefined ? e.matches : (e as MediaQueryList).matches;

      if (matches) {
        setCameraPosition([0, 0.3, 6.5]);
      } else {
        setCameraPosition([0, 0, 5.5]);
      }
    };

    handleMediaQueryChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange as (ev: MediaQueryListEvent) => void);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange as (ev: MediaQueryListEvent) => void);
      }
    };
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={cameraPosition} />

      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedBackground />
      <Particles />
      <FloatingObjects />

      <group position={[-1.4, 0.8, 0]} renderOrder={10}>
        <Text3D
          font="/helvetiker_bold.typeface.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
        >
          The Future
          <meshStandardMaterial
            color="#ffffff"
            emissive="#a8a9ae"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Text3D>
      </group>
      <group position={[-1.5, -0.5, 0]} renderOrder={10}>
        <Text3D
          font="/helvetiker_bold.typeface.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
        >
          of ONFTs
          <meshStandardMaterial
            color="#ffffff"
            emissive="#a8a9ae"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.8}
          />
        </Text3D>
      </group>
    </>
  );
};

export default Scene;
