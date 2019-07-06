import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import ProjectCard from './ProjectCard';
import sizes from '../styles/sizes';
import data from '../data';
import Footer from './Footer';

const styles = {
    projectsSection: {
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        flexDirection: 'column',
        [sizes.down('sm')]: {
            marginTop: '1rem'
        },
    },
    projectsHeader: {
        [sizes.down('sm')]: {
            fontSize: '2rem'
        },
    },
    projectCards: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'space-between',
        justifyContent: 'center',
        margin: '1rem auto'
    }
};

const Portfolio = ({ classes }) => {
    return (
        <section className={classes.projectsSection}>
            <Typography variant='h3' className={classes.projectsHeader}>My Portfolio</Typography>
            <div className={classes.projectCards}>
                {data.map((item, index) => (
                    <ProjectCard
                        title={item.title}
                        description={item.desc}
                        component='img'
                        image={`/images/${item.image}`}
                        alt={item.title}
                        siteLink={item.siteLink}
                        repoLink={item.repoLink}
                        showSiteLink={item.showSiteLink}
                        showRepoLink={item.showRepoLink}
                        key={index} />
                ))}
            </div>
            <Footer />
        </section>
    )
}

export default withStyles(styles)(Portfolio);
