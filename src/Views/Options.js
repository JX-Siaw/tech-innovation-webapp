import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Dropdown from "../Components/Dropdown/dropdown";
import Button from "../Components/Button/button";
import NotifButton from "../Components/NotifButton/NotifButton";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class Options extends Component {
  constructor(props) {
    super(props);

      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: true};
    }

    handleLoginClick() {
      this.setState({isLoggedIn: false});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: true});
    }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
     let button;
     if (isLoggedIn) {
      button = <Button onClick={this.handleLogoutClick} style={{padding:"20px"}} label = "Turn notifications on" />;
    } else {
      button = <Button onClick={this.handleLoginClick} style={{padding:"20px"}} label = "Turn notifications off"/>;
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
