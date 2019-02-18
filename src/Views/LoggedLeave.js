import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button/button";
import LocationButton from "../Components/Button/locationbutton";
import pinpointLogo from "../Assets/Pictures/Pinpoint-logo.png";
import Snack from "../Components/SnackBar/snack";

class LoggedHome extends Component {
  render() {
    return (
      <div
      >
        <div align="right" style={{ marginRight: "30px" }}>
          <LocationButton
            label="Location: Leave"
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
            alt=""
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

export default LoggedHome;
