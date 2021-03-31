import React from "react";

const ContactIcon = ({link, iconLink, alt}) => (
    <div className="p-1 mx-1">
        <a href={link}>
            <img
                src={iconLink}
                alt={alt}
                className="contact-icon"
            />
        </a>
    </div>
)

export default ContactIcon;

