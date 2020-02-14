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
          {this.props.house.city}, {this.props.house.state}
        </p>
        <p>{this.props.house.zip}</p>
        <button id="houseButton" value={this.props.value} onClick={this.props.deleteHouse} >Delete</button>
      </div>
      </div>
    );
  }
}

export default House;
