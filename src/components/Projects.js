import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import ProjectCard from './ProjectCard';
import sizes from '../styles/sizes';

const styles = {
    projectsSection: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        flexDirection: 'column',
        [sizes.down('sm')]: {
            marginTop: '4rem'
        },
    },
    projectCards: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'space-between',
        justifyContent: 'center',
        margin: '4rem auto 2rem auto'
    }
};

const Projects = ({ classes }) => {
    return (
        <section className={classes.projectsSection}>
            <Typography variant='h1' className={classes.projectsHeader}>My Projects</Typography>
            <div className={classes.projectCards}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            
        </section>
    )
}

export default withStyles(styles)(Projects);
