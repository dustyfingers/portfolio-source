import React from 'react';


const ProjectCard = ({ description, title, image, siteLink, repoLink, showSiteLink, showRepoLink }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {showSiteLink ? (<a href={siteLink} className="btn btn-primary">Explore the Project</a>) : ''}
                {showRepoLink ? (<a href={repoLink} className="btn btn-primary">See the Code</a>) : ''}
            </div>
        </div>
    );
}

export default ProjectCard;