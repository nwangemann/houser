import React, { Component } from "react";
import "./Wizard.css";
import { Link } from "react-router-dom";
import store, { UPDATE_IMAGEURL } from "../../store";

class WizTwo extends Component {
  constructor() {
    super();

    const reduxState = store.getState();

    this.state = {
      image_url: reduxState.image_url
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      let newState = store.getState();
      this.setState({
        image_url: newState.image_url
      });
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  advanceAndUpdate = () => {
    const action = {
      type: UPDATE_IMAGEURL,
      payload: this.state.image_url
    };
    store.dispatch(action);
  };

  render() {
    return (
      <div className="wizardParent">
        <div className="wizFlex">
          <input
            type="text"
            className="wizardInput"
            placeholder="Image URL"
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleChange}
          ></input>
          <div className="buttonBox">
            <Link to="/wizard/step1" className="subnav_links">
              <button onClick={this.advanceAndUpdate} className="wizardButton">
                Previous
              </button>
            </Link>
            <Link to="/wizard/step3" className="subnav_links">
              <button onClick={this.advanceAndUpdate} className="wizardButton">
                Next Step
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WizTwo;
