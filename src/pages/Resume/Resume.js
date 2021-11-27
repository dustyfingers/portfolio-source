import React, { Suspense } from 'react';
// need uuid later dont delete bozo
// import { v4 as uuid } from 'uuid';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { MapControls, Stars } from '@react-three/drei';

// resume stuff
// import ResumeProjectItem from '../../components/ResumeProjectItem';
// import ExperienceItem from '../../components/ExperienceItem';
// import ContactIcon from '../../components/ContactIcon';
// import Skill from '../../components/Skill';
// import resumeData from '../../data/data';

// three.js components
import { LouCube } from '../../components/LouCube';

import './Resume.scss';

// const { contact, projects, skills, experience, education } = resumeData;

const Resume = () => {

  return (
    <>
      {/* todo: fallback needs to be a LoadingWheel component */}
      <Suspense fallback={null}>
        <div id="CanvasContainer">
          <Canvas>

            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={5000} // Amount of stars (default=5000)
              factor={2} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade // Faded dots (default=false)
            />

            <ambientLight intensity={1} />

            {/* <directionalLight position={[0, 0, 5]} /> */}

            <LouCube position={[3.5,0,0]} />

            <MapControls />

          </Canvas>
        </div>

        {/* #ResumeContainer from sketchpad.txt here */}
      </Suspense>
    </>
)};

export default Resume;
