import React from 'react';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// custom three.js components
import { LouCube } from '../../components/LouCube';

import './ResumeCanvas.scss';

const ResumeCanvas = () => {
  return (

    <div id="ResumeCanvasContainer">

      <Canvas id="ResumeCanvas">

        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />

        <ambientLight intensity={1} />

        {/* <directionalLight position={[0, 0, 5]} /> */}

        <LouCube position={[4.75,4,-5]} />

      </Canvas>

    </div>

  );
};

export default ResumeCanvas;