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
    headerLink: {
        color: '#465362',
        textDecoration: 'none',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
        }
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    contactIcons: {
        marginBottom: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};


export default styles;