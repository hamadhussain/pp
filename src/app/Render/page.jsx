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
      dpr={[10, 20]}
      camera={{ position: [-0.5, 1, 2] }}
    >
      {/* <ambientLight position={[[10, 10, 30]]} /> */}
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModel;
