import React from "react";
import { Link, withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";

const RightDrawer = ({ children, open, setOpen, history }) => {
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
      >
        <Toolbar>
          <Typography variant="h3" noWrap>
            <Link to="/">
              {" "}
              Louie Williford{" "}
            </Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="end"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <List>
          <ListItem
            onClick={() => history.push("/")}
            button
          >
            Home
          </ListItem>
          <ListItem
            onClick={() => history.push("/portfolio")}
            button
          >
            My Portfolio
          </ListItem>
          <ListItem
            onClick={() => history.push("/resume")}
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
