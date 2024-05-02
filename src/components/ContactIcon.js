import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import EmailIcon from './svg/EmailIcon';
import GithubIcon from './svg/GithubIcon';

const ContactIcon = ({ link, name }) => {
    const determineIcon = () => {
        switch (name) {
            case 'linkedin':
                return <LinkedInIcon />;
            case 'github':
                return <GithubIcon />;
            case 'email':
                return <EmailIcon />;
        }
    };
    return (
        <div className="p-1 mx-1">
            <a href={link}>{determineIcon(name)}</a>
        </div>
    );
};

export default ContactIcon;
