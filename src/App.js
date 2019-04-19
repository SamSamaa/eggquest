import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from './Components/Page1/Page1';
import Voldemort from './Components/Voldemort/Voldemort';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact component={Page1} />
        <Route path="/voldemort" exact component={Voldemort} />
        </div>
      </Router>
    );
  }
}

export default App;
