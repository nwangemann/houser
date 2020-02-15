import React, { Component } from "react";
import "./Wizard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import store, { UPDATE_MORTGAGE, UPDATE_RENT, CANCEL_ALL } from "../../store";

class WizThree extends Component {
  constructor() {
    super();

    const reduxState = store.getState();

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zipcode: reduxState.zipcode,
      image_url: reduxState.image_url,
      mortgage: "",
      rent: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => {
      let newState = store.getState();
      this.setState({
        mortgage: newState.mortgage,
        rent: newState.rent
      });
    });
  }
  componentWillUnmount(){
    store.dispatch({ type: CANCEL_ALL });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  nextAndUpdate = () => {
    const mortgageAction = {
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    };
    const rentAction = {
      type: UPDATE_RENT,
      payload: this.state.rent
    };
    store.dispatch(mortgageAction);
    store.dispatch(rentAction);
  };

  addHouse = () => {
      this.nextAndUpdate()
    const {
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      mortgage,
      rent
    } = this.state;

    let houseToAdd = {
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      mortgage,
      rent
    };

    axios.post("/api/newhouse", houseToAdd).then(res => {
      console.log(
        "Not sure if it is necessary to do anything here... maybe revisit this later"
      );
    });
  };

  render() {
    return (
      <div className="wizardParent">
        <div className="wizFlex">
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
                <div className="buttonBox">
          <Link to="/wizard/step2" className="subnav_links">
            <button onClick={this.nextAndUpdate} className="wizardButton">
              Previous
            </button>
          </Link>
          <Link to="/" className="subnav_links">
            <button onClick={this.addHouse} className="wizardButton">
              Complete
            </button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WizThree;
