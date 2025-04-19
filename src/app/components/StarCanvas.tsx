"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import { inSphere } from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const StarBackground = (props: any) => {
  const ref = useRef<THREE.Group | null>(null);
  
  // Must be divisible by 3 (e.g., 1500 * 3)
  const [sphere] = useState(() => inSphere(new Float32Array(4500), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent 
          color="#ffffff" 
          size={0.002} 
          sizeAttenuation 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div 
      className="w-full h-full fixed inset-0 z-[-1]" 
      style={{ pointerEvents: "none" }}
    >
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        onPointerDown={(e) => e.stopPropagation()}
        onCreated={({ gl }) => {
          gl.domElement.style.pointerEvents = "none";
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;
