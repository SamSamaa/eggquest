import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sound from 'react-sound';
import './Animation.css';
import hedwig from './hedwig.mp3';
import voldemort from '../../assets/images/Voldemort.png';
import glasses from "../../assets/images/glasses.png";

class Animation extends Component {
    constructor() {
        super();
        this.state = {
            skull: false,
            glasses: false,
            eggs: [],
            password: '',
            win: false
        }
    }

    componentDidMount() {
        setTimeout(this.skull, 100);
        setTimeout(this.hide, 7000);
        setTimeout(this.glasses, 8000);
        setTimeout(this.stuff, 9000)
    }

    handleTry = () => {
        if (this.state.password === 'tamago') {
            this.setState({ win: true });
        } else {
            this.setState({ password: '' });
        }
    }

    skull = () => {
        this.setState({ skull: true })
    }
    hide = () => {
        document.getElementsByClassName('disclosure')[0].style.display = "none";
    }
    glasses = () => {
        this.setState({ glasses: true })
    }
    stuff = () => {
        document.getElementsByClassName('joint')[0].style.display = "block";
        document.getElementById('arrowDown').style.display = "block";
        document.getElementById('welcomeAnim').style.display = "block";
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div id="parent">
                <Sound
                    url={hedwig}
                    playStatus={Sound.status.PLAYING}
                    volume={70}
                    autoLoad={true}
                    playbackRate={2}
                    loop={true}
                />
                <div id="voldemort">
                    <div id="picsEggs"></div>
                    <img src={voldemort} className="faceVoldemort" alt="initial egg" />
                    <div className={'disclosure' + (this.state.skull ? ' skull' : '')}></div>
                    <img src={glasses} alt="glasses" className={"glasses" + (this.state.glasses ? ' moveGlasses' : '')} />
                    <img src="https://thumbs.gfycat.com/CleanEllipticalFairyfly.webp" alt="bedo" className="joint"></img>
                    <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Favatanplus.com%2Ffiles%2Fresources%2Fmid%2F578d772bac69a156009982ba.png&f=1" alt="necklace" className="necklace" />
                    <img src="http://www.pngnames.com/files/4/Hoodie-Jackets-PNG-Free-Download.png" alt="sweater" className="sweater" />
                    <img src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fwww.gif-maniac.com%2Fgifs%2F54%2F53581.gif" alt="welcome" id="welcomeAnim" />
                    <div id="arrowDown">
                        <img src="https://media.giphy.com/media/8fteY1fGJDQYg/giphy.gif" alt="arrow" />
                        <img src="https://media.giphy.com/media/8fteY1fGJDQYg/giphy.gif" alt="arrow" />
                    </div>
                    <div className="divParchemin">
                        <img id='parchemin' src="https://files.slack.com/files-pri/T6SG2QGG2-FHPLNB52N/kisspng-parchment-friendship-bilude-art-parchemin-5b24e8e3a0f5c3.4593189615291455716593.png" alt="rules" />
                        <p id='lorem'>
                            Wesh alors, bien ou bien, c’est partie pour les  les péripétieties la famille , vous allez devoir résolver  des questions incrémenté de réponses,  avec tes yeux tu va kiffé par ce  claquent et , graphisme du turfu !!!
                            Traduction français classique 
                            bonjour, bienvenu sur notre application , vous allez devoir résoudre des enigmes, profitez de l’ambiance</p>
                    </div>
                    <div id="MERDE">
                        <Link exact to='/page1'><button>Vas-y!!! clique & résoud ces enimges!</button></Link>
                        <br />
                        <input placeholder="motQuiPasse" value={this.state.password} onChange={this.handlePassword}></input>
                        <button onClick={this.handleTry}>Envoie ta réponse!</button>
                        {
                            this.state.win ? <Link exact to='/voldemort'><h2>SECRET SITE</h2></Link> : <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Animation;