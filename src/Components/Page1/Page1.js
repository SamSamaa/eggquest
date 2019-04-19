import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Voldemort from '../Voldemort/Voldemort';
import wordart from '../../assets/images/wordart.png';
import wordart2 from '../../assets/images/wordart2.png';
import './Page1.css';

class Page1 extends Component {
  constructor() {
    super();
    this.state = {
      explode: false,
      appearTitle1: false,
      appearTitle2: false,
      clicked: false,
      win: false
    }
  }

  componentDidMount() {
    setTimeout(this.appearTitle1, 50);
    setTimeout(this.explode, 5000);
    setTimeout(this.unexplode, 5800);
  }

  appearTitle1 = () => {
    this.setState({ appearTitle1: true });
  }

  explode = () => {
    this.setState({ explode: true });
  }

  unexplode = () => {
    this.setState({ explode: false });
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked, appearTitle1: false, appearTitle2: true });
  }

  clickedBallon = () => {
    this.setState({ win: true });
  }

  render() {
    return (
        <div className={'Page1' + (this.state.win ? ' win' : '')}>
          {
            this.state.win ?
              <div className='screen2'>
                <Link exact to="/voldemort"><button className='button'>Go to next page!</button></Link>
              </div>
              :
              <div className='screen1'>
                <img src={wordart} className={'wordart' + (this.state.appearTitle1 ? ' appear' : '')} />
                <img src={wordart2} className={'wordart2' + (this.state.appearTitle2 ? ' appear' : '')} />
                <div>
                  <div className='issou'>
                    <button className='ballon' onClick={this.clickedBallon}>x</button>
                  </div>
                  <button className='button' onClick={this.handleClick}>Click me!</button>
                </div>
                <div className={'fail-container' + (this.state.clicked ? ' activation' : '')}>
                  <div className='fail'></div>
                </div>
                <div className='snoopdog'></div>
                <div className='clippy'></div>
                <div className='fire'></div>
                <div className='obama'></div>
                <div className='cigarettes'></div>
                <div className={this.state.explode ? 'explosion' : ''}></div>
              </div>
          }
        </div>
    );
  }
}

export default Page1;
