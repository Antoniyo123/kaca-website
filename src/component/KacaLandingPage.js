import React, { useState } from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="kaca-landing-page">
      <main>
        <h1>Your one stop creative solution providing top leading talents and digital marketing needs.</h1>
        <p className="description">
          We are a talent management and influencer marketing agency that has set an exemplary
          standard for delivering astute, sharp-focused, and individualized representation that
          ensures success at all stages of its collaborators. Our goal is to build solid and lasting
          relationships between talented people and the creative industries to create impactful
          stories in this digital age.
        </p>
      </main>

      <div className="full-width-container">
        <div className="image-gallery">
        <img src={require('../img/aqsa.png')} alt="Foto 1" />
        <img src={require('../img/nazla.png')} alt="Foto 2" />
        <img src={require('../img/agatha.png')} alt="Foto 3" />
        <img src={require('../img/aaliyah.png')} alt="Foto 3" />        </div>
      </div>
    </div>
  );
};

export default KacaLandingPage;