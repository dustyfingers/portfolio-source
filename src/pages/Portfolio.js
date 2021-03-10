import React from "react";
import ProjectCard from "../components/ProjectCard";
import resumeData from "../data/data";


const { projects } = resumeData;

// TODO: use css grid to lay these cards out
const Portfolio = () => {
  return (
    <section id="PortfolioSection" className="main-section">
      <h1>
        My Portfolio
      </h1>
      <div className="container">
        <div className="row">
          {projects.map(({
            title,
            desc,
            image,
            siteLink,
            repoLink,
            showSiteLink,
            showRepoLink
          }, index) => 
            (<div className="col-md mt-4">
                <ProjectCard
                  title={title}
                  description={desc}
                  image={image}
                  siteLink={siteLink}
                  repoLink={repoLink}
                  showSiteLink={showSiteLink}
                  showRepoLink={showRepoLink}
                  key={index} />      
              </div>)
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
