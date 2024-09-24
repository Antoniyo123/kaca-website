import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Talent.css';
import PersonalProfile from '../component/PersonalProfile';
import arrowRight from '../img/svg-assets/arrow-right.svg'; // Adjust the path as needed
import arrowLeft from '../img/svg-assets/arrow-left.svg';
import arrowDown from '../img/svg-assets/arrow-down.svg';

const talents = [
  { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), desc: "Ini adalah deskripsi Talent 1.", gif: require('../img/bg/bg-1.png') },
  { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), desc: "Ini adalah deskripsi Talent 2.", gif: require('../img/bg/bg-1.png') },
  { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), desc: "Ini adalah deskripsi Talent 3.", gif: require('../img/bg/bg-1.png') },
  { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), desc: "Ini adalah deskripsi Talent 4.", gif: require('../img/bg/bg-1.png') },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Ini adalah deskripsi Talent 5.", gif: require('../img/bg/bg-1.png') },
];

const Talent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [talentsToShow, setTalentsToShow] = useState(4);
  const [itemWidth, setItemWidth] = useState(300);
  const personalProfileRef = useRef(null);
  const talentSectionRef = useRef(null);
  const [showPersonalProfile, setShowPersonalProfile] = useState(false);

  const nextTalent = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, talents.length - talentsToShow)
    );
  };

  const prevTalent = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setTalentsToShow(1);
        setItemWidth(window.innerWidth - 40);
      } else if (window.innerWidth <= 768) {
        setTalentsToShow(2);
        setItemWidth((window.innerWidth - 60) / 2);
      } else {
        setTalentsToShow(4);
        setItemWidth(300);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const talentRect = talentSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (talentRect.bottom <= windowHeight / 2) {
        setShowPersonalProfile(true);
      } else {
        setShowPersonalProfile(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProfile = () => {
    if (personalProfileRef.current) {
      personalProfileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="talent-showcase">
      <div className="talent-showcase-wrapper" ref={talentSectionRef}>
        <h1 className="talent-title">SAY HELLO TO OUR TALENT</h1>
  
        <div className="talent-carousel-wrapper">
          <div 
            className="talent-carousel" 
            style={{ 
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${talents.length * itemWidth}px`
            }}
          >
            {talents.map((talent) => (
              <div key={talent.id} className="talent-item" style={{ width: itemWidth }}>
                <img src={talent.image} alt={`Talent ${talent.name}`} />
                <div className="talent-description">
                  <p>{talent.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <div className="nav-buttons">
          <button 
            onClick={prevTalent} 
            className="nav-button-talent prev"
            disabled={currentIndex === 0}
          >
    <img src={arrowLeft} alt="Arrow Left" width={24} height={24} />

          </button>
          <button 
            onClick={nextTalent} 
            className="nav-button-talent next"
            disabled={currentIndex === talents.length - talentsToShow}
          >
    <img src={arrowRight} alt="Arrow Right" width={24} height={24} />

          </button>
        </div>
      </div>
  
      <div className="scroll-indicator" onClick={scrollToProfile}>
        <span>Scroll to know more about our talent</span>
        <img src={arrowDown} alt="Arrow Down" width={24} height={24} />


      </div>
  
      <div ref={personalProfileRef} className={`personal-profile-wrapper ${showPersonalProfile ? 'active' : ''}`}>
        <PersonalProfile />
      </div>
    </div>
  );
};

export default Talent;