import { interactiveElements } from "../data/interactiveElements"
import { InteractiveElement } from "./InteractiveElement"

export const InteractiveElements = () => {
  return (
    <group>
      {interactiveElements.map((element) => (
        <InteractiveElement
          key={element.id}
          {...element}
        />
      ))}
    </group>
  )
} 