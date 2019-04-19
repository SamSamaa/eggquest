import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from 'react-responsive-modal';
import Sound from 'react-sound';
import ponpon from './ponpon.mp3'
import victory from './victory.mp3'
import './Page2.css';



class Page2 extends Component {
    constructor() {
        super();
        this.state = {
            res1: null,
            res3: '',
            charac1: '',
            charac2: '',
            charac3: '',
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            victoryF: false,
            open6: false,
            openTestIcule:false,
        }
    }
    componentWillMount() {
        
        fetch(`http://easteregg.wildcodeschool.fr/api/characters/random`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    charac1: res.image
                });
            })
        fetch(`http://easteregg.wildcodeschool.fr/api/characters/random`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    charac2: res.image
                });
            })
        fetch(`http://easteregg.wildcodeschool.fr/api/characters/random`)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    charac3: res.image
                });
            })
    }

    // fonction pour le submit input
    handleRes3 = (e) => {
        this.setState({
            res3: e.target.value
        });
    }
    componentDidUpdate(res3) {

        if (this.state.res3.toLowerCase() === 'lucioles') {
            if (!this.state.openTestIcule){
                this.setState({openTestIcule:true})}
              
        } else if (this.state.res3.toLowerCase() === 'couilles') {
            alert("(☞ﾟヮﾟ)☞t'es sérieux gros dégoutant")
            alert("(•_•) ( •_•)>⌐■-■ (⌐■_■)Je te juge")
            alert("(ﾉ☉ヮ⚆)ﾉ ⌒*:･ﾟ✧ Je suis Choquay")
            alert("(ಥ﹏ಥ) Je vais pleurer")
            alert("(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ Un petit dernier pour la route")
            
            // return
            // `${this.openVictory}(☞ﾟヮﾟ)☞t'es sérieux gros dégoutant`
        } else {
            console.log('rhooo')
        }
    }
    //   fin de la fonction submit input 

    // fonction vrai faux
    handelClick1 = () => {
        this.setState({
            res1: true
        });
    }
    falseClick = () => {
        this.setState({
            res1: false
        });
    }

    openModalCoquin = () => {
        this.setState({ open1:true })
    };
    closeModalCoquin = () => {
        this.setState({ open1: false })
    }

    openModalAllu = () => {
        this.setState({ open2: true })
    };
    closeModalAllu = () => {
        this.setState({ open2: false })
    }
    openModalDal = () => {
        this.setState({ open3: true })
    };
    closeModalDal = () => {
        this.setState({ open3: false })
    }
    openModalShark = () => {
        this.setState({ open4: true })
    };
    closeModalShark = () => {
        this.setState({ open4: false })
    }
    openVictory = () => {
        this.setState({ victoryF: true })
    };
    closeVictory = () => {
        this.setState({ victoryF: false })
    }
    openModalWell = () => {
        this.setState({ open6: true })
    };
    closeModalWell = () => {
        this.setState({ open6: false })
    }
    // openModal/ closemodale
    
    //fin de la fonction vrai faux
    render() {
    
        return (


            <div className="bgStyle">
            <Sound
         url={this.state.victoryF? victory : ponpon}
         playStatus={Sound.status.PLAYING}
         volume={50}
         autoLoad={true}
         playbackRate={1}
         loop={true}
       />

                <div className="hiddenRabbitPosition2" onClick={this.openModalRabbit}>
                <Modal open={this.state.open5} onClose={this.closeModalRabbit} center>
                        <img className="imgRabb" src={'https://media.giphy.com/media/HzKsrt22tjTtC/giphy.gif'}/>
                        </Modal>
                    

                <img className="hiddenRabbit" src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"} alt="rabbit" />
                </div>
                <div className="hiddenRabbitPosition1" onClick={this.falseClick}>
                <img className="hiddenRabbit" src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"} alt="rabbit" /></div>
                <div className="hiddenRabbitPosition" onClick={this.handelClick1}><img className="hiddenRabbit" src={"https://peepoodo.github.io/peepoodo-box/avatars/lapin.png"} alt="rabbit" /></div>
                <div>
                    <h1 className="borderTitle"><img className="imgApi" src={this.state.charac1} alt='charac' />Question 1</h1>
                    <p className=" bgQuestion">Qu'est ce qui s'allonge et rétrécit en même temps ?</p>
                   <button className="btnColor" onClick={this.openModalCoquin}>Mon Chibre</button>
                        <Modal open={this.state.open1} onClose={this.closeModalCoquin} center>
                        <img className="imgMod " src={'https://media.giphy.com/media/xTiTnvtbvEEArLmDao/giphy.gif'}/>
                        </Modal>
                    
                    <button className="btnColor" onClick={this.openModalAllu}>une allumette </button>
                        <Modal open={this.state.open2} onClose={this.closeModalAllu} center>
                        <img className="imgMod"  src={'https://media.giphy.com/media/dh2XvZthDl7ag/giphy.gif'}/>
                        </Modal>
                    <button className="btnColor" onClick={this.openModalDal}>Dhalsim</button>
                        <Modal open={this.state.open3} onClose={this.closeModalDal} center>
                        <img className="imgMod" src={'https://media.giphy.com/media/LpvsYF6y1Bzwc/giphy.gif'}/>
                        </Modal>
                    <button className="btnColor" onClick={this.openModalShark}>Sharknadoo</button>
                        <Modal open={this.state.open4} onClose={this.closeModalShark} center>
                        <img className="imgMod" src={'https://media.giphy.com/media/1UTlM8gw3xWRq/giphy.gif'}/>
                        </Modal>
                    <button className="btn1" onClick={this.openModalWell}>la Vie</button>
                    <Modal open={this.state.open6} onClose={this.closeModalWell} center>
                        <img className="imgMod1" src={'https://media.giphy.com/media/lvOnlEYunAwOkHjgmU/giphy.gif'}/>
                        </Modal>

                </div>
                <div
                    className="hiddenRabbitPosition2"
                    onClick={this.falseClick}>
                    <img className="hiddenRabbit"
                        src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"} alt="rabbit" />
                </div>
                <div
                    className="hiddenRabbitPosition1"
                    onClick={this.ope}>
                    <img className="hiddenRabbit"
                        src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"} alt="rabbit" />
                </div>
                <div>
                    <h1> <img className="imgApi" src={this.state.charac2} alt='charac' />Question 3</h1>
                    <p className=" bgQuestion">Trouvé le bon mo, il doi impérativemen !!!!! contenir ttes les lettr, les lettr son les suivantes:
                     C, U, I, O, L, L, E, S
                     </p> 
                     {this.state.openTestIcule &&
                     <Link exact to='/page4'><button onClick={this.openVictory}>Next levail bi1 jouai</button></Link>
                     } 

                    <input onChange={this.handleRes3}></input>
                </div>
                <div>
                    <h1><img className="imgApi" src={this.state.charac3} alt='charac' />Find me</h1>
                    <p className=" bgQuestion">trouve moi dans la page je suis trop migon
                    <img className="sizeRabbit" src={"https://peepoodo.github.io/peepoodo-box/avatars/lapin.png"}
                            alt="rabbit" /></p>

                </div>
                {/* <div
                    className="hiddenRabbitPosition2"
                    onClick={this.falseClick}><img className="hiddenRabbit"
                        src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"}
                        alt="rabbit" />
                </div>
                <div className="hiddenRabbitPosition1"
                    onClick={this.falseClick}>
                    <img className="hiddenRabbit"
                        src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"}
                        alt="rabbit" />
                </div>
                <div className="hiddenRabbitPosition"
                    onClick={this.falseClick}>
                    <img className="hiddenRabbit"
                        src={"https://ih0.redbubble.net/image.423076575.5454/flat,800x800,070,f.jpg"}
                        alt="rabbit" />
                </div> */}
            </div>
        );
    }
}

export default Page2