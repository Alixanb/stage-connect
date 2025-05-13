import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, ShaderMaterial, Vector2 } from "three";

// Définition du shader pour l'effet de glitch
const GlitchMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new Vector2(window.innerWidth, window.innerHeight),
    intensity: 0.1, // Intensité de l'effet
    speed: 0.5,     // Vitesse de l'effet
    color1: [0.1, 0.0, 0.3], // Couleur de base (violet sombre)
    color2: [0.8, 0.2, 0.8], // Couleur d'accent (rose néon)
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec2 resolution;
    uniform float intensity;
    uniform float speed;
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    
    // Fonction de bruit de Perlin simplifiée
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Fonction de hachage pour l'effet de glitch
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    void main() {
      vec2 uv = vUv;
      
      // Effet de distorsion
      float distortion = intensity * sin(uv.y * 10.0 + time * speed);
      uv.x += distortion * 0.1;
      
      // Effet de lignes horizontales
      float lines = step(0.98, sin(uv.y * 100.0 + time * 0.5));
      
      // Effet de glitch aléatoire
      float glitchTime = floor(time * 5.0) * 0.2;
      float glitchSeed = hash(glitchTime);
      float glitchIntensity = step(0.95, glitchSeed) * intensity * 2.0;
      
      if (glitchIntensity > 0.001) {
        float glitchOffset = (hash(uv.y + glitchSeed) - 0.5) * glitchIntensity;
        uv.x += glitchOffset;
      }
      
      // Couleur de base avec dégradé
      vec3 color = mix(color1, color2, noise(uv + time * 0.05));
      
      // Ajout de lignes
      color += lines * 0.2;
      
      // Vignettage léger
      float vignette = 1.0 - smoothstep(0.0, 0.7, length(uv - 0.5));
      color *= vignette;
      
      gl_FragColor = vec4(color, 0.7); // Alpha pour semi-transparence
    }
  `
);

// Étendre les composants de Three.js avec notre matériau personnalisé
extend({ GlitchMaterial });

// Type pour le matériau custom
declare global {
  namespace JSX {
    interface IntrinsicElements {
      glitchMaterial: any;
    }
  }
}

interface GlitchWallProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  width?: number;
  height?: number;
  intensity?: number;
  speed?: number;
}

// Composant pour un mur avec effet de glitch
export const GlitchWall: React.FC<GlitchWallProps> = ({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  width = 5,
  height = 3,
  intensity = 0.1,
  speed = 0.5
}) => {
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[width, height, 1, 1]} />
      <glitchMaterial
        ref={materialRef}
        side={DoubleSide}
        transparent
        intensity={intensity}
        speed={speed}
      />
    </mesh>
  );
};

// Composant pour placer plusieurs murs glitch dans l'environnement
export const GlitchWalls: React.FC = () => {
  return (
    <group>
      {/* Mur arrière (derrière la scène) */}
      <GlitchWall
        position={[0, 2, -9]}
        scale={[2, 1.5, 1]}
        width={10}
        height={5}
        intensity={0.15}
        speed={0.4}
      />

      {/* Murs latéraux */}
      <GlitchWall
        position={[-10, 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        width={20}
        height={5}
      />

      <GlitchWall
        position={[10, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        width={20}
        height={5}
      />

      {/* Petits panneaux décoratifs */}
      <GlitchWall
        position={[-5, 1.5, -4]}
        scale={[0.6, 0.6, 1]}
        rotation={[0, Math.PI / 8, 0]}
        intensity={0.2}
        speed={0.7}
      />

      <GlitchWall
        position={[5, 1.5, -4]}
        scale={[0.6, 0.6, 1]}
        rotation={[0, -Math.PI / 8, 0]}
        intensity={0.2}
        speed={0.7}
      />
    </group>
  );
}; 