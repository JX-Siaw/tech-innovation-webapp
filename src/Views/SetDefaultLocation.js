import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "../Components/Dropdown/dropdown";
import DropdownB from "../Components/Dropdown/dropdownBuilding";
import DropdownF from "../Components/Dropdown/dropdownFloor";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";


class SetDefaultLocation extends Component {
  render() {
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
          <h1> Set Office Location </h1>
          <br />
        </center>
        <center>
          State
          <Dropdown/>
          Building
          <DropdownB />
          Floor
          <DropdownF />
        </center>
        <p align="right" style={{ marginRight: "400px" }}>
            <Button label="Save Location" component={Link} to="/InOffice"/>
        </p>
      </div>
    );
  }
}

export default SetDefaultLocation;
