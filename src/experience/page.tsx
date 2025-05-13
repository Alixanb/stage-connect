import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Experience } from "../components/Experience";
import { VolumeControl } from "../components/VolumeControl";
import { VolumeProvider } from "../contexts/VolumeContext";


const keyboardMap: KeyboardControlsEntry<string>[] = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space"] },
];


const ExperiencePage: React.FC = () => {
  return (
    <VolumeProvider>
      <div className="w-full h-screen relative" style={{
        background: 'linear-gradient(to bottom, #0a0513 0%, #120824 100%)',
      }}>
        <VolumeControl />
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
    </VolumeProvider>
  );
};

export default ExperiencePage;
