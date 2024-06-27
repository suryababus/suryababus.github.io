import { useFrame } from "@react-three/fiber";
import { FunctionComponent, useMemo, useRef } from "react";
import { Points } from "three";
import "@react-three/drei";
import { useTexture } from "@react-three/drei";

interface ParticlesProps {}

const Particles: FunctionComponent<ParticlesProps> = () => {
  const cubeRef = useRef<Points>(null);
  const count = 100;
  const sep = 3;
  const directionRef = useRef(1);
  const [sprite] = useTexture(["/disc.png"]);

  let positions = useMemo(() => {
    let positions = [];
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = -Math.random() * 30 + 15;
        let z = -Math.random() * 30 + 15;
        let y = -Math.random() * 30 + 15;
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions); //merupakan array yang sesuai dengan buffer
  }, [count, sep]);

  useFrame(({ clock }) => {
    let cube = cubeRef.current;
    if (cube) {
      //   cube.position.y = Math.sin(clock.elapsedTime / 5);

      let direction = 10;
      cube.position.z = -Math.cos(clock.elapsedTime / 10) * 10;
      cube.position.y = Math.sin(clock.elapsedTime / 10) * 10;
    }
  });
  return (
    <points ref={cubeRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position" //attribute parameter yang akan dikontrol
          array={positions}
          count={positions.length / 3} //
          itemSize={3} //dikeranakan telah diketahui bahwa tiap arraytype axis akan berisi 3 value pada 1d array
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        map={sprite}
        transparent={true}
      />
    </points>
  );
};

export default Particles;
