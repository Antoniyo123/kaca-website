import React, { useState, useEffect, useRef } from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
  const slides = [
    { type: 'video', src: require('../video/SECTION1.mp4') },
    { type: 'video', src: require('../video/SECTION2.mp4') },
    { type: 'video', src: require('../video/SECTION3.mp4') },
    { type: 'image', src: require('../img/aaliyah.png') },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 14000); // Change slide every 8 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slides[activeIndex].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [activeIndex]);

  const nextSlide = () => {
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSliding(false);
    }, 3000); // This should match the transition duration in CSS
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const renderSlide = (slide, index) => {
    const isActive = index === activeIndex;
    if (slide.type === 'video') {
      return (
        <video
          key={index}
          ref={videoRef}
          src={slide.src}
          className={`slide-item ${isActive ? 'active' : ''}`}
          muted
          loop
          playsInline
        />
      );
    } else {
      return (
        <img 
          key={index}
          src={slide.src} 
          alt={`Slide ${index + 1}`} 
          className={`slide-item ${isActive ? 'active' : ''}`}
        />
      );
    }
  };

  return (
    <div className="home-container">
      <div className="container">
        <div className="text-content-home">
          <div className="intro-content">
            <h1>
              Your one stop creative solution,
            </h1>
            <h2>
            providing top leading talents and digital marketing needs.
            </h2>
            <p>
              We are a talent management and influencer marketing agency that has set an exemplary standard for delivering astute, sharp-focused, and individualized representation that ensures success at all stages of its collaborators. Our goal is to build solid and lasting relationships between talented people and the creative industries to create impactful stories in this digital age.
            </p>
          </div>
        </div>

        <div className="background-image">
          <div className={`slideshow ${sliding ? 'sliding' : ''}`}>
            {slides.map((slide, index) => renderSlide(slide, index))}
          </div>
          
          <div className="square-indicators">
            {slides.map((_, index) => (
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