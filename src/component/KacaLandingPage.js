import React from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
  return (
    <div className='home-container'>
      <div className="container">
        <div className="text-content">
          <div className='intro-content'>
            <h2 className="tagline">
              Your one stop creative solution providing top leading talents and digital marketing needs.
            </h2>
            <p className="description">
              We are a talent management and influencer marketing agency that has set an exemplary standard for delivering astute, sharp-focused, and individualized representation that ensures success at all stages of its collaborators. Our goal is to build solid and lasting relationships between talented people and the creative industries to create impactful stories in this digital age.
            </p>
          </div>
          <div className='kaca-pic-container'>
        <div className="additional-image">
            <img src={require('../img/kaca-flower.png')} alt="additional content" />
        </div>
      </div>
        </div>
        
        <div className="background-image" />
      </div>

    </div>
  );
};

export default KacaLandingPage;
