import React, { useState, useEffect } from 'react';
import '../CSS/Talent.css';
import PersonalProfile from './PersonalProfile';

const Talent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // State untuk mengontrol tampilan profil
  const [showAnimation, setShowAnimation] = useState(false); // State untuk mengontrol animasi

  const talents = [
    { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), content: "This is Talent 1's description." },
    { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), content: "This is Talent 2's description." },
    { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), content: "This is Talent 3's description." },
    { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), content: "This is Talent 4's description." },
    { id: 5, name: "Talent 5", image: require('../img/talent/aaliyah-talent.png'), content: "This is Talent 5's description." },
    { id: 6, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), content: "This is Talent 1's description." },
    { id: 7, name: "Talent 2", image: require('../img/talent/aqsa-talent.png'), content: "This is Talent 2's description." },
    { id: 8, name: "Talent 3", image: require('../img/talent/agatha-talent.png'), content: "This is Talent 3's description." },
    { id: 9, name: "Talent 4", image: require('../img/talent/rachel-talent.png'), content: "This is Talent 4's description." },
    { id: 10, name: "Talent 5", image: require('../img/talent/aaliyah-talent.png'), content: "This is Talent 5's description." },
  ];

  const slides = [
    talents.slice(0, 5),  // Slide pertama dengan 5 gambar
    talents.slice(5, 10)  // Slide kedua dengan 5 gambar lainnya
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleKnowMoreClick = () => {
    setIsProfileVisible(true); // Menampilkan profil pribadi
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) { // Threshold untuk memulai animasi
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="talent-section">
      <h1>Say Hello to Our Talent</h1>

      <div className={`talent-slider-wrapper ${showAnimation ? 'animate' : ''}`}>
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

      {/* Tombol untuk menampilkan profil */}
      <div
        className={`know-more ${showAnimation ? 'animate' : ''}`}
        onClick={handleKnowMoreClick}
      >
        <p>Know more about our talent</p>
        <span className="arrow-down">↓</span>
      </div>

      {/* Menampilkan profil pribadi jika isProfileVisible true */}
      {isProfileVisible && <PersonalProfile />}
    </div>
  );
};

export default Talent;
