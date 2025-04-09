import { Html, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { RigidBody, useRapier } from "@react-three/rapier"
import { useRef, useState } from "react"
import { Group, Vector3 } from "three"

interface InteractiveElementProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  title: string
  content: string
  model: string
}

export const InteractiveElement = ({
  position,
  rotation = [0, 0, 0],
  scale = 1,
  title,
  content,
  model
}: InteractiveElementProps) => {
  const [isActive, setIsActive] = useState(false)
  const [isPopupVisible, setPopupVisible] = useState(false)
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(model)
  const [clonedScene] = useState(() => scene.clone())
  const { rapier, world } = useRapier()
  const { camera } = useThree()

  // Calculate screen position for popup
  const screenPosition = new Vector3()
  if (groupRef.current) {
    screenPosition.copy(position)
    screenPosition.project(camera)
  }

  const handleModelClick = (e: any) => {
    e.stopPropagation()
    setPopupVisible((visible) => !visible)
  }

  return (
    <>
      <group position={position} rotation={rotation} ref={groupRef}>
        <RigidBody type="fixed" colliders="trimesh">
          <primitive
            object={clonedScene}
            scale={scale}
            onClick={handleModelClick}
            onPointerEnter={(e) => {
              e.stopPropagation()
              document.body.style.cursor = "pointer"
            }}
            onPointerLeave={() => {
              document.body.style.cursor = "default"
            }}
          />
        </RigidBody>
      </group>
      {isPopupVisible && (
        <Html
          position={[0, scale + 1, 0]}
          style={{
            backgroundColor: "white",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
          distanceFactor={10}
        >
          <div>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </Html>
      )}
    </>
  )
}