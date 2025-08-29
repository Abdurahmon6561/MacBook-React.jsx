import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
import { Environment, ScrollControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="absolute top-2 left-1/2 -translate-x-1/2  text-white">
        <h2 className="text-7xl tracking-tighter font-bold ">macbook pro</h2>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr"
          }
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
