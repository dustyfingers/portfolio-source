import React from 'react';

import LinkedInIcon from './svg/LinkedInIcon';
import EmailIcon from './svg/EmailIcon';
import GithubIcon from './svg/GithubIcon';

const ContactIcon = ({ link, name }) => {
    const determineIcon = () => {
        switch (name) {
            case 'linkedin':
                return <LinkedInIcon width={32} height={32} />;
            case 'github':
                return <GithubIcon width={32} height={32} />;
            case 'email':
                return <EmailIcon width={32} height={32} />;
        }
    };
    return (
        <a className="p-1 mx-1" href={link}>
            {determineIcon(name)}
        </a>
    );
};

export default ContactIcon;
