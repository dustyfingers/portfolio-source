import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';

export const LouCube = props => {

  const meshRef = useRef();

  const colorMap = useLoader(TextureLoader, 'images/headshot.jpg');

  // set off to side
  // on scroll, animate position

  const handleWheel = evt => {
    console.log('wheelin and dealin!');
  }

  // rotate cube every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.z += 0.01;
  })

  return (
    <mesh 
      ref={meshRef}
      onWheel={evt => handleWheel()}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshPhongMaterial specularMap={specularMap} /> */}
      {/* normal map gets passedf in as prop to meshStandardMaterial like this */}
      {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
      <meshStandardMaterial map={colorMap} />
      <OrbitControls 
        enableZoom={false} 
        enalbePan={true} 
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4} />
    </mesh>
  )
}