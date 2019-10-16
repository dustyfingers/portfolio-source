import React from 'react'
import styles from '../styles/ContactIconStyles'
import { withStyles } from "@material-ui/styles";

const ContactIcon = ({classes, link, iconLink, alt}) => (
<a
href={link}
className={classes.headerLink}
>
<img
  src={iconLink}
  className={classes.contactIcon}
  alt={alt}
/>
</a>
)

export default withStyles(styles)(ContactIcon);

