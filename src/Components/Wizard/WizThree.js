import React, { Component } from "react";
import "./Wizard.css";
import axios from 'axios';
import {Link} from 'react-router-dom';


class WizThree extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: "",
      rent: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addHouse = () => {
    const { name, address, city, state, zipcode } = this.state;
    let houseToAdd = {
      name,
      address,
      city,
      state,
      zipcode
    };
    axios.post("/api/newhouse", houseToAdd).then(res => {
      console.log(
        "Not sure if it is necessary to do anything here... maybe revisit this later"
      );
    });
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    });
  };

  render() {
    return (
      <div className="wizardParent">
        <div id="wizFlex">
          <input
            type="number"
            className="wizardInput"
            placeholder="Monthly Mortgage Amount"
            value={this.state.mortgage}
            name="mortgage"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            className="wizardInput"
            placeholder="Desired Monthly Rent"
            value={this.state.rent}
            name="rent"
            onChange={this.handleChange}
          ></input>
          <Link to="/" className="subnav_links">
            <button onClick={this.addHouse} className="wizardButton">
              Complete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WizThree;
