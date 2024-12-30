"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

const Model = ({ modelRef, assetUrl }: { modelRef: any; assetUrl: string }) => {
  const { scene } = useGLTF(assetUrl);

  useEffect(() => {
    if (modelRef) {
      modelRef.current = scene;

      scene.scale.set(1.8, 1.8, 1.8);

      scene.position.set(0, -1, -1.2);
    }
  }, [scene, modelRef]);
  return <primitive object={scene} />;
};

const ThreeDModel = React.forwardRef<THREE.Group, { assetUrl: string }>(
  ({ assetUrl }, modelRef) => {
    return (
      <div
        style={{
          width: "700px",
          height: "500px",
          overflow: "visible",
        }}
      >
        <Canvas>
          <ambientLight intensity={3} />
          <directionalLight position={[10, 30, 0]} />
          <Model modelRef={modelRef} assetUrl={assetUrl} />
          <OrbitControls enabled={false} rotateSpeed={30} />
        </Canvas>
      </div>
    );
  }
);

ThreeDModel.displayName = "ThreeDModel";

export default ThreeDModel;
