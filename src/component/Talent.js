import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Talent.css';
import PersonalProfile from './PersonalProfile';

const talents = [
  { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), desc: "Ini adalah deskripsi Talent 1." },
  { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), desc: "Ini adalah deskripsi Talent 2." },
  { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), desc: "Ini adalah deskripsi Talent 3." },
  { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), desc: "Ini adalah deskripsi Talent 4." },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Ini adalah deskripsi Talent 5." },
  { id: 6, name: "Talent 6", image: require('../img/talent/nazla-talent.png'), desc: "Ini adalah deskripsi Talent 6." },
  { id: 7, name: "Talent 7", image: require('../img/talent/aqsa-talent.png'), desc: "Ini adalah deskripsi Talent 7." },
  { id: 8, name: "Talent 8", image: require('../img/talent/agatha-talent.png'), desc: "Ini adalah deskripsi Talent 8." },
  { id: 9, name: "Talent 9", image: require('../img/talent/rachel-talent.png'), desc: "Ini adalah deskripsi Talent 9." },
  { id: 10, name: "Talent 10", image: require('../img/talent/aalyah-talent.png'), desc: "Ini adalah deskripsi Talent 10." },
];

const Talent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const talentsToShow = 5; // Number of talents to show at once
  const totalTalents = talents.length;
  const dotCount = Math.ceil(totalTalents / talentsToShow);
  const carouselRef = useRef(null);

  const nextTalent = () => {
    if (currentIndex < totalTalents - talentsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTalent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (1200 / talentsToShow)}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="talent-carousel-container">
      <h1 className='intro'>SAY HELLO TO OUR TALENT</h1>
      <div className="talent-carousel-wrapper">
        <div
          ref={carouselRef}
          className="talent-carousel-track"
        >
          {talents.map((talent, index) => (
            <div key={index} className="talent-carousel-item">
              <img src={talent.image} alt={talent.name} />
              <div className="talent-description">
                <p>{talent.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Controls moved below the carousel content */}
      <div className="talent-carousel-controls">
        <div className="talent-dot-indicators">
          {Array.from({ length: dotCount }).map((_, index) => (
            <div
              key={index}
              className={`talent-indicator ${index === Math.floor(currentIndex / (totalTalents / dotCount)) ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="talent-slide-buttons">
          <button
            onClick={prevTalent}
            className="talent-nav-button prev"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            onClick={nextTalent}
            className="talent-nav-button next"
            disabled={currentIndex >= totalTalents - talentsToShow}
          >
            &gt;
          </button>
        </div>
      </div>
      {/* <div className="personal-profile-wrapper">
        <PersonalProfile />
      </div> */}
    </div>

  );
};

export default Talent;
