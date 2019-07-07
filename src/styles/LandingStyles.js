import sizes from './sizes';

export default {
    landingSection: {
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    header: {
        marginBottom: '1rem',
        [sizes.down('lg')]: {
            margin: '0.5rem auto',
            fontSize: '3rem'
        },
    },
    paragraph: {
        width: '60%',
        paddingBottom: '1rem',
        [sizes.down('sm')]: {
            width: '90%',
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
    },
    button: {
        padding: '1.125rem 1.5rem',
        [sizes.down('sm')]: {
            padding: '0.5rem .75rem'
        },
    },
    buttons: {
        display: 'flex',
        width: '25%',
        alignItems: 'center',
        justifyContent: 'space-around',
        [sizes.down('xl')]: {
            width: '35%'
        },
        [sizes.down('lg')]: {
            width: '45%'
        },
        [sizes.down('md')]: {
            width: '55%'
        },
        [sizes.down('sm')]: {
            width: '65%'
        },
        [sizes.down('xs')]: {
            width: '100%',

        },
    },
};