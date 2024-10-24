import React, { useState, useRef, useEffect } from 'react';
import '../CSS/KacaNetwork.css'; // Make sure to include your CSS file

const images = [
  { src: require('../img/our-talent/KacaNetwork/rsz_aero.jpg'), desc: 'Image 1' },
  { src: require('../img/our-talent/KacaNetwork/rsz_angie.jpg'), desc: 'Image 2' },
  { src: require('../img/our-talent/KacaNetwork/rsz_daffa.jpg'), desc: 'Image 3' },
  { src: require('../img/our-talent/KacaNetwork/rsz_dindra.jpg'), desc: 'Image 4' },
  { src: require('../img/our-talent/KacaNetwork/GENU.jpg'), desc: 'Image 5' },
  { src: require('../img/our-talent/KacaNetwork/JEHIAN.jpg'), desc: 'Image 6' },
  { src: require('../img/our-talent/KacaNetwork/JEROME.jpg'), desc: 'Image 7' },
  { src: require('../img/our-talent/KacaNetwork/KEZIV.jpg'), desc: 'Image 8' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 4' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 5' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 6' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 7' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 8' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 8' },
  // { src: require('../img/talent/jerome.png'), desc: 'Image 8' },

];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 6; // Number of images to show at once
  const totalImages = images.length;
  const dotCount = Math.ceil(totalImages / imagesToShow); // Number of dots based on the total images
  const carouselRef = useRef(null);

  const nextImage = () => {
    if (currentIndex < totalImages - imagesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (1200 / imagesToShow)}px)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          ref={carouselRef}
          className="carousel-track"
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={`Image ${index + 1}`} />
              <div className="image-description">
                <p>{image.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="dot-indicators">
          {Array.from({ length: dotCount }).map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === Math.floor(currentIndex / (totalImages / dotCount)) ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="slide-buttons">
          <button
            onClick={prevImage}
            className="nav-button prev"
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="nav-button next"
            disabled={currentIndex >= totalImages - imagesToShow}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
