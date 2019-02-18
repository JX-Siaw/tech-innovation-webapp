import React, { Component } from "react";
import Button from "../Components/Button/button";
import { Link } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class Locations extends Component {

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
          <br />
          <h1> Where are you working today?</h1>
          <br />
            <Button component={Link} to="/SetDefaultLocation" label="Office" />
          <br />
            <Button label="Home" component={Link} to="/LoggedHome" />
          <br />
            <Button label="Out of office" component={Link} to="/OnSite" />
            <br/>
            <Button label="Leave" component={Link} to="/LoggedHome" />
        </center>
      </div>
    );
  }
}

export default Locations;
