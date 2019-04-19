import React, { Component } from 'react';
import './P404.css';

class P_404 extends Component {
    constructor() {
        super();
        this.state = {
         charac: ''
        }
    }
    componentWillMount(){
        fetch(`http://easteregg.wildcodeschool.fr/api/characters/random`)
        .then(res=> res.json())
        .then((res)=>{
            this.setState({
                charac: res.image
            });
        })
    }

    render() {
        return (
            <div className="blocPage w-100">
                <div className="gifChicken">
                    <img className='img' src="http://s1882.pcdn.co/wp-content/uploads/VoaBStransp.gif"></img>
                </div>
                <div className="gifEat">
                    <a href="#home"><img src="https://66.media.tumblr.com/640392a2b80328b99d9af6b501836a7f/tumblr_pbkg59Up2U1qfmbfwo4_640.gif"></img></a>
                </div>            
                <div className="gifCarlo">
                    <img className='img' src="https://data.whicdn.com/images/78236938/original.gif"></img>
                </div> 
                <div>
                    <h1 class='errorTitle'>ERROR 404</h1>
                    <img src=""></img>
                </div>
                <div className="errorImg">
                    <div className="icon-container">
                        <div className="ac-animated-svg-icon ac-svg-animated ac-svg-shadow">
                            <div className="ac-animated-svg-icon-contents">
                                <div className="ac-animated-svg-alarmclock">
                                    <div className="svg-alarmclock-in">
                                        <img className='img' src="https://preview.animatedcreativity.com/svg/alarmclock/alarmclock.svg" className="svg-alarmclock"></img>
                                        <img className='img' src="https://preview.animatedcreativity.com/svg/alarmclock/leftbell.svg" className="svg-left-bell"></img>
                                        <img className='img' src="https://preview.animatedcreativity.com/svg/alarmclock/rightbell.svg" className="svg-right-bell"></img>
                                        <img className='img' src= {this.state.charac}  className="svg-hour"></img>
                                        <img className='img' src="https://preview.animatedcreativity.com/svg/alarmclock/minute.svg" className="svg-minute"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default P_404