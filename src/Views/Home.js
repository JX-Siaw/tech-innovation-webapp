import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import pinpointLogo from "../Assets/Pictures/Pinpoint-logo.png";
import Button from "../Components/Button/button";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <br />
          <br />
          <br /><br /><br /><br />
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
      </div>
    );
  }
}

export default Home;
