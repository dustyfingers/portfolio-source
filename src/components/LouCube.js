import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// import wScroll from '../classes/wScroll';

const LouCube = props => {
    return (
        <mesh castShadow reveiveShadow position={[0, 0, 0]}>
            <boxGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial
                attach="material"
                emissive={new THREE.Color(0xff0000)}
                emissiveIntensity={1.5}
            />
        </mesh>
    );
};

export default LouCube;
