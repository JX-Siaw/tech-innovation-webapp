import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import LocationButton from "../Components/Button/locationbutton";
import pinpointLogo from "../Assets/Pictures/Pinpoint-logo.png";
import Snack from "../Components/SnackBar/snack";

class LoggedOffice extends Component {
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
        <div align="right" style={{ marginRight: "30px" }}>
          <LocationButton
            label="Location: L5, Zone 4,242 Exhibition St, VIC"
            onClick={this.toggleData}
          />
        </div>
        <center>
          <br />
          <br />
          <div style={{display:"flex", justifyContent: "center"}}>
          <div>
          <h1>Telstra PinPoint</h1>
          </div>
          <div>
          <img
            className='pull-right'
            src={pinpointLogo}
            style={{
              height: 80,
              width: 65,
          }} />
          </div>
          </div>
          <br />
          <Button label="Log Location" component={Link} to="/Locations"/>
          <br />
          <Button label="Find Team" component={Link} to="/TeamMemberFinder"/>
          <br />
          <Button label="Options" component={Link} to="/Options"/>
        </center>
          <Snack/>
      </div>
    );
  }
}

export default LoggedOffice;
