import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
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
      {...props}
      onWheel={evt => handleWheel()}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshPhongMaterial specularMap={specularMap} /> */}
      {/* normal map gets passedf in as prop to meshStandardMaterial like this */}
      {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}