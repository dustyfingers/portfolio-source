import React from 'react'
import styles from '../styles/SkillStyles'
import { withStyles } from "@material-ui/styles";

const Skill = ({skill, classes}) => (
    <span className={classes.skill}>{skill}</span>
)

export default withStyles(styles)(Skill);