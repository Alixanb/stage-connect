import { useFrame, useThree } from '@react-three/fiber';
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import { BlendFunction } from 'postprocessing';
import { useMemo, useRef } from 'react';
import { Color, Fog } from 'three';

// Composant pour ajouter du brouillard à la scène
const FogEffect = () => {
  const { scene } = useThree();

  useMemo(() => {
    // Brouillard violet/bleu sombre
    scene.fog = new Fog(new Color(0x120824), 5, 25);
    // Couleur d'arrière-plan assortie
    scene.background = new Color(0x0a0513);
  }, [scene]);

  return null;
};

// Composant pour les effets de post-processing
export const VisualEffects = () => {
  const neonRef = useRef();

  // Contrôles pour ajuster les effets (peuvent être supprimés en production)
  const {
    bloomIntensity,
    bloomRadius,
    noiseOpacity,
    chromaticOffset,
    vignetteOffset
  } = useControls("Visual Effects", {
    bloomIntensity: { value: 1.5, min: 0, max: 3, step: 0.1 },
    bloomRadius: { value: 0.4, min: 0, max: 1, step: 0.01 },
    noiseOpacity: { value: 0.15, min: 0, max: 0.5, step: 0.01 },
    chromaticOffset: { value: 0.004, min: 0, max: 0.01, step: 0.001 },
    vignetteOffset: { value: 0.5, min: 0, max: 1, step: 0.1 }
  });

  // Animation du flicker (scintillement) des néons
  useFrame((state) => {
    if (neonRef.current) {
      // Effet de scintillement très léger sur l'intensité du bloom
      neonRef.current.intensity = bloomIntensity * (0.97 + Math.sin(state.clock.elapsedTime * 2) * 0.03);
    }
  });

  return (
    <>
      <FogEffect />

      <EffectComposer multisampling={0}>
        {/* Effet de bloom pour les néons */}
        <Bloom
          ref={neonRef}
          intensity={bloomIntensity}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          radius={bloomRadius}
          blendFunction={BlendFunction.SCREEN}
        />

        {/* Grain de film */}
        <Noise
          opacity={noiseOpacity}
          premultiply
          blendFunction={BlendFunction.NORMAL}
        />

        {/* Aberration chromatique légère */}
        <ChromaticAberration
          offset={[chromaticOffset, chromaticOffset]}
          radialModulation={false}
          modulationOffset={0}
        />

        {/* Vignettage pour un effet de concentration */}
        <Vignette
          offset={vignetteOffset}
          darkness={0.7}
          eskil={false}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  );
}; 