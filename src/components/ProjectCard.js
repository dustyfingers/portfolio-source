import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import sizes from '../styles/sizes';

const useStyles = makeStyles({
    card: {
        width: '20%',
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [sizes.down('lg')]: {
            width: '30%'
        },
        [sizes.down('md')]: {
            width: '45%'
        },
        [sizes.down('sm')]: {
            width: '80%'
        },
    },
    media: {
        height: '12rem',
    },
    buttons: {
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    }
});

const ProjectCard = (props) => {
    const classes = useStyles();
    const { description, title, image, siteLink, repoLink, showSiteLink, showRepoLink } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {showSiteLink &&
                    <a href={siteLink} alt={`Live site for ${title}`} className={classes.buttons}>
                        <Button variant="outlined" color="primary" size='large' >
                            Website
                        </Button>
                    </a>
                }
                {showRepoLink &&
                    <a href={repoLink} alt={`Code for ${title}`} className={classes.buttons}>
                        <Button variant="outlined" color="primary" size='large' >
                            Code
                        </Button>
                    </a>
                }
            </CardActions>
        </Card >
    )
}

export default ProjectCard;