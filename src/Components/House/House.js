import React, { Component } from "react";
import "./House.css";

class House extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="houseParent">
      <div className="houseFlex">
        <h1 id="houseName" >{this.props.house.property_name}</h1>
        <p>{this.props.house.address}</p>
        <p>
          {this.props.house.city}, {this.props.house.state}  {this.props.house.zip}
        </p>
        <img src={this.props.house.image_url} className="providedImage" alt="house" />
        <p>Mortgage Cost: {this.props.house.mortgage}</p>
        <p>Desired Rent: {this.props.house.rent}</p>
        <button id="houseButton" value={this.props.value} onClick={this.props.deleteHouse} >Delete</button>
      </div>
      </div>
    );
  }
}

export default House;
