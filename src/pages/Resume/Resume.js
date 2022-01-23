import React, { Suspense } from 'react';

// resume components
import ResumeContent from '../../components/ResumeContent/ResumeContent';
import ResumeCanvas from '../../components/ResumeCanvas/ResumeCanvas';

import './Resume.scss';

const Resume = () => {

  return (
    <>
      {/* TODO: fallback needs to be a LoadingWheel component */}
      <Suspense fallback={null}>

        <div id="ResumeContainer">

          <ResumeCanvas />

          <ResumeContent />
          
        </div>

      </Suspense>
    </>
)};

export default Resume;
