import React from "react";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "../components/ProjectCard";
import resumeData from "../data/data";
import Footer from "../components/Footer";

const { projects } = resumeData;

const Portfolio = ({ open }) => {
  
  return (
    <section>
      <Typography variant="h3">
        My Portfolio
      </Typography>
      <div>
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

export default Portfolio;
