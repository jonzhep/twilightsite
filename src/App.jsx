import { Canvas, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Caustics,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  useGLTF,
  Grid,
} from "@react-three/drei";
import { Color } from "three";
import { useEffect, useMemo, useRef } from "react";

import CSM from "three-custom-shader-material";
import Frag from "./shaders/Frag.js";
import { MeshTransmissionMaterial } from "./MeshTransmissionMaterial/index.ts";
import Vert from "./shaders/Vert.js";
import common from "./shaders/common.js";
import simplex from "./shaders/simplex.js";
import FBM from "./shaders/fbm.ts";
import { Ui3D } from "./Ui3D.tsx";
import tunnel from "tunnel-rat";
import { Ui } from "./Ui.tsx";
import { usePerf, PerfHeadless } from "r3f-perf";

function Thing() {
  const { nodes } = useGLTF("/diamond.glb");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: [
          new Color("#b308fc"),
          new Color("#fc089a"),
          new Color("#08c3fc"),
          new Color("#0845fc"),
          new Color("#fc089a"),
        ].map((col) => {
          const hsl = {
            h: 0,
            s: 0,
            l: 0,
          };
          col.getHSL(hsl);
          col.setHSL(
            hsl.h * 1, //
            hsl.s * 1,
            hsl.l * 0.5
          );

          return col.convertLinearToSRGB();
        }),
      },
      uTime: {
        value: 0,
      },
    }),
    []
  );

  const csmRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    console.log(csmRef.current);
  }, []);

  useFrame((state, dt) => {
    uniforms.uTime.value += dt;

    gridRef.current.visible = false;
    csmRef.current.base_update(state, csmRef.current.__r3f.parent);
    gridRef.current.visible = true;
  });

  return (
    <>
      <mesh
        geometry={nodes.diamond1.geometry}
        castShadow
        receiveShadow
        position={[-0.25, 1.1, 0]}
        scale={0.3}
        rotation={[Math.PI / 10, 0, 0]}
      >
        <CSM
          ref={csmRef}
          attach="material" ///
          baseMaterial={MeshTransmissionMaterial}
          uniforms={uniforms}
          fragmentShader={`
            ${common}
            ${simplex}
            ${FBM("simplex")}
            ${Frag}
          `}
          vertexShader={Vert}
          resolution={128}
          thickness={0.5}
          anisotropy={2}
          attenuationDistance={1}
          attenuationColor={new Color("#ffffff")}
        />
      </mesh>

      <Grid
        ref={gridRef}
        infiniteGrid
        position={[0, -0.001, 0]}
        args={[20, 20]}
        followCamera={false}
        fadeDistance={20}
        cellThickness={0.5}
        sectionThickness={2}
        sectionSize={2}
        cellSize={1}
        cellColor={"#fff"}
        sectionColor={"#000"}
      />
    </>
  );
}

const UiTunnel = tunnel();

function UIWrapper() {
  const fpsRef = useRef();

  const log = usePerf((s) => s.log);
  useFrame((state) => {
    fpsRef.current.innerText = `fps: ${Math.floor(log?.fps || 0)}`;
  });

  return (
    <>
      <PerfHeadless />

      <Ui3D />
      <UiTunnel.In>
        <Ui ref={fpsRef} />
      </UiTunnel.In>
    </>
  );
}

export default function App() {
  return (
    <>
      <Canvas shadows>
        <color attach="background" args={["#000"]} />
        <fog attach="fog" args={["#fff", 1, 100]} />

        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/fouriesburg_mountain_lookout_1k.hdr" />

        <PerspectiveCamera
          position={[-0.3, 2, 5]} //
          makeDefault
        />
        <OrbitControls
          makeDefault //
          target={[-0.1, 1, 0]}
          maxDistance={10}
          minDistance={1}
          enableZoom={false}
        />

        <Thing />

        <AccumulativeShadows opacity={0.5} temporal frames={100} scale={10}>
          <RandomizedLight amount={10} position={[3, 3, -5]} />
        </AccumulativeShadows>

        <UIWrapper />
      </Canvas>
      <UiTunnel.Out />
    </>
  );
}
