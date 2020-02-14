import React, { Component } from "react";
import "./Wizard.css";
import { Link, Route, Switch } from "react-router-dom";
import WizOne from "./WizOne";
import WizTwo from "./WizTwo";
import WizThree from "./WizThree";

class Wizard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wizardParent">
        <Link to="/" className="subnav_links">
          <button className="wizardButton">Cancel</button>
        </Link>
        <Switch>
          <Route path="/wizard/step1" component={WizOne} />
          <Route path="/wizard/step2" component={WizTwo} />
          <Route path="/wizard/step3" component={WizThree} />
        </Switch>
      </div>
    );
  }
}

export default Wizard;
