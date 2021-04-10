import React from "react";

import ResumeProjectItem from "../../components/ResumeProjectItem";
import ExperienceItem from "../../components/ExperienceItem";
import ContactIcon from "../../components/ContactIcon";
import Skill from "../../components/Skill";
import resumeData from '../../data/data';
import "./Resume.scss";

const { contact, projects, skills, experience } = resumeData;

const Resume = () => (
    <section id="ResumeSection" className="main-section pb-2">
        {/* name/title section */}
        <div className="text-center">
            <h1 className="display-1">Louie Williford</h1>
            <p>Full Stack Software Developer</p>
        </div>

        {/* experience section */}
        <div>
            <p className="display-5">Experience</p>
            <div className="px-3">
                {experience.map(item => <ExperienceItem {...item} />)}
            </div>
        </div>

        {/* projects section */}
        <div>
            <p className="display-5">Projects</p>
            <div className="px-3">
                {projects.map(project => <ResumeProjectItem {...project} />)}
            </div>
        </div>

        {/* education section */}
        <div>
            <p className="display-5">Education</p>
            <div className="px-3">
                <p className="fs-4">Lambda School - Full Stack Web Development</p>
                <p className="px-2">05/19 - 10/19</p>
            </div>
        </div>

        {/* skills section */}
        <div>
            <p className="display-5">Top Skills</p>
            <div className="px-3 d-flex flex-wrap justify-content-evenly align-items-center skills">
                {skills.map(skill => (
                    <Skill skill={skill} />
                ))}
            </div>
        </div>

        {/* contact section */}
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
            <div className="d-flex py-2">
                {contact.map(({...props}) => (
                <ContactIcon {...props} />
                ))}
            </div>
            <a href={process.env.PUBLIC_URL + "/resume-dl/Louie-Williford.pdf"} type="button" className="btn btn-lg cta-btn my-2 mx-3" download>Download my Resume!</a>
        </div>
  </section>
);

export default Resume;
