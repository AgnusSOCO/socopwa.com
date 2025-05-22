import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, MeshDistortMaterial, Environment, Sphere, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { MotionConfig } from 'framer-motion';
import * as THREE from 'three';

function CyberShield() {
  const shieldRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <motion.mesh
        ref={shieldRef}
        scale={1.5}
        animate={{
          y: [0, 0.2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
        />
      </motion.mesh>
    </Float>
  );
}

function FloatingOrbs() {
  const orbs = [
    { position: [3, 1, -2], color: "#4f46e5", size: 0.5, speed: 1.5 },
    { position: [-3, -1, -1], color: "#8b5cf6", size: 0.7, speed: 2 },
    { position: [2, -2, -3], color: "#3b82f6", size: 0.4, speed: 1.8 },
    { position: [-2, 2, -2], color: "#06b6d4", size: 0.6, speed: 1.2 },
  ];

  return (
    <>
      {orbs.map((orb, index) => (
        <Float
          key={index}
          speed={orb.speed}
          rotationIntensity={0.5}
          floatIntensity={0.8}
          position={orb.position as [number, number, number]}
        >
          <Sphere args={[orb.size, 16, 16]}>
            <MeshDistortMaterial
              color={orb.color}
              distort={0.4}
              speed={2}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

function DataStream() {
  const streamRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      streamRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <motion.mesh
      ref={streamRef}
      position={[0, 0, -5]}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <torusKnotGeometry args={[3, 0.2, 128, 16]} />
      <MeshDistortMaterial
        color="#2563eb"
        distort={0.2}
        speed={1}
        transparent
        opacity={0.6}
        wireframe
      />
    </motion.mesh>
  );
}

export function HeroBackground3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.001
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, 2]}
          style={{ pointerEvents: 'none' }}
        >
          <color attach="background" args={['#111827']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <CyberShield />
          <FloatingOrbs />
          <DataStream />
          <Environment preset="city" />
        </Canvas>
      </MotionConfig>
    </div>
  );
}