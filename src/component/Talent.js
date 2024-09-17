import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Talent.css';
import PersonalProfile from './PersonalProfile';

const talents = [
  { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), desc: "Ini adalah deskripsi Talent 1.", gif: require('../img/bg/bg-1.png') },
  { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), desc: "Ini adalah deskripsi Talent 2.", gif: require('../img/bg/bg-1.png') },
  { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), desc: "Ini adalah deskripsi Talent 3.", gif: require('../img/bg/bg-1.png') },
  { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), desc: "Ini adalah deskripsi Talent 4.", gif: require('../img/bg/bg-1.png') },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Ini adalah deskripsi Talent 5.", gif: require('../img/bg/bg-1.png') },
];

const Talent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPersonalProfile, setShowPersonalProfile] = useState(false);
  const [hoveredTalent, setHoveredTalent] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const talentsToShow = 4;
  const totalTalents = talents.length;
  const personalProfileRef = useRef(null);
  const talentSectionRef = useRef(null);
  const carouselRef = useRef(null);

  const nextTalent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTalents);
  };

  const prevTalent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTalents) % totalTalents);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!talentSectionRef.current || !personalProfileRef.current) return;

      const talentRect = talentSectionRef.current.getBoundingClientRect();
      const profileRect = personalProfileRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (talentRect.bottom <= windowHeight / 2) {
        setShowPersonalProfile(true);
      } else if (profileRect.top >= windowHeight / 2) {
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

  const getVisibleTalents = () => {
    const visibleTalents = [];
    for (let i = 0; i < talentsToShow; i++) {
      const index = (currentIndex + i) % totalTalents;
      visibleTalents.push(talents[index]);
    }
    return visibleTalents;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextTalent();
    }

    if (touchStart - touchEnd < -75) {
      prevTalent();
    }
  };

  return (
<div className="talent-container-main">
  <div ref={talentSectionRef} className="talent-carousel-container">
    <h1 className='intro'>SAY HELLO TO OUR TALENT</h1>
    <div className="talent-carousel-wrapper">
      <div 
        className="talent-carousel-track" 
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getVisibleTalents().map((talent, index) => (
          <div 
            key={index} 
            className="talent-carousel-item"
            onMouseEnter={() => setHoveredTalent(talent)}
            onMouseLeave={() => setHoveredTalent(null)}
          >
            <div 
              className={`talent-gif ${hoveredTalent === talent ? 'active' : ''}`}
              style={{ backgroundImage: `url(${talent.gif})` }}
            ></div>
            <div 
              className={`talent-image ${hoveredTalent === talent ? 'lifted' : ''}`}
              style={{ backgroundImage: `url(${talent.image})` }}
            ></div>
            {hoveredTalent === talent && (
              <div className="talent-description">
                <p>{talent.name}</p>
                <p>{talent.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    {/* Moved buttons below the carousel wrapper */}
    <div className="talent-nav-buttons">
      <button onClick={prevTalent} className="talent-nav-button prev">&lt;</button>
      <button onClick={nextTalent} className="talent-nav-button next">&gt;</button>
    </div>
  </div>

  <div className="know-more-section">
    <div onClick={scrollToProfile} className="know-more-button">
     Scroll To  Know More About Our Talent
    </div>
  </div>
  <div className="background-photo-talent"></div>



  <div ref={personalProfileRef} className={`personal-profile-wrapper ${showPersonalProfile ? 'active' : ''}`}>
    <PersonalProfile />
  </div>
</div>

  );
};

export default Talent;