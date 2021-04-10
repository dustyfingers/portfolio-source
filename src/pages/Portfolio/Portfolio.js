import React from "react";

import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import resumeData from "../../data/data";
import "./Portfolio.scss";

const { projects } = resumeData;

const Portfolio = () => {
    return (
        <section id="PortfolioSection" className="main-section d-flex flex-column align-items-center">
            <h1 className="display-1 text-center">My Portfolio</h1>
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
                        <PortfolioCard
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
