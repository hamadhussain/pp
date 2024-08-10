"use client";
import React from "react";
import Stuff from "../../../Models/Stuff";
import Render from "../../../Render/page";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Page = () => {
  return (
    <div className=" w-full h-screen">
      <Canvas
      // className={("-z-10 relative", className)}
      // shadows={false}
      // dpr={[10, 20]}
      // camera={{ position: [-0.5, 1, 2] }}
      >
        <directionalLight
          position={[0.3, 0, 2.4]}
          castShadow
          intensity={Math.PI * 3}
        />
        {/* <pointLight position={[100, 100, 100]} />
        <ambientLight position={[[3000, 1030, 1900]]} /> */}
        <Stuff />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Page;
