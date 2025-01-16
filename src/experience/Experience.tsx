import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PointerLockControls, useGLTF } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { Vector3 } from "three";

const Model: React.FC = () => {
  // Charger le modèle avec useGLTF
  const { scene } = useGLTF("/platine.gltf");

  return <primitive object={scene} scale={1} />;
};

const Plane: React.FC = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#aaaaaa" />
    </mesh>
  );
};

const Wall: React.FC<{ position: [number, number, number]; args: [number, number, number] }> = ({ position, args }) => {
  const [ref] = useBox(() => ({ position, args }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#cccccc" />
    </mesh>
  );
};

interface CharacterProps {
  position: [number, number, number];
  size: [number, number, number];
}

const Character: React.FC<CharacterProps> = ({ position, size }) => {
  const [ref, api] = useBox(() => ({ mass: 1, position, args: size }));
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "KeyZ":
          moveForward.current = true;
          break;
        case "KeyS":
          moveBackward.current = true;
          break;
        case "KeyA":
        case "KeyQ":
          moveLeft.current = true;
          break;
        case "KeyD":
          moveRight.current = true;
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "KeyZ":
          moveForward.current = false;
          break;
        case "KeyS":
          moveBackward.current = false;
          break;
        case "KeyA":
        case "KeyQ":
          moveLeft.current = false;
          break;
        case "KeyD":
          moveRight.current = false;
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame(() => {
    const direction = new Vector3();
    const frontVector = new Vector3(0, 0, Number(moveBackward.current) - Number(moveForward.current));
    const sideVector = new Vector3(Number(moveRight.current) - Number(moveLeft.current), 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(5).applyEuler(ref.current.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Experience: React.FC = () => {
  const cameraRef = useRef(null);

  return (
    <div className="fullscreen-container">
      <Canvas>
        <Physics>
          {/* Lumières */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Sol */}
          <Plane />

          {/* Murs */}
          <Wall position={[0, 2.5, -10]} args={[20, 5, 0.1]} />
          <Wall position={[0, 2.5, 10]} args={[20, 5, 0.1]} />
          <Wall position={[-10, 2.5, 0]} args={[0.1, 5, 20]} />
          <Wall position={[10, 2.5, 0]} args={[0.1, 5, 20]} />

          {/* Plafond */}
          <mesh position={[0, 5, 0]}>
            <boxGeometry args={[20, 0.1, 20]} />
            <meshStandardMaterial color="#cccccc" />
          </mesh>

          {/* Modèle chargé */}
          <Model />

          {/* Personnage */}
          <Character position={[0, 1, 0]} size={[1, 2, 1]} />

            {/* Caméra avec PointerLockControls */}
            <PointerLockControls />
            <perspectiveCamera ref={cameraRef} position={[0, 2, 5]} />
            {cameraRef.current && useFrame(() => {
              if (cameraRef.current) {
                cameraRef.current.position.lerp(
                  new Vector3(cameraRef.current.position.x, cameraRef.current.position.y + 1, cameraRef.current.position.z + 5),
                  0.1
                );
                cameraRef.current.lookAt(cameraRef.current.position);
              }
            })}

          {/* Environnement HDRI */}
          <Environment preset="city" />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Experience;

// N'oubliez pas d'appeler useGLTF.preload pour précharger le modèle
useGLTF.preload("/platine.gltf");
dq