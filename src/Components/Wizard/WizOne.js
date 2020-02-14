import React, { Component } from "react";
import "./Wizard.css";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_ZIPCODE,
  UPDATE_STATE
} from "../../store";

class WizOne extends Component {
  constructor() {
    super();

    const reduxState = store.getState();

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    store.subscribe(() => {
      let newState = store.getState();
      this.setState({
        name: newState.name,
        address: newState.address,
        city: newState.city,
        state: newState.state,
        zipcode: newState.zipcode
      });
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  nextAndUpdate = () => {
    const nameAction = {
      type: UPDATE_NAME,
      payload: this.state.name
    };
    const addressAction = {
      type: UPDATE_ADDRESS,
      payload: this.state.address
    };
    const cityAction = {
      type: UPDATE_CITY,
      payload: this.state.city
    };
    const stateAction = {
      type: UPDATE_STATE,
      payload: this.state.state
    };
    const zipcodeAction = {
      type: UPDATE_ZIPCODE,
      payload: this.state.zipcode
    };
    store.dispatch(nameAction);
    store.dispatch(addressAction);
    store.dispatch(cityAction);
    store.dispatch(stateAction);
    store.dispatch(zipcodeAction);
  };

  render() {
    return (
      <div className="wizardParent">
          <div className="wizFlex">
          <input
            type="text"
            className="wizardInput"
            placeholder="Property Name"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            className="wizardInput"
            placeholder="Property Address"
            value={this.state.address}
            name="address"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            className="wizardInput"
            placeholder="City"
            value={this.state.city}
            name="city"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            className="wizardInput"
            placeholder="State"
            value={this.state.state}
            name="state"
            onChange={this.handleChange}
          ></input>
          <input
            type="number"
            className="wizardInput"
            placeholder="Zip Code"
            value={this.state.zipcode}
            name="zipcode"
            onChange={this.handleChange}
          ></input>
                <div className="buttonBox">
          <Link to="/wizard/step2" className="subnav_links">
            <button onClick={this.nextAndUpdate} className="wizardButton">
              Next Step
            </button>
          </Link>
          </div>
          </div>
        </div>
    );
  }
}

export default WizOne;
