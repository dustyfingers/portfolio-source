import React from 'react';

import './ProjectItem.scss';

const ProjectItem = ({ title, desc, siteLink }) => {
    return (
        <a href={siteLink} className="project-item">
            <h5 className="project-title">{title}</h5>
            <p className="project-detail">{desc}</p>
        </a>
    );
};

export default ProjectItem;
