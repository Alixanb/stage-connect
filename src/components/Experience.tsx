import {
  Environment,
  OrthographicCamera
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef } from "react";
import { OrthographicCamera as OrthographicCameraType } from "three";
import { CharacterController } from "./CharacterController";
import { InteractiveElements } from "./InteractiveElements";
import { Map } from "./Map";

type MapName = 'salle_numatrouffe';

type MapConfig = {
  scale: number;
  position: number[];
};

const mapConfig: MapConfig = {
  scale: 0.5,
  position: [0, -2, 0],
};

export const Experience = () => {
  const shadowCameraRef = useRef<OrthographicCameraType>(null);
  const { map } = useControls("Map", {
    map: {
      value: "salle_numatrouffe" as MapName,
      options: ["salle_numatrouffe"] as MapName[],
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>
      <Physics>
        <Map
          scale={mapConfig.scale}
          position={mapConfig.position}
          model={`models/${map}.glTF`}
        />
        <CharacterController />
        <InteractiveElements />
      </Physics>
    </>
  );
};
