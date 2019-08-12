import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import ProjectCard from './ProjectCard';
import data from '../data';
import Footer from './Footer';
import styles from '../styles/PortfolioStyles';


const Portfolio = ({ classes, open }) => (
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
                    key={index}
                    open={open} />
            ))}
        </div>
        <Footer />
    </section>
);

export default withStyles(styles)(Portfolio);
