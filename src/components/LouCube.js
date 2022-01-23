import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

import wScroll from '../classes/wScroll';

export const LouCube = props => {

  const meshRef = useRef();

  const colorMap = useLoader(TextureLoader, 'images/headshot.jpg');

  // set off to side
  // on scroll, animate position

  const handleScroll = (topOffset) => {

    const scroller = new wScroll();
    
    // this is kind of broken but usable for now
    const percentage = scroller.get_scroll_percentage();

    console.log({percentage})
    console.log({topOffset})

    // no top offset means we are at the top of the document
    if (!topOffset) {
      meshRef.current.position.x = 8;
      meshRef.current.position.y = 1;
      meshRef.current.position.z = -2;
      
    }

    // else if (percentage === 100) {
    //   meshRef.current.position.x = 8;
    //   meshRef.current.position.y = 1;
    //   meshRef.current.position.z = -2;
    // }

    else {
      meshRef.current.position.y = meshRef.current.position.y + (topOffset / 100) * -1;
    }

  }

  const scrollEvent = () => handleScroll(window.scrollY);

  // rotate cube every frame
  useFrame((state, delta) => {

    // handle rotation through frames
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.z += 0.01;

  })

  useEffect(() => document.addEventListener('scroll', scrollEvent), [])

  useEffect(() => () => document.removeEventListener('scroll', scrollEvent), [])

  return (
    <mesh 
      ref={meshRef}
      {...props} >
        <boxGeometry args={[1, 1, 1]} />
        {/* <meshPhongMaterial specularMap={specularMap} /> */}
        {/* normal map gets passedf in as prop to meshStandardMaterial like this */}
        {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}