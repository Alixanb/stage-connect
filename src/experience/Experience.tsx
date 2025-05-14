import { Environment, FirstPersonControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { PerspectiveCamera as ThreePerspectiveCamera } from "three";

const Model: React.FC = () => {
  const { scene } = useGLTF("/platine.gltf", true);

  // Enable frustum culling
  scene.traverse((child) => {
    if ((child as any).isMesh) {
      child.frustumCulled = true;
    }
  });

  return <primitive object={scene} scale={1} />;
};

const Experience: React.FC = () => {
  const cameraRef = useRef<ThreePerspectiveCamera>(null);

  return (
    <div className="fullscreen-container">
      <Canvas>
        {/* Définir la caméra avec la position très basse */}
        <PerspectiveCamera makeDefault position={[0, 0.15, 5]} fov={75} ref={cameraRef} />

        {/* Lumières */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Sol */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#aaaaaa" />
        </mesh>

        {/* Murs */}
        <mesh position={[0, 2.5, -5]}>
          <boxGeometry args={[10, 5, 0.1]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[0, 2.5, 5]}>
          <boxGeometry args={[10, 5, 0.1]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[-5, 2.5, 0]}>
          <boxGeometry args={[0.1, 5, 10]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[5, 2.5, 0]}>
          <boxGeometry args={[0.1, 5, 10]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>

        {/* Plafond */}
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[10, 0.1, 10]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>

        {/* Modèle chargé */}
        <Model />

        {/* Caméra avec FirstPersonControls */}
        <FirstPersonControls
          movementSpeed={5}          // Vitesse de déplacement
          lookSpeed={0.1}            // Vitesse de mouvement de la souris
          activeLook={true}          // Activer le mouvement de la souris
        />

        {/* Environnement HDRI */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Experience;

// N'oubliez pas d'appeler useGLTF.preload pour précharger le modèle
useGLTF.preload("/platine.gltf");
