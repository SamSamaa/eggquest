import React, { Component } from 'react';
// import Sound from 'react-sound'
import './Page4.css';
// import John from './John.mp3';

class Page4 extends Component {
  render() {
    return (
      <div className='bgImage'>
          <div className='border'><h1 className='title'>Final Zone</h1></div>
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