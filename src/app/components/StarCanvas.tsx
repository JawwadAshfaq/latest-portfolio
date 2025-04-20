"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import { inSphere } from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

// TypeScript: Define a more specific type for props
interface StarBackgroundProps {
  radius?: number; // You can pass the radius if needed
  rotationSpeedX?: number; // Speed of rotation in X direction
  rotationSpeedY?: number; // Speed of rotation in Y direction
}

const StarBackground: React.FC<StarBackgroundProps> = ({
  radius = 1.2,
  rotationSpeedX = 10,
  rotationSpeedY = 15,
}) => {
  const ref = useRef<THREE.Group | null>(null);

  // Must be divisible by 3 (e.g., 1500 * 3)
  const [sphere] = useState(() => inSphere(new Float32Array(4500), { radius }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / rotationSpeedX;
      ref.current.rotation.y -= delta / rotationSpeedY;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled>
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

const StarCanvas: React.FC = () => {
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
