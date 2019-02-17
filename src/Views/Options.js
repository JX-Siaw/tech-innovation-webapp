import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button/button";
import Button1 from "../Components/Button/notifson";
import Button2 from "../Components/Button/notifsoff";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class Options extends Component {
  constructor() {
    super();

      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: true};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
     let button;
     if (isLoggedIn) {
      button = <Button1 onClick={this.handleLogoutClick} style={{padding:"20px"}}/>;
    } else {
      button = <Button2 onClick={this.handleLoginClick} style={{padding:"20px"}}/>;
    }

    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      >
        <center>
          <br />
          <h1> Options </h1>
          <NavLink to="/SetDefaultLocation" style={{ textDecoration: "none" }}>
            <Button label="Set Default Location" />
          </NavLink>
          <br/>
          <Button style={{padding:"20px"}} label="Set WFH Days" />
          <br/>
          {button}
          <br/>
          </center>
        <p align="right" style={{ marginRight: "50px" }}>
          <NavLink to="/Home" style={{ textDecoration: "none" }}>
            <Button label="Save Options" />
          </NavLink>
        </p>
      </div>
    );
  }
}

export default Options;
