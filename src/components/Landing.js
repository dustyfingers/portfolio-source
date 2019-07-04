import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from '../styles/LandingStyles';


const Landing = ({classes}) => {
    return (
        <section className={classes.landingSection}>
            <Typography variant='h6' className={classes.header}>
                Hi! I'm Louie.
            </Typography>
            <Typography paragraph className={classes.paragraph}>
                I'm a full stack web developer with a passion for learning about cutting edge technology.
                When I'm not building nimble, scalable web apps with React & Redux, Node.js, Express, MongoDB and AWS, you can
                find me at the park with my dogs or eating a home-cooked meal with my family!
            </Typography>
            <Typography paragraph className={`${classes.paragraph} ${classes.paragraph2}`}>
                I currently live and work in
                Colorado Springs, CO, but I am open to opportunities in any major city in the US.
            </Typography>
            <Link to='/projects' className={classes.buttonLink}>
                <Button variant="outlined" color="primary" className={classes.button}>
                    My Projects
                </Button>
            </Link>
        </section>
    )
}


export default withStyles(styles)(Landing);