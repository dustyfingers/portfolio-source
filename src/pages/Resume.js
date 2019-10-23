import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Footer from "../components/Footer";
import styles from "../styles/ResumeStyles";
import projects from "../data/projects";
import skills from "../data/skills";
import contact from "../data/contact";

import ProjectItem from "../components/ProjectItem";
import ContactIcon from "../components/ContactIcon";
import SkillIcon from "../components/SkillIcon";
import ResumeSectionHeader from "../components/ResumeSectionHeader";

const Resume = ({ classes }) => (
  <section className={classes.resumeContainer}>
    <section className={classes.header}>
      <List>
        <Typography variant="h3">Louie Williford</Typography>
        <Typography>Software Developer || Full Stack Web Developer</Typography>
      </List>

      <List className={classes.contactInfo}>
        <div className={classes.contactIcons}>
          {contact.map(({ ...props }) => (
            <ContactIcon {...props} />
          ))}
        </div>
        <Typography>
          <a
            href="/resume-dl/Louie-Williford.pdf"
            className={classes.headerLink}
          >
            Download my Resume!
          </a>
        </Typography>
      </List>
    </section>
    <section className={classes.projects}>
      <ResumeSectionHeader sectionTitle="Projects" />
      <List>
        {/* PROJECT LIST*/}
        {projects.map(project => {
          const { title, desc, siteLink } = project;
          return <ProjectItem title={title} desc={desc} siteLink={siteLink} />;
        })}
      </List>
    </section>
    <section className={classes.education}>
      <ResumeSectionHeader sectionTitle="Education" />
      <List>
        <ListItem>
          <ListItemText
            primary="Lambda School - Full Stack Web Development"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  05/19 - 02/20
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
    </section>
    <section className={classes.experience}>
      <ResumeSectionHeader sectionTitle="Experience" />
      <List>
        <ListItem>
          <ListItemText
            primary="Cell Phone Repair Technician - Dr.PhoneFix"
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  10/18-05/19
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tech Support Agent Tier I - Xerox Corp."
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  11/15-05/16
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
      </List>
    </section>
    <section className={classes.skills}>
      <ResumeSectionHeader sectionTitle="Skills" />
      <div className={classes.skillsContainer}>
        {skills.map(skill => (
          <SkillIcon skill={skill} />
        ))}
      </div>
    </section>
    <Footer padding="4rem" />
  </section>
);

export default withStyles(styles)(Resume);
