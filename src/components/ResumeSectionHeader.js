import React from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import styles from "../styles/ResumeSectionHeader";

const ResumeSectionHeader = ({ classes, sectionTitle }) => (
  <Typography variant="h4" className={classes.sectionHeader}>
    {sectionTitle}
  </Typography>
);

export default withStyles(styles)(ResumeSectionHeader);
