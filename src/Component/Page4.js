import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import FinalZone from './finalzone.png';
import './Page4.css';
import John from './John.mp3'
import Sound from 'react-sound';
import fortBoyard from './fortBoyard.mp3'
import leeroy from './leeroy.mp3'
import victory from './victory.mp3';

class Page4 extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      boyard: false,
      leeroyJ: false,
      leeroy: false,
      victoryF: false,
      victory: false
    };
  }

  onOpenModal = () => {
    this.setState({ open: true, boyard: true });
  };

  onCloseModal = () => {
    this.setState({ open: false, boyard: false });
  };

  leeroyOpenModal = () => {
    this.setState({ leeroy: true, leeroyJ: true });
  };

  leeroyCloseModal = () => {
    this.setState({ leeroy: false, leeroyJ: false });
  };

  victoryOpenModal = () => {
    this.setState({ victory: true, victoryF: true });
  };

  victoryCloseModal = () => {
    this.setState({ victory: false, victoryF: false });
  };

  render() {
    return (
      <div className='bgImage'>
        <Sound
          url={this.state.boyard ? fortBoyard : this.state.leeroyJ ? leeroy : this.state.victoryF ? victory : John}
          playStatus={Sound.status.PLAYING}
          volume={50}
          autoLoad={true}
          playbackRate={1}
          loop={true}
        />
        <div className='border'>
          <img src={FinalZone} alt='titre' />
        </div>
        <div className='enigme'>         
          <img className='m1' src='http://corigif.free.fr/alphabet/alphasaignant/img/alpha_016.gif' alt='lettre' />
         
          <img className='R' onClick={this.victoryOpenModal} src='http://corigif.free.fr/alphabet/alphaetoile/img/alpha_018.gif' alt='lettre' />
          <Modal classNames={true} open={this.state.victory} onClose={this.victoryCloseModal} center >
            <div></div>
          </Modal>
          
          <img className='m1' src='http://corigif.free.fr/alphabet/alphaptvert/img/alpha_005.gif' alt='lettre' />
          <img className='m1' src='http://corigif.free.fr/alphabet/alpharainbow/img/alpha_020.gif' alt='lettre' />

          <img className='m2b' src='http://corigif.free.fr/alphabet/alphasaignant/img/alpha_016.gif' alt='lettre' />
          <img className='m2' src='http://corigif.free.fr/alphabet/alphadanserouge2/img/alpha_015.gif' alt='lettre' />
          <img className='m2' src='http://corigif.free.fr/alphabet/alphaneige/img/alpha_021.gif' alt='lettre' />

          <img className='m2c R' onClick={this.victoryOpenModal} src='http://corigif.free.fr/alphabet/alphaetoile/img/alpha_018.gif' alt='lettre' />
          <Modal classNames={true} open={victory} onClose={this.victoryCloseModal} center >
            <div></div>
          </Modal>
          <img className='m3' src='http://corigif.free.fr/alphabet/alphaoursbleu/img/alpha_012.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alphafeu/img/alpha_044.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alphaneige/img/alpha_021.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alphaoursbleu/img/alpha_012.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alpharainbow/img/alpha_020.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alphacoeur2/img/alpha_009.gif' alt='lettre' />
          <img className='m3' src='http://corigif.free.fr/alphabet/alphatourne/img/alpha_013.gif' alt='lettre' />
          <img className='m2c' src='http://corigif.free.fr/alphabet/alphaptvert/img/alpha_005.gif' alt='lettre' />

          <img className='m4' src='http://corigif.free.fr/alphabet/alphafeu/img/alpha_004.gif' alt='lettre' />
          <img className='m4' src='http://corigif.free.fr/alphabet/alphaptvert/img/alpha_005.gif' alt='lettre' />
          <img className='m4' src='http://corigif.free.fr/alphabet/alphatournemulti/img/alpha_006.gif' alt='lettre' />
          <img className='m4' src='http://corigif.free.fr/alphabet/alphacoeur2/img/alpha_009.gif' alt='lettre' />

          <img className='point' src='https://p1.storage.canalblog.com/15/59/308998/18619302.gif' alt='lettre' />
        </div>

        <button className='but' onClick={this.onOpenModal}>ENIGME</button>
        <Modal classNames={true} open={this.state.open} onClose={this.onCloseModal} center >
          <div className='superMomodal'>
            <img className='fouras' src='https://pngimage.net/wp-content/uploads/2018/06/p%C3%A8re-fouras-png.png' alt='pere fouras' />
            <div>
              <p>Il passe sous le soleil et ne fait pourtant aucune ombre. </p>
              <p>Les jeunes le dise quand il n'y a rien.</p>
              <p>Il est parfois dans nos têtes ou dans nos poumons, il peut être marin ou de rien.</p>
              <p>Je suis dans l'Abécédaire, présent dans l'arrière mais au début de retour.</p>
              <p>Ferme la fenêtre pour me trouver.</p>
              <p>Qui suis-je ?</p>
            </div>
            <img className='sablier' src='http://www.gifgratis.net/gifs_animes/sablier/12.gif' alt='sablier' />
          </div>
        </Modal>

        <img className='wow1' src='https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd.webp' alt='wow' />
        <img className='wow2' src='https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd.webp' alt='wow' />
        <img className='wow3' src='https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd.webp' alt='wow' />
        <img className='wow4' src='https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd.webp' alt='wow' />
        <img className='wow' src='https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd.webp' alt='wow' />
      </div>
    );
  }
}

export default Page4;