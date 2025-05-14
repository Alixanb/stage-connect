import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Color, SpotLight } from "three";
import { useVolume } from "../contexts/VolumeContext";

// Couleurs néon vives
const neonColors = [
  new Color(0xff00ff), // Magenta
  new Color(0x00ffff), // Cyan
  new Color(0xff2a6d), // Rose néon
  new Color(0x39ff14), // Vert néon
  new Color(0x2f00ff)  // Bleu électrique
];

// Points où placer les lumières néon (surélevés davantage)
const neonPositions: [number, number, number][] = [
  [0, 9, -7],      // Milieu arrière (scène) - très haut
  [-8, 5.5, 0],    // Mur gauche - surélevé davantage
  [8, 5.5, 0],     // Mur droit - surélevé davantage
  [0, 7.5, 3]      // Au-dessus du joueur - très haut
];

// Positions pour des tubes néon visibles (surélevés davantage)
const neonTubePositions: Array<{
  position: [number, number, number],
  rotation: [number, number, number],
  scale: [number, number, number],
  color: Color
}> = [
    // Tube horizontal au-dessus de la scène
    {
      position: [0, 10, -8],  // très haut
      rotation: [0, 0, 0],
      scale: [10, 0.2, 0.2],  // plus épais
      color: neonColors[0]
    },
    // Tubes verticaux sur les côtés
    {
      position: [-9, 6, -5],  // surélevé davantage
      rotation: [0, 0, Math.PI / 2],
      scale: [6, 0.2, 0.2],   // plus épais et plus long
      color: neonColors[1]
    },
    {
      position: [9, 6, -5],   // surélevé davantage
      rotation: [0, 0, Math.PI / 2],
      scale: [6, 0.2, 0.2],   // plus épais et plus long
      color: neonColors[3]
    },
    // Tube au sol (maintenant plus haut)
    {
      position: [0, 1.2, 0],  // hauteur de genou
      rotation: [0, Math.PI / 4, 0],
      scale: [12, 0.2, 0.2],  // plus épais et plus long
      color: neonColors[2]
    },
    // Tube croisé (maintenant plus haut)
    {
      position: [0, 1.2, 0],  // hauteur de genou
      rotation: [0, -Math.PI / 4, 0],
      scale: [12, 0.2, 0.2],  // plus épais et plus long
      color: neonColors[4]
    }
  ];

interface NeonProps {
  position: [number, number, number];
  color: Color;
  intensity?: number;
  distance?: number;
  angle?: number;
  flickerSpeed?: number;
  flickerIntensity?: number;
  decay?: number;
}

// Composant pour une seule lumière néon
const NeonLight: React.FC<NeonProps> = ({
  position,
  color,
  intensity = 10,     // Intensité doublée de 5 à 10
  distance = 25,      // Distance augmentée
  angle = 0.7,        // Angle élargi davantage
  flickerSpeed = 1,
  flickerIntensity = 0.15,
  decay = 1.5         // Valeur par défaut
}) => {
  const lightRef = useRef<SpotLight>(null);
  const baseIntensity = intensity;
  const offset = Math.random() * 10; // Offset pour que les lumières ne scintillent pas toutes en même temps

  useFrame((state) => {
    if (lightRef.current) {
      // Effet de scintillement
      const flicker = Math.sin((state.clock.elapsedTime + offset) * flickerSpeed) * flickerIntensity;
      lightRef.current.intensity = baseIntensity * (1 + flicker);
    }
  });

  return (
    <spotLight
      ref={lightRef}
      position={position}
      color={color}
      intensity={intensity}
      distance={distance}
      angle={angle}
      penumbra={0.5}
      decay={decay}     // Réduction du decay pour que la lumière porte plus loin
      castShadow
    />
  );
};

// Composant pour un tube néon visible
const NeonTube: React.FC<{
  position: [number, number, number],
  rotation: [number, number, number],
  scale: [number, number, number],
  color: Color,
  intensity?: number,
  distance?: number,
  decay?: number
}> = ({ position, rotation, scale, color, intensity = 4, distance = 12, decay = 1.5 }) => {
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} toneMapped={false} />
      <pointLight
        color={color}
        intensity={intensity}
        distance={distance}
        decay={decay}
      />
    </mesh>
  );
};

export const NeonLights: React.FC = () => {
  const { heavyEffectsEnabled } = useVolume();

  // Réduire le nombre de tubes et lumières en mode performance
  const activeTubePositions = heavyEffectsEnabled
    ? neonTubePositions
    : neonTubePositions.filter((_, i) => i % 2 === 0); // Garder seulement la moitié des tubes en mode performance

  // Réduire l'intensité et la qualité en mode performance
  const lightIntensityMultiplier = heavyEffectsEnabled ? 1 : 0.7;
  const lightDistanceMultiplier = heavyEffectsEnabled ? 1 : 0.8;
  const decayValue = heavyEffectsEnabled ? 1.5 : 2;

  return (
    <>
      {/* Points de lumière néon - utiliser des spotlights pour plus d'impact */}
      {neonPositions.map((pos, i) => (
        <NeonLight
          key={i}
          position={pos}
          color={neonColors[i % neonColors.length]}
          intensity={(10 + Math.random() * 2) * lightIntensityMultiplier}
          distance={25 * lightDistanceMultiplier}
          flickerSpeed={heavyEffectsEnabled ? 0.5 + Math.random() * 1.5 : 0.3}  // Moins de scintillement en mode performance
          flickerIntensity={heavyEffectsEnabled ? 0.1 + Math.random() * 0.15 : 0.05}
          decay={decayValue}
        />
      ))}

      {/* Tubes néon visibles - réduits en mode performance */}
      {activeTubePositions.map((tube, i) => (
        <NeonTube
          key={i + "tube"}
          position={tube.position}
          rotation={tube.rotation}
          scale={tube.scale}
          color={tube.color}
          intensity={heavyEffectsEnabled ? 4 : 2}
          distance={heavyEffectsEnabled ? 12 : 8}
          decay={decayValue}
        />
      ))}

      {/* Lumière d'ambiance toujours présente */}
      <ambientLight intensity={0.35} color="#120824" />

      {/* Lumière hémisphérique - simplifiée en mode performance */}
      <hemisphereLight
        intensity={heavyEffectsEnabled ? 0.6 : 0.4}
        color="#330066"
        groundColor="#000000"
      />
    </>
  );
}; 