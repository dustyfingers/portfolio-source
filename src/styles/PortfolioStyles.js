import sizes from '../styles/sizes';

const styles = {
    projectsSection: {
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        flexDirection: 'column',
        [sizes.down('sm')]: {
            marginTop: '1rem'
        },
    },
    projectsHeader: {
        [sizes.down('sm')]: {
            fontSize: '2rem'
        },
    },
    projectCards: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'space-between',
        justifyContent: 'center',
        margin: '1rem auto'
    }
};

export default styles;