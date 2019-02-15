import React from "react";
import { NavLink } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeskIcon from "@material-ui/icons/DesktopMac";
import RoomIcon from "@material-ui/icons/MeetingRoom";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import GraphIcon from "@material-ui/icons/GraphicEq";
import MenuIcon from "@material-ui/icons/Menu";
import LocationIcon from "@material-ui/icons/NotListedLocation";
import DirectionIcon from "@material-ui/icons/DirectionsWalk";
import SearchIcon from "@material-ui/icons/LocationSearching";

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
        <NavLink to="/meeting-room-finder">
          <ListItem button key="Room">
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary="Meeting Room Finder" />
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
