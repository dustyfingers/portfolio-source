import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/SkillIconStyles";

const SkillIcon = ({ classes, skill }) => (
  <span className={classes.skill}>{skill}</span>
);

export default withStyles(styles)(SkillIcon);
