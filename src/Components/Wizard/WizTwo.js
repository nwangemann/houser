import React, { Component } from "react";
import "./Wizard.css";
import {Link} from 'react-router-dom';


class WizTwo extends Component {
  constructor() {
    super();

    this.state = {
      image_url: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="wizardParent">
        <div id="wizFlex">
          <input
            type="text"
            className="wizardInput"
            placeholder="Image URL"
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleChange}
          ></input>
             <Link to="/wizard/step3" className="subnav_links">
            <button className="wizardButton">
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WizTwo;
