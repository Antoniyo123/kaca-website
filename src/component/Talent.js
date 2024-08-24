import React, { useState, useEffect } from 'react';
import '../CSS/Talent.css';
import PersonalProfile from './PersonalProfile';

const Talent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const talents = [
    { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), content: "Ini adalah deskripsi Talent 1." },
    { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), content: "Ini adalah deskripsi Talent 2." },
    { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), content: "Ini adalah deskripsi Talent 3." },
    { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), content: "Ini adalah deskripsi Talent 4." },
    { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), content: "Ini adalah deskripsi Talent 5." },
    { id: 6, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), content: "Ini adalah deskripsi Talent 1." },
    { id: 7, name: "Talent 2", image: require('../img/talent/aqsa-talent.png'), content: "Ini adalah deskripsi Talent 2." },
    { id: 8, name: "Talent 3", image: require('../img/talent/agatha-talent.png'), content: "Ini adalah deskripsi Talent 3." },
    { id: 9, name: "Talent 4", image: require('../img/talent/rachel-talent.png'), content: "Ini adalah deskripsi Talent 4." },
    { id: 10, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), content: "Ini adalah deskripsi Talent 5." },
  ];

  const slides = [
    talents.slice(0, 5),
    talents.slice(5, 10)
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="talent-container">
      <div className="talent-section">
        <h1>SAY HELLO TO OUR TALENT</h1>

        <div className="talent-slider-wrapper">
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <div className="talent-slider">
            <div
              className="talent-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="slide-page">
                  {slide.map((talent) => (
                    <div key={talent.id} className="talent-slide">
                      <div className="talent-image-container">
                        <img src={talent.image} alt={talent.name} />
                        <div className="talent-name-overlay">{talent.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="slider-arrows">
            <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
            <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>

      <div className="know-more">
        <p>Know more about our talent</p>
        <span className="arrow-down">↓</span>
      </div>

      <div className="full-profile-container">
        <PersonalProfile />
      </div>
    </div>
  );
};

export default Talent;
