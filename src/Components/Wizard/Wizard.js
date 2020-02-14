import React, { Component } from "react";
import "./Wizard.css";
import { Link, Route, Switch } from "react-router-dom";
import WizOne from "./WizOne";
import WizTwo from "./WizTwo";
import WizThree from "./WizThree";
import store, { CANCEL_ALL } from "../../store";

class Wizard extends Component {
  constructor() {
    super();
  }

  cancel = () => {
    store.dispatch({ type: CANCEL_ALL });
  };

  render() {
    return (
      <div className="wizContain">
       <div className="wizFlex">
          <div className="headerCancel">
            <h1>Add New Listing</h1>
            <Link to="/" className="subnav_links">
              <button onClick={this.cancel} className="wizardButton">
                Cancel
              </button>
            </Link>
          </div>
        <Switch>
          <Route path="/wizard/step1" component={WizOne} />
          <Route path="/wizard/step2" component={WizTwo} />
          <Route path="/wizard/step3" component={WizThree} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default Wizard;
