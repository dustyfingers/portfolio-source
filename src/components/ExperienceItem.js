import React from "react";


const ExperienceItem = ({jobTitle, to, from, location, employer, desc}) => {
    return (
        <div className="my-3">
            <p className="fs-4 m-1">{jobTitle}</p>
            <p className="m-1 px-2">{employer} - {location}</p>
            <p className="m-1 px-2">{from} to {to}</p>
            { desc ? (<p className="px-2">{desc}</p>) : ''}
        </div>
    );
};

export default ExperienceItem;