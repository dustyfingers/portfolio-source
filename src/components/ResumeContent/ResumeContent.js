import React from 'react';
import { v4 as uuid } from 'uuid';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import ContactIcon from '../../components/ContactIcon';
import Skill from '../../components/Skill';
import resumeData from '../../data/data';

import './ResumeContent.scss';
import { Typewriter } from 'react-simple-typewriter';

const { contact, projects, skills, experience, education, name, title } = resumeData;

const SectionTitle = ({ title }) => {
    return (
        <h3 className="text-center section-title">
            <Typewriter words={[title]} loop={0} />
        </h3>
    );
};

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
                <SectionTitle title="Experience" />
                {experience.map(item => (
                    <ExperienceItem {...item} key={`experience-item-${uuid()}`} />
                ))}
            </div>
            {/* education section */}
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                <SectionTitle title="Education" />
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
            <div className="projects-section mb-5 w-100 d-flex flex-column align-items-center">
                <SectionTitle title="Projects" />
                {projects.map(project => (
                    <ProjectItem {...project} key={`project-item-${uuid()}`} />
                ))}
            </div>
            {/* skills section */}
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                <SectionTitle title="Skills" />
                <div className="skills-content d-flex flex-wrap justify-content-center align-items-center">
                    {skills.map(skill => (
                        <Skill skill={skill} key={`skill-item-${uuid()}`} />
                    ))}
                </div>
            </div>
            {/* contact section */}
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex py-2 skills-content">
                    {contact.map(({ ...props }) => (
                        <ContactIcon {...props} key={`contact-item-${uuid()}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResumeContent;
