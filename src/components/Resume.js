import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import sizes from '../styles/sizes';


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
        justifyContent: 'center',
        alignItems: 'start',
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
    }
};


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
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
                    <Typography>www.thereallouiew.com</Typography>
                    <Typography>www.github.com/dustyfingers</Typography>
                    <Typography>(719)-229-6613</Typography>
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
                                        className={classes.inline}
                                        color="textPrimary">
                                        Front End
                                    </Typography>
                                    {" — picker.io is a small front end app built to create and organize color palettes on the fly. It is built with react. "}
                                </React.Fragment>
                            } >
                        </ListItemText>
                    </ListItemLink>
                    <ListItemLink href='https://vast-retreat-30517.herokuapp.com/'>
                        <ListItemText
                            primary='YelpCamp'
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary">
                                        Full Stack
                                    </Typography>
                                    {" — YelpCamp is a full stack web app built to allow users to review campgrounds. It is built using HTML/CSS/Bootstrap 4 on the front end with an Express/MongoDB backend."}
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
                                        UI Design/Front End
                                    </Typography>
                                    {" — I designed and built the landing page and about page for a small app called 'Stack' alongside a distributed development team. I personally used HTML/SASS/Bootstrap 4/JS for this project."}
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
                </div>
            </section>
        </section>
    );
}

export default withStyles(styles)(Resume);
