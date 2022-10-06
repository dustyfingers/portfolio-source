import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, PresentationControls } from '@react-three/drei';

// custom three.js components
import { LouCube } from '../../components/LouCube';

import './ResumeCanvas.scss';

const ResumeCanvas = () => {

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

        <PresentationControls
          global={false} // Spin globally or by dragging the model
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config = { { mass: 1, tension: 170, friction: 26 } } >
            
            {/* scene objects */}
            {/* <LouCube position={[8,1,-2]} /> */}

        </PresentationControls>

      </Canvas>

    </div>

  );
};

export default ResumeCanvas;