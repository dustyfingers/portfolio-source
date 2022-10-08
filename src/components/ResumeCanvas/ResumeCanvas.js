import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Stars, PerspectiveCamera, PresentationControls, Html } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import { motion, useScroll, useInView } from 'framer-motion';

// custom three.js components
import LouCube from '../LouCube';
import ResumeContent from '../ResumeContent/ResumeContent';

import './ResumeCanvas.scss';

const ResumeCanvas = () => {
    // const { scrollY } = useScroll();

    // useEffect(() => console.log(scrollY), [scrollY]);

    return (
        <>
            <Canvas id="ResumeCanvas" dpr={window.devicePixelRatio}>
                <gridHelper />
                <PerspectiveCamera
                    makeDefault
                    fov={45}
                    aspect={window.innerWidth / window.innerHeight}
                    near={1}
                    far={1000}
                    position={new THREE.Vector3(0, 2, 14)}
                    // rotation={new THREE.Euler(-0.7, -0.2, -0.2)}
                />
                <LouCube position={[0, 0, 0]} />
                <Html center>
                    <ResumeContent />
                </Html>
                {/* <color attach="background" args={['red']} />
                <PresentationControls>
                    <Stars
                        radius={100} // Radius of the inner sphere (default=100)
                        depth={50} // Depth of area where stars should fit (default=50)
                        count={5000} // Amount of stars (default=5000)
                        factor={2} // Size factor (default=4)
                        saturation={0} // Saturation 0-1 (default=0)
                        fade // Faded dots (default=false)
                    />

                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                </PresentationControls>
                <EffectComposer>
                    <Noise opacity={0.9} />
                </EffectComposer> */}
            </Canvas>
        </>
    );
};

export default ResumeCanvas;
