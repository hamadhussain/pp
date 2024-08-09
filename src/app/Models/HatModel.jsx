// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */
// "use client";
// import React, { useRef,useEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// const HatModel = React.memo(function HatModel(props) {
//   // Use React.memo for performance optimization
//   const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
//   let modelRef;
//   useEffect(() => {
//      modelRef = useRef();

//     useFrame(() => {
//       modelRef.current.rotation.y += 0.007;
//     });
//   }, []);
//   return (
//     <group
//       {...props}
//       dispose={null}
//       ref={modelRef}
//       scale={[1.8, 1.8, 1.8]}
//       rotation={[0.4, -1, 0]}
//       position={[0, 0, 0]}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_2.geometry}
//         material={materials.initialShadingGroup}
//         position={[0, -3.867, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//       />
//     </group>
//   );
// });

// export default HatModel;
// useGLTF.preload("/models/hat-transformed.glb");













"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HatModel = React.memo(function HatModel(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
  const modelRef = useRef(); // Initialize useRef correctly

  // Rotate the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.8, 1.8, 1.8]}
      rotation={[0.4, -1, 0]}
      position={[0, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
});

export default HatModel;
useGLTF.preload("/models/hat-transformed.glb");
