import React, { useRef, createRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, ScrollControls, Scroll } from '@react-three/drei';

// custom three.js components
import { LouCube } from '../../components/LouCube';

import './ResumeCanvas.scss';

const ResumeCanvas = () => {
  // const [zoom, setZoom] = useState(75)
  // const [top, createTop] = useState(createRef())


  // const scrollArea = useRef()
  // const onScroll = (e) => (top.current = e.target.scrollTop)
  // useEffect(() => onScroll({ target: scrollArea.current }), [])

  return (

    <div id="ResumeCanvasContainer">

      <Canvas id="ResumeCanvas" dpr={window.devicePixelRatio}>

        {/* <ScrollControls> */}

          <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={2} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
          />
          
          <color attach="background" args={['#020e17']} />

          <ambientLight intensity={1} />

          {/* <directionalLight position={[0, 0, 5]} /> */}

          {/* <LouCube position={[8,1,-2]} /> */}

          {/* <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
            <div style={{ height: `100vh` }} />
          </div> */}

        {/* </ScrollControls> */}

      </Canvas>

    </div>

  );
};

export default ResumeCanvas;