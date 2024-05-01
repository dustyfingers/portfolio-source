import React, { Suspense } from 'react';

import ResumeContent from '../../components/ResumeContent/ResumeContent';
import './Resume.scss';
import PageContainer from '../../components/PageContainer/PageContainer';

const Resume = () => {
    return (
        <PageContainer>
            <ResumeContent />
        </PageContainer>
    );
};

export default Resume;
