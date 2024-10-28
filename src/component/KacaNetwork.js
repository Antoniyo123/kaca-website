import React, { useState, useRef, useEffect } from 'react';
import '../CSS/KacaNetwork.css';
import arrowLeft from '../img/svg-assets/arrow-left.svg';
import arrowRight from '../img/svg-assets/arrow-right.svg';
import backgroundGif from '../img/bg/bg-hover.png';

const images = [
  { src: require('../img/our-talent/KacaNetwork/rsz_aero.jpg'), desc: 'Image 1' },
  { src: require('../img/our-talent/KacaNetwork/rsz_angie.jpg'), desc: 'Image 2' },
  { src: require('../img/our-talent/KacaNetwork/rsz_daffa.jpg'), desc: 'Image 3' },
  { src: require('../img/our-talent/KacaNetwork/rsz_dindra.jpg'), desc: 'Image 4' },
  { src: require('../img/our-talent/KacaNetwork/GENU.jpg'), desc: 'Image 5' },
  { src: require('../img/our-talent/KacaNetwork/JEHIAN.jpg'), desc: 'Image 6' },
  { src: require('../img/our-talent/KacaNetwork/JEROME.jpg'), desc: 'Image 7' },
  { src: require('../img/our-talent/KacaNetwork/KEZIV.jpg'), desc: 'Image 8' },
];

const ImageCarousel = () => {
  const galleryRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (galleryRef.current) {
      setMaxScroll(galleryRef.current.scrollWidth - galleryRef.current.clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current && scrollPosition > 0) {
      const newPosition = Math.max(scrollPosition - 400, 0);
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (galleryRef.current && scrollPosition < maxScroll) {
      const newPosition = Math.min(scrollPosition + 400, maxScroll);
      galleryRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (galleryRef.current) {
      setScrollPosition(galleryRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (gallery) {
        gallery.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div ref={galleryRef} className="carousel-track">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-item-inner">
                <div 
                  className="gif-background" 
                  style={{ backgroundImage: `url(${backgroundGif})` }}
                />
                <img src={image.src} alt={`Image ${index + 1}`} />
                <div className="image-description">
                  <p>{image.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <div className="gallery-controls">
          <button 
            className="slider-arrow-kaca " 
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
          >
            <img src={arrowLeft} alt="Scroll Left" width={24} height={24} />
          </button>
          <button 
            className="slider-arrow-kaca " 
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll}
          >
            <img src={arrowRight} alt="Scroll Right" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;