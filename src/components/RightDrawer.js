import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import '../styles/App.css';


const RightDrawer = ({ classes, children, open, setOpen }) => {


    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h3" noWrap className={classes.title}>
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
            {children}
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
                <List>
                    <Link to='/' className={classes.navLink}>
                        <ListItem button>Home</ListItem>
                    </Link>
                    <Link to='/portfolio' className={classes.navLink}>
                        <ListItem button>My Portfolio</ListItem>
                    </Link>
                    <Link to='/resume' className={classes.navLink}>
                        <ListItem button>My Resume</ListItem>
                    </Link>
                </List>
            </Drawer>
        </>

    )
}

export default RightDrawer
