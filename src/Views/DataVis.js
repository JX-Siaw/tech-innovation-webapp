import React, { Component } from "react";
import Charts from "../Components/Charts";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

class DataVis extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "110vh"
        }}
      >
        <Charts />
      </div>
    );
  }
}

export default DataVis;
