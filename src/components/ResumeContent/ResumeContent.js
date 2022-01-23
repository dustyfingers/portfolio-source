import React from 'react';
import { v4 as uuid } from 'uuid';

import ResumeProjectItem from '../../components/ResumeProjectItem';
import ExperienceItem from '../../components/ExperienceItem';
import ContactIcon from '../../components/ContactIcon';
import Skill from '../../components/Skill';
import resumeData from '../../data/data';

import './ResumeContent.scss';

const { contact, projects, skills, experience, education } = resumeData;

const ResumeContent = () => {
  return (
    <main id="ResumeContentContainer" className="main-section pb-2">

      <div id="Resume" className="container">

        {/* name/title section */}
        <div className="text-center px-5 pb-5">
            <h1 className="display-1">Louie Williford</h1>
            <p>Jr. Web Application Developer</p>
        </div>

        {/* experience section */}
        <div className="pb-4">
            <p className="display-5 text-center">Experience</p>
            <div>
                {experience.map((item, idx) => <ExperienceItem {...item} key={`experience-item-${uuid()}`}/>)}
            </div>
        </div>

        {/* education section */}
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
            <p className="display-5 text-center">Education</p>
            <div>
                <p className="fs-4 text-center">{education.school} - {education.program}</p>
                <p className="px-2 text-center">{education.from} - {education.to}</p>
            </div>
        </div>

        {/* projects section */}
        <div className="pb-4">
            <p className="display-5 text-center">Projects</p>
            <div>
                {projects.map((project, idx) => <ResumeProjectItem {...project} key={`project-item-${uuid()}`}/>)}
            </div>
        </div>

        {/* skills section */}
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
            <p className="display-5 text-center">Top Skills</p>
            <div className="d-flex flex-wrap justify-content-evenly align-items-center skills w-75">
                {skills.map((skill, idx) => <Skill skill={skill} key={`skill-item-${uuid()}`} />)}
            </div>
        </div>

        {/* contact section */}
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <div className="d-flex py-2">
                {contact.map(({...props}, idx) => <ContactIcon {...props} key={`contact-item-${uuid()}`} />)}
            </div>
            <a href="https://louies-resume.s3.us-east-2.amazonaws.com/Louie-Williford.pdf" target="_blank" rel="noreferrer" type="button" className="btn btn-lg cta-btn my-2 mx-3">Download my Resume!</a>
        </div>
        
      </div>
    </main>
  );
};

export default ResumeContent;