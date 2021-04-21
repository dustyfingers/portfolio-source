import React from 'react';

import "./PortfolioCard.scss";

const PortfolioCard = ({ description, title, image, siteLink, repoLink, showSiteLink, showRepoLink }) => {
    return (
        <div className="portfolio-card card h-100">
            <img src={image} className="card-img-top" alt={title} />
            <div className="portfolio-card-body card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="buttons">
                    {showSiteLink ? (<a href={siteLink} className="btn btn-primary ml-0 my-1 mr-1 portfolio-btn">Explore the Project</a>) : ''}
                    {showRepoLink ? (<a href={repoLink} className="btn btn-primary m-1 portfolio-btn">See the Code</a>) : ''}
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;