import React from "react";
import { v4 as uuid } from "uuid";

import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import resumeData from "../../data/data";
import "./Portfolio.scss";

const { projects } = resumeData;

const Portfolio = () => (
    <main className='container' id='PageContainer'>
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
                        }, index) => (
                            <div className="col-md-4 mt-4" key={`${title}-${uuid()}`} >
                                <PortfolioCard
                                    title={title}
                                    description={desc}
                                    image={image}
                                    siteLink={siteLink}
                                    repoLink={repoLink}
                                    showSiteLink={showSiteLink}
                                    showRepoLink={showRepoLink} />      
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    </main>
);

export default Portfolio;
