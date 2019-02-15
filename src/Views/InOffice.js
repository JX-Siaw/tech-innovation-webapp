import React, { Component } from "react";
import Button from "../Components/Button/button";
import Bubble from "../Components/Bubble/bubble";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import telstraLogo from "../Assets/Pictures/Logo.png";
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
            height: "100vh"
          }}
        >
          <br />
          <h1> Where in the office are you?</h1>
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
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="28%"
                top="6.2%"
              />
              <Bubble
                id="2"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="41%"
                top="6.2%"
              />
              <Bubble
                id="3"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="52%"
                top="6.2%"
              />
              <Bubble
                id="4"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="65%"
                top="6.2%"
              />
              <Bubble
                id="5"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="78%"
                top="6.2%"
              />
              <Bubble
                id="6"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="26%"
                top="15%"
              />
              <Bubble
                id="7"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="38%"
                top="15%"
              />
              <Bubble
                id="8"
                colour="grey"
                hovercolour="#3f51b5"
                radius="5%"
                opacity="0.5"
                left="48%"
                top="17%"
              />
              <Bubble
                id="9"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="56%"
                top="15%"
              />
              <Bubble
                id="10"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="67%"
                top="15%"
              />
              <Bubble
                id="11"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="79%"
                top="15%"
              />
              <Bubble
                id="12"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="23%"
                top="27%"
              />
              <Bubble
                id="13"
                colour="grey"
                hovercolour="#3f51b5"
                radius="8%"
                opacity="0.5"
                left="83%"
                top="27%"
              />
              <Bubble
                id="14"
                colour="grey"
                hovercolour="#3f51b5"
                radius="6%"
                opacity="0.5"
                left="25%"
                top="43%"
              />
              <Bubble
                id="15"
                colour="grey"
                hovercolour="#3f51b5"
                radius="6%"
                opacity="0.5"
                left="83%"
                top="44%"
              />
              <Bubble
                id="16"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="11%"
                top="53%"
              />
              <Bubble
                id="17"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="19%"
                top="53%"
              />
              <Bubble
                id="18"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="84.5%"
                top="53%"
              />
              <Bubble
                id="19"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="84.5%"
                top="60%"
              />
              <Bubble
                id="20"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="19%"
                top="60%"
              />
              <Bubble
                id="21"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="11%"
                top="60%"
              />
              <Bubble
                id="22"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="11%"
                top="70.2%"
              />
              <Bubble
                id="23"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="17%"
                top="70.2%"
              />
              <Bubble
                id="24"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="22.3%"
                top="75.2%"
              />
              <Bubble
                id="25"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="76%"
                top="72.2%"
              />
              <Bubble
                id="26"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="84.5%"
                top="71%"
              />
              <Bubble
                id="27"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="11%"
                top="79%"
              />
              <Bubble
                id="27"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="17%"
                top="79%"
              />
              <Bubble
                id="27"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="76%"
                top="80%"
              />
              <Bubble
                id="27"
                colour="grey"
                hovercolour="#3f51b5"
                radius="7%"
                opacity="0.5"
                left="85%"
                top="78%"
              />
              <img
                src={floorplan}
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
