import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Text3D, Environment, Float, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Central geometric object - the main focal point
function CentralCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <octahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color={hovered ? "#ff00ff" : "#00ffff"}
          emissive={hovered ? "#330033" : "#003333"}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Floating particles and geometric shapes
function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 0.5) * 2;

        return (
          <Float
            key={i}
            speed={1 + i * 0.2}
            rotationIntensity={0.3}
            floatIntensity={0.3}
          >
            <mesh position={[x, y, z]} scale={0.3}>
              {i % 3 === 0 ? (
                <boxGeometry args={[1, 1, 1]} />
              ) : i % 3 === 1 ? (
                <sphereGeometry args={[0.5]} />
              ) : (
                <tetrahedronGeometry args={[0.7]} />
              )}
              <meshStandardMaterial
                color="#6366f1"
                emissive="#1e1b4b"
                emissiveIntensity={0.3}
                transparent
                opacity={0.6}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

// Grid floor effect
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#0a0a0a"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="scene-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <spotLight
          position={[0, 20, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
          castShadow
        />

        {/* 3D Elements */}
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <CentralCrystal />
        <FloatingElements />
        <GridFloor />

        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxDistance={20}
          minDistance={5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
        />

        {/* Environment */}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}