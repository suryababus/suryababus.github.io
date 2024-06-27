import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FunctionComponent, Suspense } from "react";
import Particles from "./particles";

interface BackgroundParticlesProps {}

const BackgroundParticles: FunctionComponent<BackgroundParticlesProps> = () => {
  return null;
  return (
    <Suspense>
      <Canvas className=" ">
        <Suspense fallback={null}>
          <ambientLight intensity={10} />
          <perspectiveCamera position={[0, 0, 5]} />
          <OrbitControls />
          <fog color="blue" near={0.1} far={100} attach={"fog"} />
          <Particles />
        </Suspense>
      </Canvas>
    </Suspense>
  );
};

export default BackgroundParticles;
