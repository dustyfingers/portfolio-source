import React from "react";

const ContactIcon = ({link, iconLink, alt}) => (
<a
href={link}
>
<img
  src={iconLink}
  alt={alt}
/>
</a>
)

export default ContactIcon;

