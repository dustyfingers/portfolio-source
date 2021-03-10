import React from "react";
import ProjectItem from "../components/ProjectItem";
import ContactIcon from "../components/ContactIcon";
import Skill from "../components/Skill";
import resumeData from '../data/data';
const { contact, projects, skills } = resumeData;


const Resume = () => (
  <section id="ResumeSection" className="main-section">
    <section>
      <div>
        <h4>Louie Williford</h4>
        <p>Full Stack Software Developer</p>
      </div>

      <div>
        <div>
          {contact.map(({...props}) => (
            <ContactIcon {...props} />
          ))}
        </div>
        <p>
          <a
            href="/resume-dl/Louie-Williford.pdf"
          >
            Download my Resume!
          </a>
        </p>
      </div>
    </section>
    <section>
      <h4>
        Projects
      </h4>
      <div>
        {/* PROJECT LIST*/}
        {projects.map(project => {
          const { title, desc, siteLink } = project;
          return <ProjectItem title={title} desc={desc} siteLink={siteLink} />;
        })}
      </div>
    </section>
    <section>
      <h4>
        Education
      </h4>
      <div>
        <div>
          <div>
            <p>Lambda School - Full Stack Web Development</p>
            <p>05/19 - 10/19</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4>
        Experience
      </h4>
      <div>
        <div>
          <div>
            <p>Jr. Web Developer - NativeRank</p>
            <p>10/19 - current</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h4>
        Skills
      </h4>
      <div>
        {skills.map(skill => (
          <Skill skill={skill} />
        ))}
      </div>
    </section>
  </section>
);

export default Resume;
