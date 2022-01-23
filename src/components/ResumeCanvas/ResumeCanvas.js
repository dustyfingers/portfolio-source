import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
// import { useScrollPercentage } from 'react-scroll-percentage';

// custom three.js components
import { LouCube } from '../../components/LouCube';

import './ResumeCanvas.scss';

const ResumeCanvas = () => {

  // const [ref, percentage] = useScrollPercentage({ threshold: 0 });

  return (

    <div id="ResumeCanvasContainer" /* ref={ref} */ >

      <Canvas id="ResumeCanvas" dpr={window.devicePixelRatio}>

        {/* background */}
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />

        <color attach="background" args={['#020e17']} />

        {/* lighting */}
        <ambientLight intensity={1} />

        {/* <directionalLight position={[0, 0, 5]} /> */}
        
        {/* scene objects */}
        <LouCube position={[8,1,-2]} /* percentage={percentage} */ />


      </Canvas>

    </div>

  );
};

export default ResumeCanvas;