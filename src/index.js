import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router, NavLink } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import NavBar from "./Components//NavBar/navbar";
import SideDrawer from "./Components/SideDrawer/sidedrawer";
import Home from "./Views/Home";
import TeamMemberFinder from "./Views/TeamMemberFinder";
import Locations from "./Views/Locations";
import InOffice from "./Views/InOffice";
import OnSite from "./Views/OnSite";
import Options from "./Views/Options";
import DataVis from "./Views/DataVis";
import ComponentDemo from "./Views/ComponentDemo";
import DefaultLocation from "./Views/DefaultLocation";
import SetDefaultLocation from "./Views/SetDefaultLocation";

import "./styles.css";

const history = createBrowserHistory();

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
      <div>
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
          }}
        />
        <Switch>
          <Route path="/team-member-finder" component={TeamMemberFinder} />
          <Route path="/Team-Data" component={DataVis} />
          <Route path="/component-demo" component={ComponentDemo} />
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/inoffice" component={InOffice} />
          <Route path="/onsite" component={OnSite} />
          <Route path="/options" component={Options} />
          <Route path="/DefaultLocation" component={DefaultLocation} />
          <Route path="/SetDefaultLocation" component={SetDefaultLocation} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  rootElement
);
