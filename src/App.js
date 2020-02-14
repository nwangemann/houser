import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';
import {Link} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()

  }



  render(){
  return (
    <Router>
    <div className="App">
      <Header /> 
      {routes}
    </div>
    </Router>
  );
  }
}

export default App;
