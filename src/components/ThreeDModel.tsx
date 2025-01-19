"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = {
  modelRef: any;
  assetUrl: string;
  scale: [number, number, number];
};

const Model = ({ modelRef, assetUrl, scale }: ModelProps) => {
  const { scene } = useGLTF(assetUrl);

  useEffect(() => {
    if (modelRef) {
      modelRef.current = scene;

      // Apply dynamic scale
      scene.scale.set(...scale);

      scene.position.set(0, -1, -1);
    }
  }, [scene, modelRef, scale]);

  return <primitive object={scene} />;
};

type ThreeDModelProps = {
  assetUrl: string;
  scale?: [number, number, number];
};

const ThreeDModel = React.forwardRef<THREE.Group, ThreeDModelProps>(
  ({ assetUrl, scale = [1.4, 1.4, 1.4] }, modelRef) => {
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
          <Model modelRef={modelRef} assetUrl={assetUrl} scale={scale} />
          <OrbitControls enabled={false} rotateSpeed={30} />
        </Canvas>
      </div>
    );
  }
);

ThreeDModel.displayName = "ThreeDModel";

export default ThreeDModel;
