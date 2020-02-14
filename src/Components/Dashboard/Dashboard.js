import React, { Component } from "react";
import "./Dashboard.css";
import House from '../House/House'
import {Link} from 'react-router-dom';
import axios from "axios";


class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    }
  }
  
  componentDidMount(){
    this.getHouses();
  }

  getHouses = () => {
    axios.get('/api/houses').then(res => {
      this.setState({
        houses: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  deleteHouse = (e) => {
    let id = e.target.value
    axios.delete(`/api/delete/${id}`).then(res => {
      this.setState({
        houses: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const houseList = this.state.houses.map(house => {
      console.log(house)
      return <div key={house.id}>
          <House deleteHouse={this.deleteHouse} value={house.id} house={house} />
        </div>
    })
    return <div className="dashParent">
    <div className="Dashboard">
      <div className="dashFlex">
        <h1>Dashboard</h1>
        <Link to="/wizard/step1" className="subnav_links">        
        <button>Add New Property</button>
        </Link>
        </div>
        {houseList}
    </div>
    </div>;
  }
}

export default Dashboard;
