import React from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

// custom three.js components
import LouCube from '../LouCube';
import ResumeContent from '../ResumeContent/ResumeContent';
import EffectsRig from '../EffectsRig/EffectsRig';

import './ResumeCanvas.scss';
import Clump from '../Clump/Clump';
import Pointer from '../Pointer/Pointer';

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
                />
                {/* <Html center>
                    <ResumeContent />
                </Html> */}
                <color attach="background" args={['blue']} />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <Physics gravity={[0, 2, 0]} iterations={40}>
                    <Pointer />
                    <Clump />
                </Physics>
                <EffectsRig />
            </Canvas>
        </>
    );
};

export default ResumeCanvas;
