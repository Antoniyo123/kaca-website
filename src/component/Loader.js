import React from 'react';
import '../CSS/Loader.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;