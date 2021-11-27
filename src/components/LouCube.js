import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';

export const LouCube = props => {

  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  const colorMap = useLoader(TextureLoader, 'images/headshot.jpg');

  return (
    <>
      <mesh 
        {...props}
        ref={mesh}
        scale={2}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        >
          <boxGeometry args={[10, 10, 10]} />
          {/* <meshPhongMaterial specularMap={specularMap} /> */}
          {/* normal map gets passedf in as prop to meshStandardMaterial like this */}
          {/* <meshStandardMaterial map={colorMap} normalMap={normalMap} /> */}
          <meshStandardMaterial map={colorMap} />
          {/* <OrbitControls 
            enableZoom={true} 
            enalbePan={true} 
            enableRatate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4} /> */}
      </mesh>
    </>
  )
}