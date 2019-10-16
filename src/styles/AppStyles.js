import { makeStyles } from '@material-ui/core/styles';
import {
    lightBgTextColor,
    navHeight,
    drawerWidth,
    mainColor
} from './variables';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: lightBgTextColor,
        height: '100vh',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: navHeight,
        justifyContent: 'center',
        backgroundColor: mainColor
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
        fontSize: '2rem'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    navLink: {
        textDecoration: 'none',
        color: '#465362',
        fontSize: '1.2rem',
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
            color: '#465362',
        }
    },
    Logo: {
        color: 'white !important',
        fontSize: '2rem !important'
    }
}));

export default useStyles;