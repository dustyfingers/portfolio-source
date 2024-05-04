import React from 'react';
import { v4 as uuid } from 'uuid';

import './ExperienceItem.scss';

const ExperienceItem = ({ jobTitle, to, from, location, employer, bullets }) => {
    return (
        <div className="my-3 experience-item d-flex flex-column align-items-center">
            <h5 className="mb-1 top-item">
                {employer} - {location}
            </h5>
            <p className="mb-1 top-item">{jobTitle}</p>
            <p className="mb-1 top-item">
                {from} to {to}
            </p>
            {bullets && (
                <ul className="experience-list">
                    {bullets.map(bullet => (
                        <li key={`bullet-item-${uuid()}`}>{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceItem;
