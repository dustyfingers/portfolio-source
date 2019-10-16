import sizes from './sizes';

export default {
    landingSection: {
        marginTop: '10vh',
        height: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        [sizes.down('xs')]: {
            marginTop: '5vh',
            height: '80vh'
        }
    },
    header: {
        marginBottom: '1rem',
        fontSize: '3rem',
        lineHeight: '2.5rem',
        [sizes.down('lg')]: {
            margin: '0.5rem auto',
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
        padding: '1rem',
        backgroundColor: 'rgba(255,255,255, 0)',
        borderRadius: 3,
        border: '0.5px solid black',
        boxShadow: '0 2px 4px 1px rgba(0, 0, 0, .1)',
        [sizes.down('sm')]: {
            padding: '0.5rem'
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