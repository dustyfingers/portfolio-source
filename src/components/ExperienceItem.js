import React from "react";


const ExperienceItem = ({jobTitle, to, from, location, employer, desc}) => {
    return (
        <div className="my-3">
            <p className="fs-4 m-1">{jobTitle}</p>
            <p className="m-1">{employer} - {location}</p>
            <p className="m-1">{to} to {from}</p>
            { desc ? (<p>{desc}</p>) : ''}
        </div>
    );
};

export default ExperienceItem;