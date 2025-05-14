/* eslint-disable react-hooks/exhaustive-deps */

import {
  Environment
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { useVolume } from "../contexts/VolumeContext";
import { CharacterController } from "./CharacterController";
import { InteractiveElements } from "./InteractiveElements";
import { Map } from "./Map";
import { NeonLights } from "./NeonLights";

type MapName = 'YDAYS_NOUMA_ASSEMBLE';

type MapConfig = {
  scale: number;
  position: number[];
};

const mapConfig: MapConfig = {
  scale: 0.5,
  position: [0, -2, 0],
};

// Durée totale du morceau en secondes (1h30 = 5400 secondes)
const TRACK_DURATION_SECONDS = 5400;

// Fonction pour calculer la position de lecture en fonction de l'horloge mondiale
const calculateTimePosition = (): number => {
  // Timestamp actuel en millisecondes (UTC)
  const currentTimeMs = Date.now();

  // Calculer où nous sommes dans le cycle de la piste
  const positionInCycleMs = currentTimeMs % (TRACK_DURATION_SECONDS * 1000);

  // Convertir en secondes
  return positionInCycleMs / 1000;
};

export const Experience = () => {
  const { map } = useControls("Map", {
    map: {
      value: "YDAYS_NOUMA_ASSEMBLE" as MapName,
      options: ["YDAYS_NOUMA_ASSEMBLE"] as MapName[],
    },
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const { volumePercentage, heavyEffectsEnabled } = useVolume();

  // Initialize audio on mount only once
  useEffect(() => {
    const backgroundMusic = new Audio('/audio/music.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = volumePercentage * 0.2;

    // Calculer la position de départ basée sur l'heure mondiale
    const startPosition = calculateTimePosition();
    console.log(`Starting audio at position: ${startPosition.toFixed(2)} seconds`);

    // Une fois que l'audio est chargé, définir la position et jouer
    backgroundMusic.addEventListener('loadedmetadata', () => {
      // Définir la position de départ
      backgroundMusic.currentTime = startPosition;

      // Store reference to control volume later
      audioRef.current = backgroundMusic;

      // Try to play audio - note this might be blocked by browser policies
      const playAudio = () => {
        backgroundMusic.play()
          .then(() => {
            setAudioInitialized(true);
            console.log("Audio started successfully at synchronized position");
          })
          .catch(error => {
            console.error("Error starting audio:", error);
            // If autoplay was prevented, we'll rely on user interaction
          });
      };

      // Try to play immediately
      playAudio();
    });

    // Précharger l'audio
    backgroundMusic.load();

    // Also try to play on document click (for browsers that require user interaction)
    const handleUserInteraction = () => {
      if (!audioInitialized && audioRef.current) {
        // Recalculer la position actuelle lors de l'interaction de l'utilisateur
        const currentPosition = calculateTimePosition();
        if (audioRef.current) {
          audioRef.current.currentTime = currentPosition;
          audioRef.current.play()
            .then(() => {
              setAudioInitialized(true);
              console.log(`Audio started via user interaction at position: ${currentPosition.toFixed(2)} seconds`);
            })
            .catch(err => console.error("Error playing audio after interaction:", err));
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Synchronisation périodique pour corriger toute dérive
    const syncInterval = setInterval(() => {
      if (audioRef.current && audioInitialized) {
        const expectedPosition = calculateTimePosition();
        const actualPosition = audioRef.current.currentTime;

        // Si l'écart est supérieur à 2 secondes, resynchroniser
        if (Math.abs(expectedPosition - actualPosition) > 2) {
          console.log(`Resyncing audio. Expected: ${expectedPosition.toFixed(2)}, Actual: ${actualPosition.toFixed(2)}`);
          audioRef.current.currentTime = expectedPosition;
        }
      }
    }, 30000); // Vérifier toutes les 30 secondes

    return () => {
      clearInterval(syncInterval);
      if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []); // Only run on mount

  // Update volume separately when it changes
  useEffect(() => {
    if (audioRef.current) {
      // Multiply by 0.2 to reduce overall volume (100% becomes 20%)
      audioRef.current.volume = volumePercentage * 0.2;
    }
  }, [volumePercentage]);

  return (
    <>
      {/* Environnement et lumières */}
      <Environment preset="night" />

      {/* Lumières néon pour une ambiance underground - conditionnelles selon les préférences de performance */}
      <NeonLights />

      {/* Lumière de base pour les modes basse performance - uniquement si les effets sont désactivés */}
      {!heavyEffectsEnabled && (
        <ambientLight intensity={0.6} color="#6633cc" />
      )}

      <Physics>
        <Map
          scale={mapConfig.scale}
          position={mapConfig.position}
          model={`models/${map}.glb`}
        />
        <CharacterController />
        <InteractiveElements />
      </Physics>
    </>
  );
};
