import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './styles/App.css';


const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: '#465362',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
        '&:focus, &:hover, &:visited, &:link, &:active': {
            textDecoration: 'none',
            color: '#465362',
        }
    },
    Logo: {
        color: 'white !important'
    }
}));

const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap className={classes.title}>
                            <Link to='/' className={`${classes.navLink} ${classes.Logo}`}> Louie Williford </Link>
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/resume' component={Resume} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button >
                            <ListItemText>
                                <Link to='/' className={classes.navLink}>Home</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText>
                                <Link to='/projects' className={classes.navLink}>My Portfolio</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText>
                                <Link to='/resume' className={classes.navLink}>My Resume</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText>
                                <Link to='/contact' className={classes.navLink}>Contact Me</Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </Router >
    );
}


export default App;