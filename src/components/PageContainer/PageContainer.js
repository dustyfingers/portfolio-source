import React from 'react';

import './PageContainer.scss';

const PageContainer = ({ children }) => {
    return <main className="page-container">{children}</main>;
};

export default PageContainer;
