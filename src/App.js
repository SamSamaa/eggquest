import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page4 from './Components/Page4/Page4';
import P404 from './Components/P_404/P_404';
import Voldemort from './Components/Voldemort/Voldemort';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
        <Route path="/page4" exact component={Page4} />
        <Route path="/404" exact component={P404} />
        <Route path="/voldemort" exact component={Voldemort} />
        </div>
      </Router>
    );
  }
}

export default App;
