'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function ArcReactor() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Ring */}
      <mesh>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#A8A8A8" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Glowing Inner Ring */}
      <mesh>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#E10600" />
      </mesh>

      {/* Center Core Glow */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.8} />
      </mesh>

      {/* Core details */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
          <boxGeometry args={[0.2, 3.5, 0.1]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}

      {/* Light Sources */}
      <pointLight position={[0, 0, 0]} color="#00E5FF" intensity={2} distance={10} />
      <pointLight position={[0, 0, 0]} color="#E10600" intensity={1} distance={5} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ArcReactor />
        </Float>
        <Sparkles count={200} scale={10} size={2} speed={0.4} color="#00E5FF" />
        <Sparkles count={100} scale={10} size={1.5} speed={0.2} color="#E10600" />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
