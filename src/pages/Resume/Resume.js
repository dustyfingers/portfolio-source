import React, { Suspense } from 'react';

import ResumeCanvas from '../../components/ResumeCanvas/ResumeCanvas';
import './Resume.scss';

const Resume = () => {
    return (
        // TODO: fallback needs to be a LoadingWheel component
        <Suspense fallback={null}>
            <ResumeCanvas />
        </Suspense>
    );
};

export default Resume;
