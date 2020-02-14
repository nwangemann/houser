import React, { Component } from "react";
import "./Wizard.css";
import {Link} from 'react-router-dom';
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e){
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  }

  addHouse = () => {
    const {name, address, city, state, zipcode} = this.state
    let houseToAdd = {
      name,
      address, 
      city, 
      state, 
      zipcode
    }
    axios.post('/api/newhouse', houseToAdd).then(res => {
      console.log('Not sure if it is necessary to do anything here... maybe revisit this later')
    })
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
    })
  }

  render() {
    return <div className="wizardParent">
      <div id='wizFlex'>
      <input type="text" className="wizardInput" placeholder="Property Name" value={this.state.name} name="name" onChange={this.handleChange} ></input>
      <input type="text" className="wizardInput" placeholder="Property Address" value={this.state.address} name="address" onChange={this.handleChange} ></input>
      <input type="text" className="wizardInput" placeholder="City" value={this.state.city} name="city" onChange={this.handleChange} ></input>
      <input type="text" className="wizardInput" placeholder="State" value={this.state.state} name="state" onChange={this.handleChange} ></input>
      <input type="number" className="wizardInput" placeholder="Zip Code" value={this.state.zipcode} name="zipcode" onChange={this.handleChange} ></input>
   

        <Link to="/" className="subnav_links">        
        <button 
        onClick={this.addHouse}
        className="wizardButton">Complete</button>
        </Link>
        <Link to="/" className="subnav_links">        
        <button className="wizardButton">Cancel</button>
        </Link>
        </div>
    </div>;
  }
}

export default Wizard;
