import React from 'react';
import { v4 as uuid } from 'uuid';

const ExperienceItem = ({ jobTitle, to, from, location, employer, bullets }) => {
    return (
        <div className="my-3">
            <p className="fs-4 m-1">
                {employer} - {location}
            </p>
            <p className="m-1">{jobTitle}</p>
            <p className="m-1">
                {from} to {to}
            </p>
            {bullets && (
                <ul>
                    {bullets.map((bullet, idx) => (
                        <li key={`bullet-item-${uuid()}`}>{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceItem;
