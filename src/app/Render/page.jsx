"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      // className={("-z-10 relative", className)}
      shadows={false}
      dpr={[1.7, 1.7]}
      // camera={{ position: [-0.5, 1, 2] }}
    >
      <directionalLight
        position={[7.3, 4, 5.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      {/* <ambientLight position={[[10, 10, 30]]} /> */}
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
