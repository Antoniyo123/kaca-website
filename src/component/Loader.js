import React from 'react';
import '../CSS/Loader.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-dots">
        <img 
          className='kaca-loader' 
          src={require('../img/LOGO K.png')} 
          alt="Kaca Logo"
        />
      </div>
    </div>
  );
};

export default Loading;