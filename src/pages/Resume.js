import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ProjectItem from "../components/ProjectItem";
import ContactIcon from "../components/ContactIcon";
import Skill from "../components/Skill";
import resumeData from '../data/data';

const { contact, projects, skills } = resumeData;

const Resume = () => (
  <section>
    <section>
      <List>
        <h4>Louie Williford</h4>
        <p>Full Stack Software Developer</p>
      </List>

      <List>
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
      </List>
    </section>
    <section>
      <h4>
        Projects
      </h4>
      <List>
        {/* PROJECT LIST*/}
        {projects.map(project => {
          const { title, desc, siteLink } = project;
          return <ProjectItem title={title} desc={desc} siteLink={siteLink} />;
        })}
      </List>
    </section>
    <section>
      <h4>
        Education
      </h4>
      <List>
        <ListItem>
          <ListItemText
            primary="Lambda School - Full Stack Web Development"
            secondary={
              <>
                <p
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  05/19 - 10/19
                </p>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
    </section>
    <section>
      <h4>
        Experience
      </h4>
      <List>
        <ListItem>
          <ListItemText
            primary="Jr. Web Developer - NativeRank"
            secondary={
              <>
                <p
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  10/19-current
                </p>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
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
