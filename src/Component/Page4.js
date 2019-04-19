import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import FinalZone from './finalzone.png';
import './Page4.css';

class Page4 extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className='bgImage'>
        <div className='border'>
          <img src={FinalZone} alt='titre' />
        </div>
        <div className='enigme'>
          <img className='m1' src='http://corigif.free.fr/alphabet/alphasaignant/img/alpha_016.gif' alt='lettre' />
          <img className='m1' src='http://corigif.free.fr/alphabet/alphaetoile/img/alpha_018.gif' alt='lettre' />
          <img className='m1' src='http://corigif.free.fr/alphabet/alphaptvert/img/alpha_005.gif' alt='lettre' />
          <img className='m1' src='http://corigif.free.fr/alphabet/alpharainbow/img/alpha_020.gif' alt='lettre' />

          <img className='m2b' src='http://corigif.free.fr/alphabet/alphasaignant/img/alpha_016.gif' alt='lettre' />
          <img className='m2' src='http://corigif.free.fr/alphabet/alphadanserouge2/img/alpha_015.gif' alt='lettre' />
          <img className='m2' src='http://corigif.free.fr/alphabet/alphaneige/img/alpha_021.gif' alt='lettre' />
          <img className='m2c' src='http://corigif.free.fr/alphabet/alphaetoile/img/alpha_018.gif' alt='lettre' />

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
        <Modal classNames={true} open={open} onClose={this.onCloseModal} center >
          <div className='superMomodal'>
            <img className='fouras' src='https://pngimage.net/wp-content/uploads/2018/06/p%C3%A8re-fouras-png.png' alt='pere fouras' />
            <p>khsebguosbdgus dbgmuibdgbsdigms dbimsdmbgsd  uqs bgmqskbg mubs mgibqsd bgisdm gsdqb</p>
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






// <Sound
//           url={John}
//           playStatus={Sound.status.PLAYING}
//           volume={50}
//           autoLoad={true}
//           playbackRate={1}
//           loop={true}
//         />