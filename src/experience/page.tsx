import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from '../components/Experience'

const keyboardMap: KeyboardControlsEntry<string>[] = [
  { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
  { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
  { name: 'left', keys: ['KeyA', 'ArrowLeft'] },
  { name: 'right', keys: ['KeyD', 'ArrowRight'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'jump', keys: ['Space'] },
]

const isInConstruction = true;

const ExperiencePage: React.FC = () => {
  if (isInConstruction) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">This page is under construction</h1>
      </div>
    )
  }

  return (
    <div className="w-full h-screen">
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
          style={{
            touchAction: 'none',
            height: '100%',
            width: '100%',
          }}
        >
          <Experience />
        </Canvas>
      </KeyboardControls>
    </div>
  )
}

export default ExperiencePage
