import React, { useState, useEffect } from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
  const images = [
    require('../img/intro.png'),
    require('../img/intro-background.png'),
    require('../img/nazla.png'),
    require('../img/aaliyah.png'),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setSliding(false);
    }, 500); // This should match the transition duration in CSS
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="home-container">
      <div className="container">
        <div className="text-content-home">
          <div className="intro-content">
            <h2>
              Your one stop creative solution providing top leading talents and digital marketing needs.
            </h2>
            <p>
              We are a talent management and influencer marketing agency that has set an exemplary standard for delivering astute, sharp-focused, and individualized representation that ensures success at all stages of its collaborators. Our goal is to build solid and lasting relationships between talented people and the creative industries to create impactful stories in this digital age.
            </p>
          </div>
        </div>

        <div className="background-image">
          <div className={`slideshow ${sliding ? 'sliding' : ''}`}>
            <img 
              src={images[activeIndex]} 
              alt={`Slide ${activeIndex + 1}`} 
              className="slide-image"
            />
          </div>
          
          <div className="square-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`square ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="landing-page-background"></div>

    </div>
  );
};

export default KacaLandingPage;