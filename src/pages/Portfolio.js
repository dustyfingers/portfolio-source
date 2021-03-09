import React from "react";
import ProjectCard from "../components/ProjectCard";
import resumeData from "../data/data";

const { projects } = resumeData;

// use css grid to lay these cards out

const Portfolio = ({ open }) => {
  
  return (
    <section>
      <h1>
        My Portfolio
      </h1>
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
    </section>
  );
};

export default Portfolio;
