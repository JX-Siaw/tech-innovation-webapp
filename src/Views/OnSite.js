import React, { Component } from "react";
import Button from "../Components/Button/button";
import Input from "@material-ui/core/Input";
import myImage from "../Assets/Pictures/Pacific-RGB.png";

const style = {
    background: "white",
    borderRadius: 9,
    border: 0,
    color: "black",
    height: 48,
    padding: "0 70px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)",
};

class OnSite extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundImage: "url(" + myImage + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh"
                }}>

                <center>
                    <br />
                    <br />

                    <h1>
                        On Site
                    </h1>
                    <p1>
                        How long will you be onsite?</p1>
                    <br />
                    <br />
                    <div style={{ margin: '20px' }}>
                        <Input
                            style={style}
                            disableUnderline={true}
                            onChange={this.handleChange}
                            placeholder="Time (hh:mm)"
                        />
                    </div>
                    <div style={{ margin: '40px' }}>
                        <Button label="Confirm" onClick={this.toggleData} />
                    </div>
                </center>
            </div>
        );
    }
}

export default OnSite;
