import React from "react";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import HomeIcon from "@material-ui/icons/Home";
import GraphIcon from "@material-ui/icons/GraphicEq";
import MenuIcon from "@material-ui/icons/Menu";

import classes from "./sidedrawer.modules.css";

const sideDrawer = () => {
  return (
    <div className={classes.list}>
      <List>
        <NavLink to="/" className={classes.link}>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/team-member-finder">
          <ListItem button key="Room">
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="Team Member Finder" />
          </ListItem>
        </NavLink>
        <NavLink to="/Team-Data">
          <ListItem button key="DataVis">
            <ListItemIcon>
              <GraphIcon />
            </ListItemIcon>
            <ListItemText primary="Team Data" />
          </ListItem>
        </NavLink>
        <NavLink to="/options">
          <ListItem button key="Options">
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Options" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default sideDrawer;
