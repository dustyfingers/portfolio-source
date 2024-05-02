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
        <div className="p-1 mx-1">
            <a href={link}>{determineIcon(name)}</a>
        </div>
    );
};

export default ContactIcon;
