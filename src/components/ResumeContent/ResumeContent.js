import React from 'react';
import { v4 as uuid } from 'uuid';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import ContactIcon from '../../components/ContactIcon';
import Skill from '../../components/Skill';
import resumeData from '../../data/data';

import './ResumeContent.scss';

const { contact, projects, skills, experience, education, name, title } = resumeData;

const ResumeContent = () => {
    return (
        <div id="Resume" className="container">
            {/* name/title section */}
            <div className="text-center mb-5">
                <h1 className="display-1">{name}</h1>
                <h3>{title}</h3>
            </div>
            {/* experience section */}
            <div className="mb-5">
                <h3 className="text-center">Experience</h3>
                {experience.map((item, idx) => (
                    <ExperienceItem {...item} key={`experience-item-${uuid()}`} />
                ))}
            </div>
            {/* education section */}
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                <h3 className="text-center">Education</h3>
                <div>
                    <p className="fs-4 text-center">
                        {education.school} - {education.program}
                    </p>
                    <p className="text-center mb-0">
                        {education.from} - {education.to}
                    </p>
                </div>
            </div>
            {/* projects section */}
            <div className="mb-5">
                <h3 className="text-center">Projects</h3>
                {projects.map((project, idx) => (
                    <ProjectItem {...project} key={`project-item-${uuid()}`} />
                ))}
            </div>
            {/* skills section */}
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                <h3 className="text-center">Skills</h3>
                <div className="d-flex flex-wrap justify-content-evenly align-items-center skills w-75">
                    {skills.map((skill, idx) => (
                        <Skill skill={skill} key={`skill-item-${uuid()}`} />
                    ))}
                </div>
            </div>
            {/* contact section */}
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex py-2">
                    {contact.map(({ ...props }) => (
                        <ContactIcon {...props} key={`contact-item-${uuid()}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumeContent;
