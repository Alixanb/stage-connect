// Import your GLB files
import sofaModel from "../../public/models/sofa.glb";
export const interactiveElements = [
  {
    id: "sofa-1",
    position: [10, 0, 5] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    scale: 1,
    title: "Sofa",
    content: "A comfortable looking sofa",
    type: "interactive",
    model: sofaModel,
  },
];
