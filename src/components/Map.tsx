import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Mesh, MeshStandardMaterial } from "three";

export const Map = ({ model, scale, position }: { model: string, scale?: number, position?: number[] }) => {
  const { scene, animations } = useGLTF(model);
  const group = useRef();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Prepare materials for potential transparency changes
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => {
              if (mat instanceof MeshStandardMaterial) {
                mat.depthWrite = true;
                mat.needsUpdate = true;
              }
            });
          } else if (child.material instanceof MeshStandardMaterial) {
            child.material.depthWrite = true;
            child.material.needsUpdate = true;
          }
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions]);

  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive
          object={scene}
          scale={scale}
          position={position}
          ref={group}
        />
      </RigidBody>
    </group>
  );
};
