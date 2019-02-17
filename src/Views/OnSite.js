import React, {Component} from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import { Link } from "react-router-dom";
import Input from "@material-ui/core/Input";



const style = {
  background: "white",
  borderRadius: 9,
  border: 0,
  color: "black",
  height: 48,
  padding: "20px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)"
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
                    <br/>
                    <br/>

                    <h1>
                        Out of the office?
                    </h1>
                      <br/>  <br/>  <br/>  <br/>
                    <p1>
                        Please enter estimated time of return </p1>
                    <br/>
                    <br/>
                    <Input
                      style={style}
                      disableUnderline={true}
                      placeholder="Time:(HH:MM)"
                    />
                    <br/>  <br/>
                    <Button label="Confirm" component={Link} to="/LoggedHome" />
                </center>
            </div>
        );
    }
}

export default OnSite;
