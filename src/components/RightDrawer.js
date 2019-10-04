import React from "react";
import { Link, withRouter } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import "../styles/App.css";

const RightDrawer = ({ classes, children, open, setOpen, history }) => {
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
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h3" noWrap className={classes.title}>
            <Link to="/" className={`${classes.navLink} ${classes.Logo}`}>
              {" "}
              Louie Williford{" "}
            </Link>
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
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          <ListItem
            onClick={() => history.push("/")}
            className={classes.navLink}
            button
          >
            Home
          </ListItem>
          <ListItem
            onClick={() => history.push("/portfolio")}
            className={classes.navLink}
            button
          >
            My Portfolio
          </ListItem>
          <ListItem
            onClick={() => history.push("/resume")}
            className={classes.navLink}
            button
          >
            My Resume
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default withRouter(RightDrawer);
