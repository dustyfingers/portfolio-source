import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProjectCard = ({ description, title, image, siteLink, repoLink, showSiteLink, showRepoLink, open }) => {
    return (
        <Card>
            <a href={siteLink}>
                <CardActionArea>
                    <CardMedia
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
            </a>
            <CardActions>
                {showSiteLink &&
                    <a href={siteLink} alt={`Live site for ${title}`}>
                        <Button variant="outlined" color="primary" size={open ? 'small' : 'medium'}>
                            Website
                        </Button>
                    </a>
                }
                {showRepoLink &&
                    <a href={repoLink} alt={`Code for ${title}`}>
                        <Button variant="outlined" color="primary" size={open ? 'small' : 'medium'}>
                            Code
                        </Button>
                    </a>
                }
            </CardActions>
        </Card >
    )
}

export default ProjectCard;