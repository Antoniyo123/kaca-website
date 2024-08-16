import React from 'react';
import '../CSS/Bts.css';

const Bts = () => {
  return (
    <section className="content-with-scrollable-images">
      <div className="description">
        <p className='more'>More service we provide</p>
        <p className='studio'>Studio</p>
        <p className='photographer'>Photographer</p>
        <p className='makeup'>Make Up Artist</p>
        <p className='editor'>Editor</p>
        <p className='graphic'>Graphic Designer</p>
        <p className='creative'>Creative Producer</p>
      </div>
      <div className="scrollable-images">
      <img src={require('../img/bts/bts1.png')} alt="Photo 1" className="bts-photo-talent" />
      <img src={require('../img/bts/bts2.png')} alt="Photo 1" className="bts-photo-talent" />
      <img src={require('../img/bts/bts3.png')} alt="Photo 1" className="bts-photo-talent" />
      <img src={require('../img/bts/bts4.png')} alt="Photo 1" className="bts-photo-talent" />
      <img src={require('../img/bts/bts5.png')} alt="Photo 1" className="bts-photo-talent" />

      </div>
    </section>
  );
};

export default Bts;