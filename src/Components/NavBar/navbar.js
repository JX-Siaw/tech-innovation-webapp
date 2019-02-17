import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import telstraLogo from "../../Assets/Pictures/Logo.png";
import classes from "./navbar.modules.css";

const NavBar = props => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={props.onClick}>

                      <img
                        className='pull-right'
                        alt=""
                        src={telstraLogo}
                        style={{
                          height: 30,
                          width: 25,
                      }} />

                    </IconButton>

                    <div>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
