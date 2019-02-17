import React, { Component } from "react";
import Bubble from "../Components/Bubble/bubble";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import floorplan from "../Assets/Pictures/level7.jpg";

class AtOffice extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%"
        }}
      >
        <center
          style={{
            backgroundImage: "url(" + myImage + ")",
            backgroundSize: "cover",
            height: "100%"
          }}
        >
          <br />
          <h1>Team Member Location</h1>
          <div
            className="imageContainer"
            style={{
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              maxWidth: "70%",
              maxHeight: "70%",
              zoom: 1
            }}
          >
            <div>
              <Bubble
                id="1"
                colour="red"
                hovercolour="red"
                radius="8%"
                opacity="0.8"
                left="28%"
                top="6.2%"
              />

              <img
                src={floorplan}
                alt=""
                border="3"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              />
            </div>
          </div>
        </center>

        <br />
      </div>
    );
  }
}

export default AtOffice;
