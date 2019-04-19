import React, {Component} from 'react';
import './Animation.css';
import voldemort from '../../assets/images/Voldemort.png';
import glasses from "../../assets/images/glasses.png";

class Animation extends Component {
    constructor() {
        super();
        this.state={
            skull: false,
            glasses: false
        }
    }

    componentDidMount() {
        setTimeout(this.skull, 100);
        setTimeout(this.hide,7000);
        setTimeout(this.glasses,8000);
        setTimeout(this.stuff,9000)
    }

    componentWillMount() {

        fetch(`http://easteregg.wildcodeschool.fr/api/characters/random`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    charac1: res.image
                });
            })
    }

    skull = () => {
        this.setState({skull: true})
    }
    hide = () => {
        document.getElementsByClassName('disclosure')[0].style.display="none";
    }
    glasses = () => {
        this.setState({glasses: true})
    }
    stuff = () => {
        document.getElementsByClassName('joint')[0].style.display="block";
        document.getElementById('arrowDown').style.display="block";
        document.getElementById('welcomeAnim').style.display="block";
    }

    render(){
        return (
            <div id="parent">
                <div id="voldemort">
                    <img src={voldemort} className="faceVoldemort" alt="initial egg"/>
                    <div className={'disclosure' + (this.state.skull ? ' skull' : '')}></div>
                    <img src={glasses} alt="glasses" className={"glasses"+(this.state.glasses ? ' moveGlasses' : '')}/>
                    <img src="https://thumbs.gfycat.com/CleanEllipticalFairyfly.webp" alt="bedo" className="joint"></img>
                    <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Favatanplus.com%2Ffiles%2Fresources%2Fmid%2F578d772bac69a156009982ba.png&f=1" alt="necklace" className="necklace"/>
                    <img src="http://www.pngnames.com/files/4/Hoodie-Jackets-PNG-Free-Download.png" alt="sweater" className="sweater"/>
                    <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.gif-maniac.com%2Fgifs%2F54%2F53581.gif" alt="welcome" id="welcomeAnim"/>
                    <div id="arrowDown">
                        <img src="https://media.giphy.com/media/8fteY1fGJDQYg/giphy.gif" alt="arrow"  />
                        <img src="https://media.giphy.com/media/8fteY1fGJDQYg/giphy.gif" alt="arrow" />
                    </div>
                    <input></input>
                </div>
            </div>
        )
    }
}

export default Animation;