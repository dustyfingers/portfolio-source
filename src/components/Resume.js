import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import sizes from '../styles/sizes';
import Footer from './Footer';


const styles = {
    resumeContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        width: '80%',
        margin: '0 auto',
    },
    sectionHeader: {
        marginTop: '0.5rem'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        [sizes.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center;'
        },
    },
    skills: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    skillsContainer: {
        display: 'flex',
        width: '75%',
        flexWrap: 'wrap',
        [sizes.down('sm')]: {
            width: '90%',
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    },
    skill: {
        borderRadius: '2px',
        fontSize: '1rem',
        backgroundColor: '#465362',
        color: 'white',
        padding: '4px 6px',
        margin: '1rem',
        cursor: 'pointer'
    },
    inline: {
        color: 'white'
    },
    headerLink: {
        color: 'white',
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    }
};


function ListItemLink(props) {
    return <ListItem button component="a" {...props}>{props.children}</ListItem>;
}


const Resume = ({ classes }) => {

    return (
        <section className={classes.resumeContainer}>
            <section className={classes.header}>
                <List>
                    <Typography variant='h4'>
                        Louie Williford
                    </Typography>
                    <Typography>
                        Full Stack Web Developer || React Developer
                    </Typography>
                </List>

                <List className={classes.contactInfo}>
                    <Typography>thereallouiew@gmail.com</Typography>
                    <a href='https://www.github.com/dustyfingers' className={classes.headerLink}>www.github.com/dustyfingers</a>
                    <Typography>(719)-229-6613</Typography>
                    <a href='/images/Louie-Williford.pdf' className={classes.headerLink}>Download my resume!</a>
                </List>
            </section>
            <section className={classes.projects}>
                <Typography variant='h4' className={classes.sectionHeader}>Projects</Typography>
                <List>
                    <ListItemLink href='https://zealous-kowalevski-5676d4.netlify.com/'>
                        <ListItemText
                            primary='pickr.io'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline} >
                                        Front End — picker.io is a small front end app built to create and organize color palettes on the fly. It is built with react.
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItemLink>
                    <ListItemLink href='https://vast-retreat-30517.herokuapp.com/'>
                        <ListItemText
                            className={classes.itemText}
                            primary='YelpCamp'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline} >
                                        Full Stack — YelpCamp is a full stack web app built to allow users to review campgrounds. It is built using HTML/CSS/Bootstrap 4 on the front end with an Express/MongoDB backend.
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItemLink>
                    <ListItemLink href='https://stack-cards.netlify.com/'>
                        <ListItemText
                            primary='Stack'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        UI Design/Front End — I designed and built the landing page and about page for a small app called 'Stack' alongside a distributed development team. I personally used HTML/SASS/Bootstrap 4/JS for this project.
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItemLink>
                </List>
            </section>
            <section className={classes.education}>
                <Typography variant='h4' className={classes.sectionHeader}>Education</Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Lambda School - Full Stack Web Development'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        05/19 - 02/20
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItem>
                </List>
            </section>
            <section className={classes.experience}>
                <Typography variant='h4' className={classes.sectionHeader}>Experience</Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary='Cell Phone Repair Technician - Dr.PhoneFix'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        10/18-05/19
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary='Tech Support Agent Tier I - Xerox Corp.'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        11/15-05/16
                                    </Typography>
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItem>
                </List>
            </section>
            <section className={classes.skills}>
                <Typography variant='h4' className={classes.sectionHeader}>Skills</Typography>
                <div className={classes.skillsContainer}>
                    <span className={classes.skill}>HTML & CSS</span>
                    <span className={classes.skill}>JavaScript(ES6)</span>
                    <span className={classes.skill}>Bootstrap 4</span>
                    <span className={classes.skill}>SASS</span>
                    <span className={classes.skill}>React</span>
                    <span className={classes.skill}>Express</span>
                    <span className={classes.skill}>Node.js</span>
                    <span className={classes.skill}>MongoDB</span>
                    <span className={classes.skill}>Git</span>
                    <span className={classes.skill}>Heroku</span>
                    <span className={classes.skill}>AWS Amplify & Route53</span>
                </div>
            </section>
            <Footer padding='4rem' />
        </section>
    );
}

export default withStyles(styles)(Resume);
