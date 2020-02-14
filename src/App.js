import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
            <section id="separator">{routes}</section>
            <Footer />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
