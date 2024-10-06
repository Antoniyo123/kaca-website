import React, { useState, useEffect } from 'react';

const NewTalent = ({ talents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(talents.length / 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(talents.length / 4)) % Math.ceil(talents.length / 4));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {Array(Math.ceil(talents.length / 4)).fill().map((_, groupIndex) => (
          <div key={groupIndex} className="carousel-slide">
            {talents.slice(groupIndex * 4, groupIndex * 4 + 4).map((talent, index) => (
              <div key={index} className="talent-card">
                <div className="gif-background" style={{ backgroundImage: `url(${talent.gifBackground})` }}></div>
                <img src={talent.image} alt={talent.name} className="talent-image" />
                <div className="talent-info">
                  <h3>{talent.name}</h3>
                  <p>{talent.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button prev">&lt;</button>
      <button onClick={nextSlide} className="carousel-button next">&gt;</button>
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease;
        }
        .carousel-slide {
          flex: 0 0 100%;
          display: flex;
          justify-content: space-between;
        }
        .talent-card {
          position: relative;
          width: 23%; /* Slightly less than 25% to account for gaps */
          padding-bottom: 23%; /* Maintain aspect ratio */
          overflow: hidden;
        }
        .gif-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.7;
        }
        .talent-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .talent-info {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: white;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.5);
          border: none;
          font-size: 24px;
          padding: 10px 15px;
          cursor: pointer;
          z-index: 10;
        }
        .prev { left: 10px; }
        .next { right: 10px; }
      `}</style>
    </div>
  );
};

export default NewTalent;