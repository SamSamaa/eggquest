import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page4 from './Components/Page4/Page4';
import Voldemort from './Components/Voldemort/Voldemort';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page4" component={Page4} />
        <Route path="/voldemort" component={Voldemort} />
      </Router>
    );
  }
}

export default App;
