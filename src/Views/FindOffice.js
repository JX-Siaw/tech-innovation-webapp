import React, { Component } from "react";
import Bubble from "../Components/Bubble/bubble";
import floorplan from "../Assets/Pictures/level7.jpg";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";



class FindOffice extends Component {
  render() {
    return (
      <div
      >
        <center
        >
          <br />
          <h1> Where is my team?</h1>
          <div
            className="imageContainer"
            style={{
              textAlign: "center",
              position: "relative",
              display: "inline-block",
              maxWidth: "70%",
              maxHeight: "70%",
              zoom: 1,
            }}
          >
            <div style={{
                        backgroundImage: "url(" + floorplan + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "100%"
            }}>
              // <Bubble
              //   click={this.handleClickOpen}
              //   id="1"
              //   colour="grey"
              //   hovercol our="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="28%"
              //   top="6.2%"
              //   />
              // <Bubble
              //   click={this.handleClickOpen}
              //   id="2"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="41%"
              //   top="6.2%"
              // />
              // <Bubble
              //   click={this.handleClickOpen}
              //   id="3"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="52%"
              //   top="6.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="4"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="65%"
              //   top="6.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="5"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="78%"
              //   top="6.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="6"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="26%"
              //   top="15%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="7"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="38%"
              //   top="15%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="8"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="5%"
              //   opacity="0.5"
              //   left="48%"
              //   top="17%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="9"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="56%"
              //   top="15%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="10"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="67%"
              //   top="15%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="11"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="79%"
              //   top="15%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="12"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="23%"
              //   top="27%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="13"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="8%"
              //   opacity="0.5"
              //   left="83%"
              //   top="27%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="14"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="6%"
              //   opacity="0.5"
              //   left="25%"
              //   top="43%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="15"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="6%"
              //   opacity="0.5"
              //   left="83%"
              //   top="44%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="16"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="11%"
              //   top="53%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="17"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="19%"
              //   top="53%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="18"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="84.5%"
              //   top="53%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="19"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="84.5%"
              //   top="60%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="20"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="19%"
              //   top="60%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="21"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="11%"
              //   top="60%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="22"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="11%"
              //   top="70.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="23"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="17%"
              //   top="70.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="24"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="22.3%"
              //   top="75.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="25"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="76%"
              //   top="72.2%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="26"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="84.5%"
              //   top="71%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="27"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="11%"
              //   top="79%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="28"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="17%"
              //   top="79%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="29"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="76%"
              //   top="80%"
              // />
              // <Bubble
              // click={this.handleClickOpen}
              //   id="30"
              //   colour="grey"
              //   hovercolour="#3f51b5"
              //   radius="7%"
              //   opacity="0.5"
              //   left="85%"
              //   top="78%"
              // />
              <img
                src={floorplan}
                alt=""
                border="3"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '70vh',
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

export default FindOffice;
