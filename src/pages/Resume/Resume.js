import React, { Suspense } from 'react';
// need uuid later dont delete bozo
// import { v4 as uuid } from 'uuid';
import { Canvas } from '@react-three/fiber';

// resume stuff
// import ResumeProjectItem from '../../components/ResumeProjectItem';
// import ExperienceItem from '../../components/ExperienceItem';
// import ContactIcon from '../../components/ContactIcon';
// import Skill from '../../components/Skill';
// import resumeData from '../../data/data';

// three.js stuff
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
            <ambientLight intensity={1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <LouCube />

          </Canvas>
        </div>

        {/* #ResumeContainer from sketchpad.txt here */}
      </Suspense>
    </>
)};

export default Resume;
