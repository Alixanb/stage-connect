import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

// Shaders pour l'effet pixellisé
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform float pixelSize;
  uniform vec2 resolution;
  varying vec2 vUv;

  void main() {
    vec2 dxy = pixelSize / resolution;
    vec2 coord = dxy * floor(vUv / dxy);
    gl_FragColor = texture2D(tDiffuse, coord);
  }
`;

export const PixelShader = ({ pixelSize = 6 }) => {
  const { gl, scene, camera, size } = useThree();
  const renderTargetRef = useRef<THREE.WebGLRenderTarget>();
  const pixelPassRef = useRef<THREE.ShaderMaterial>();
  const screenRef = useRef<THREE.Mesh>();

  // Créer un render target et un matériau shader
  useEffect(() => {
    // Création d'une cible de rendu
    renderTargetRef.current = new THREE.WebGLRenderTarget(
      size.width,
      size.height,
      {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false
      }
    );

    // Matériau pour l'effet pixellisé
    pixelPassRef.current = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: null },
        pixelSize: { value: pixelSize },
        resolution: { value: new THREE.Vector2(size.width, size.height) }
      },
      vertexShader,
      fragmentShader,
    });

    return () => {
      renderTargetRef.current?.dispose();
    };
  }, [size, pixelSize]);

  // Créer un mesh qui occupe tout l'écran pour appliquer le shader
  const screen = useMemo(() => {
    return new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      pixelPassRef.current
    );
  }, []);

  useEffect(() => {
    if (screen && pixelPassRef.current) {
      screenRef.current = screen;
    }
  }, [screen]);

  // Appliquer l'effet de rendu à chaque frame
  useFrame(() => {
    if (!renderTargetRef.current || !pixelPassRef.current || !screenRef.current) return;

    // Rendre la scène dans le render target
    const originalAutoClear = gl.autoClear;
    gl.autoClear = true;
    gl.setRenderTarget(renderTargetRef.current);
    gl.render(scene, camera);

    // Mettre à jour la texture utilisée par le shader
    pixelPassRef.current.uniforms.tDiffuse.value = renderTargetRef.current.texture;

    // Rendre le screen mesh avec le shader
    gl.setRenderTarget(null);
    gl.autoClear = originalAutoClear;
    gl.render(screenRef.current, camera);

    // Éviter le rendu par défaut car nous avons déjà rendu manuellement
    gl.state.reset();
    return true;
  }, 1); // Priorité élevée pour s'exécuter après tous les autres rendus

  return null;
}; 