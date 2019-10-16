import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import Footer from "../components/Footer";
import styles from "../styles/PortfolioStyles";

const Portfolio = ({ classes, open }) => {
  
  return (
    <section className={classes.projectsSection}>
      <Typography variant="h3" className={classes.projectsHeader}>
        My Portfolio
      </Typography>
      <div className={classes.projectCards}>
        {projects.map(({
                title,
                desc,
                image,
                siteLink,
                repoLink,
                showSiteLink,
                showRepoLink
              }, index) => 
                (<ProjectCard
                title={title}
                description={desc}
                component="img"
                image={image}
                alt={title}
                siteLink={siteLink}
                repoLink={repoLink}
                showSiteLink={showSiteLink}
                showRepoLink={showRepoLink}
                key={index}
                open={open}
              />)
          )}
      </div>
      <Footer />
    </section>
  );
};

export default withStyles(styles)(Portfolio);
