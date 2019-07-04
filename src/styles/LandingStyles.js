import sizes from './sizes';

export default {
    landingSection: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        [sizes.down('sm')]: {
            marginTop: '4rem'
        },
    },
    header: {
        [sizes.down('lg')]: {
            margin: '1rem auto'
        },
        [sizes.down('sm')]: {
            lineHeight: '2.5rem'
        },
    },
    paragraph: {
        width: '60%',
        padding: '1.5rem',
        [sizes.down('sm')]: {
            width: '90%',
            padding: '0 0.5rem'
        },
        [sizes.down('xs')]: {
            width: '100%',
        },
    },
    paragraph2: {
        [sizes.down('xs')]: {
            display: 'none',
        },
    },
    buttonLink: {
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    }
};