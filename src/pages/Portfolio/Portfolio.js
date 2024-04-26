import React from 'react';
import { v4 as uuid } from 'uuid';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import resumeData from '../../data/data';
import './Portfolio.scss';

const { projects } = resumeData;

const Portfolio = () => (
    <main id="PageContainer">
        <section className="portfolio-section d-flex flex-column align-items-center">
            <h1 className="display-1 text-center">My Portfolio</h1>
            <div className="projects-grid mx-3">
                {projects.map(
                    ({
                        title,
                        desc,
                        image,
                        siteLink,
                        repoLink,
                        showSiteLink,
                        showRepoLink,
                    }) => (
                        <PortfolioCard
                            title={title}
                            description={desc}
                            image={image}
                            siteLink={siteLink}
                            repoLink={repoLink}
                            showSiteLink={showSiteLink}
                            showRepoLink={showRepoLink}
                            key={`${title}-${uuid()}`}
                        />
                    )
                )}
            </div>
        </section>
    </main>
);

export default Portfolio;
