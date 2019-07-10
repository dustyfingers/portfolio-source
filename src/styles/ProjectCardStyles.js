import { makeStyles } from '@material-ui/core/styles';
import sizes from '../styles/sizes';

const useStyles = makeStyles({
    card: {
        width: '22%',
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
            width: '80%',
            maxHeight: '400px'
        },
        [sizes.down('xs')]: {
            width: '90%',
        },
    },
    description: {
        [sizes.down('xs')]: {
            display: 'none'
        },
    },
    media: {
        height: '12rem',
    },
    links: {
        color: '#465362',
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    },
    buttons: {
        size: 'small'
    }
});

export default useStyles;