import React from "react";
import Typography from "@material-ui/core/Typography";
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
        <Typography variant="h4">Louie Williford</Typography>
        <Typography>Full Stack Web Developer || React Developer</Typography>
      </List>

      <List>
        <div>
          {contact.map(({ ...props }) => (
            <ContactIcon {...props} />
          ))}
        </div>
        <Typography>
          <a
            href="/resume-dl/Louie-Williford.pdf"
          >
            Download my Resume!
          </a>
        </Typography>
      </List>
    </section>
    <section>
      <Typography variant="h4">
        Projects
      </Typography>
      <List>
        {/* PROJECT LIST*/}
        {projects.map(project => {
          const { title, desc, siteLink } = project;
          return <ProjectItem title={title} desc={desc} siteLink={siteLink} />;
        })}
      </List>
    </section>
    <section>
      <Typography variant="h4">
        Education
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Lambda School - Full Stack Web Development"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  05/19 - 10/19
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
    </section>
    <section>
      <Typography variant="h4">
        Experience
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Jr. Web Developer - NativeRank"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  10/19-current
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
    </section>
    <section>
      <Typography variant="h4">
        Skills
      </Typography>
      <div>
        {skills.map(skill => (
          <Skill skill={skill} />
        ))}
      </div>
    </section>
  </section>
);

export default Resume;
