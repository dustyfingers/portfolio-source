import React, { Suspense } from 'react';

import ResumeCanvas from '../../components/ResumeCanvas/ResumeCanvas';
import ResumeContent from '../../components/ResumeContent/ResumeContent';
import './Resume.scss';

const Resume = () => {
    return (
        // TODO: fallback needs to be a LoadingWheel component
        <Suspense fallback={null}>
            {/* <ResumeCanvas /> */}
            <ResumeContent />
        </Suspense>
    );
};

export default Resume;
