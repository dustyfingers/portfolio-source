import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';

export const LouCube = props => {

  const colorMap = useLoader(TextureLoader, 'images/headshot.jpg');

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshPhongMaterial specularMap={specularMap} /> */}
      {/* normal map gets passedf in as prop to meshStandardMaterial like this */}
      {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
      <meshStandardMaterial map={colorMap} />
      <OrbitControls 
        enableZoom={true} 
        enalbePan={true} 
        enableRatate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4} />
    </mesh>
  )
}