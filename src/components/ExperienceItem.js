import React from "react";


const ExperienceItem = ({jobTitle, to, from, location, employer, bullets}) => {
    return (
        <div className="my-3">
            <p className="fs-4 m-1">{jobTitle}</p>
            <p className="m-1 px-2">{employer} - {location}</p>
            <p className="m-1 px-2">{from} to {to}</p>
            { bullets && <ul>{bullets.map((bullet, idx) => <li className="px-2" key={`bullet-item-${idx}`}>{bullet}</li>)}</ul>}
        </div>
    );
};

export default ExperienceItem;