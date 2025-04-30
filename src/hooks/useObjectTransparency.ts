import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, Object3D, Raycaster, Vector3 } from "three";

export type TransparencyOptions = {
  opacity: number;
  enabled: boolean;
};

export function useObjectTransparency(
  targetRef: React.RefObject<Group>,
  options: TransparencyOptions
) {
  const raycaster = useRef(new Raycaster());
  const scene = useThree((state) => state.scene);
  const camera = useThree((state) => state.camera);
  const targetPosition = useRef(new Vector3());
  const direction = useRef(new Vector3());

  const affectedMeshes = useRef<
    Map<Mesh, { originalOpacity: number; originalTransparent: boolean }>
  >(new Map());

  useEffect(() => {
    return () => {
      resetMaterials();
    };
  }, []);

  const resetMaterials = () => {
    affectedMeshes.current.forEach((properties, mesh) => {
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            mat.opacity = properties.originalOpacity;
            mat.transparent = properties.originalTransparent;
            mat.needsUpdate = true;
          });
        } else {
          mesh.material.opacity = properties.originalOpacity;
          mesh.material.transparent = properties.originalTransparent;
          mesh.material.needsUpdate = true;
        }
      }
    });
    affectedMeshes.current.clear();
  };

  const updateTransparency = () => {
    if (!targetRef.current || !options.enabled) {
      resetMaterials();
      return;
    }

    // Reset all previously affected meshes
    resetMaterials();

    // Get target position for raycasting
    targetRef.current.getWorldPosition(targetPosition.current);

    // Direction from camera to target
    direction.current
      .subVectors(targetPosition.current, camera.position)
      .normalize();

    // Set up and perform raycasting
    raycaster.current.set(camera.position, direction.current);
    const distance = camera.position.distanceTo(targetPosition.current);
    const intersects = raycaster.current.intersectObjects(scene.children, true);

    // Process intersected objects
    for (const intersect of intersects) {
      const object = intersect.object;

      // Skip the target itself and objects behind it
      if (
        intersect.distance > distance ||
        isObjectPartOfTarget(object, targetRef.current) ||
        !(object instanceof Mesh)
      ) {
        continue;
      }

      const mesh = object as Mesh;
      if (mesh.material) {
        // Store original properties
        if (!affectedMeshes.current.has(mesh)) {
          const originalProps = {
            originalOpacity: Array.isArray(mesh.material)
              ? mesh.material[0].opacity
              : mesh.material.opacity,
            originalTransparent: Array.isArray(mesh.material)
              ? mesh.material[0].transparent
              : mesh.material.transparent,
          };
          affectedMeshes.current.set(mesh, originalProps);
        }

        // Apply transparency
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            mat.transparent = true;
            mat.opacity = options.opacity;
            mat.needsUpdate = true;
          });
        } else {
          mesh.material.transparent = true;
          mesh.material.opacity = options.opacity;
          mesh.material.needsUpdate = true;
        }
      }
    }
  };

  const isObjectPartOfTarget = (
    object: Object3D,
    target: Object3D
  ): boolean => {
    let current: Object3D | null = object;

    while (current) {
      if (current === target || target.getObjectById(current.id)) {
        return true;
      }
      current = current.parent;
    }

    return false;
  };

  return updateTransparency;
}
