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

              <Bubble
                click={this.handleClickOpen}
                id="22"
                colour="red"
                radius="7%"
                opacity="0.5"
                left="11%"
                top="70.2%"
              />


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
