import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import myImage from "./Assets/Pictures/Pacific-RGB.png";

import NavBar from "./Components//NavBar/navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Home from "./Views/Home";
import TeamMemberFinder from "./Views/TeamMemberFinder";
import Locations from "./Views/Locations";
import InOffice from "./Views/InOffice";
import OnSite from "./Views/OnSite";
import Options from "./Views/Options";
import DataVis from "./Views/DataVis";
import DefaultLocation from "./Views/DefaultLocation";
import SetDefaultLocation from "./Views/SetDefaultLocation";
import LoggedHome from "./Views/LoggedHome";
import LoggedOffice from "./Views/LoggedOffice";
import LoggedOnSite from "./Views/LoggedOnSite";

import IndividualLocation from "./Views/IndividualLocation";

import "./styles.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    };
  }

  toggleDrawer = open => () => {
    this.setState({
      drawerIsOpen: open
    });
  };

  render() {
    return (
      <div
        style={{
        backgroundImage: "url(" + myImage + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100vh'
      }}>
        <CssBaseline />
        <Drawer
          open={this.state.drawerIsOpen}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <SideDrawer />
          </div>
        </Drawer>
        <NavBar
          onClick={() => {
            this.setState({ drawerIsOpen: true });
            console.log(this.state.drawerIsOpen);
          }}
        />
        <Switch>
          <Route path="/team-member-finder" component={TeamMemberFinder} />
          <Route path="/Team-Data" component={DataVis} />
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/inoffice" component={InOffice} />
          <Route path="/onsite" component={OnSite} />
          <Route path="/options" component={Options} />
          <Route path="/DefaultLocation" component={DefaultLocation} />
          <Route path="/SetDefaultLocation" component={SetDefaultLocation} />
          <Route path="/IndividualLocation" component={IndividualLocation} />
          <Route path="/Home" component={Home} />
          <Route path="/TeamMemberFinder" component={TeamMemberFinder}/>
          <Route path="/LoggedHome" component={LoggedHome}/>
          <Route path="/LoggedOffice" component={LoggedOffice}/>
          <Route path="/LoggedOnSite" component={LoggedOnSite}/>
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
