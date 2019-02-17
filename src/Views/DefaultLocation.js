import React, { Component } from "react";
import { Link } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import pinpointLogo from "../Assets/Pictures/Pinpoint-logo.png";

class DefaultLocation extends Component {
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
          <Button
            label="Default Location: L5 242 Exhibition Street"
            onClick={this.toggleData}
          />
        </div>
        <center>
          <br />
          <br />
          <div style={{display:"flex",paddingLeft: "1100px"}}>
          <h1>Telstra PinPoint</h1>
          <img
            className='pull-right'
            src={pinpointLogo}
            alt=""
            style={{
              height: 100,
              width: 80,
          }} />
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

export default DefaultLocation;
