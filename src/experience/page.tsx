import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from '../components/Experience'
import { VolumeControl } from "../components/VolumeControl";
import { VolumeProvider } from "../contexts/VolumeContext";

const keyboardMap: KeyboardControlsEntry<string>[] = [
  { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
  { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
  { name: 'left', keys: ['KeyA', 'ArrowLeft'] },
  { name: 'right', keys: ['KeyD', 'ArrowRight'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'jump', keys: ['Space'] },
]

const isInConstruction = false;

const ExperiencePage: React.FC = () => {
  if (isInConstruction) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-nickel mb-6 uppercase">L'experience arrive !</h1>
        <h2 className="text-2xl md:text-3xl font-apotek-regular text-gray-300">Rendez-vous le 14 mai pour participer au projet</h2>
      </div>
    )
  }

  return (
    <VolumeProvider>
      <div className="w-full h-screen">
        <KeyboardControls map={keyboardMap}>
          <Canvas
            shadows
            camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
            style={{
              touchAction: "none",
              height: "100%",
              width: "100%"
            }}
          >
            <Experience />
          </Canvas>
        </KeyboardControls>
      </div>
      <VolumeControl />
    </VolumeProvider>
  );
};

export default ExperiencePage
