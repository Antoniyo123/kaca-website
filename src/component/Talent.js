import React, { useRef, useEffect, useState } from 'react';
import '../CSS/Talent.css';
import arrowDown from '../img/svg-assets/arrow-down.svg';
import PersonalProfile1 from './PersonalProfile1';

const talents = [
  { 
    id: 1, 
    name: "NAZLA",
    image: require('../img/our-talent/nazla1.png'), 
    desc: "Nazla Alifa", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 2, 
    name: "AALIYAH",
    image: require('../img/our-talent/aaliyah1.png'), 
    desc: "Aaliyah Massaid", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 3, 
    name: "AQSA",
    image: require('../img/our-talent/aqsa1.png'), 
    desc: "Aqsa Aswar", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 4, 
    name: "AGATHA",
    image: require('../img/our-talent/agatha1.png'), 
    desc: "Agatha Priscillia", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 5, 
    name: "RACHEL",
    image: require('../img/our-talent/rachel1.png'), 
    desc: "Rachel Theresia", 
    gif: require('../img/bg/bg-hover.png') 
  },
];

const Talent = () => {
  const personalProfile1Ref = useRef(null);
  const talentShowcaseRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (talentShowcaseRef.current && personalProfile1Ref.current) {
        const scrollPosition = window.scrollY;
        const talentShowcaseBottom = talentShowcaseRef.current.offsetTop + talentShowcaseRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        
        const progress = (scrollPosition + windowHeight - talentShowcaseBottom) / windowHeight;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (element, duration = 1000) => {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother animation
      const ease = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
      
      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const navigateToTalent = (talentName) => {
    setIsNavigating(true);
    setSelectedTalent(talentName);

    // First scroll to PersonalProfile1
    if (talentShowcaseRef.current) {
      const talentShowcaseBottom = talentShowcaseRef.current.offsetTop + talentShowcaseRef.current.offsetHeight;
      smoothScrollTo(personalProfile1Ref.current, 1000);

      // Wait for the first scroll to complete
      setTimeout(() => {
        const talentElement = document.getElementById(talentName);
        if (talentElement) {
          smoothScrollTo(talentElement, 800);
        }
        
        // Reset navigation state
        setTimeout(() => {
          setIsNavigating(false);
          setSelectedTalent(null);
        }, 1000);
      }, 1200);
    }
  };

  const togglePersonalProfile = () => {
    if (talentShowcaseRef.current) {
      smoothScrollTo(personalProfile1Ref.current, 1000);
    }
  };

  // Add CSS classes for animations
  const getTalentItemClass = (talent, index) => {
    let classes = "talent-item";
    if (isNavigating) {
      if (talent.name === selectedTalent) {
        classes += " talent-selected";
      } else {
        classes += " talent-fade-out";
      }
    }
    return classes;
  };

  return (
    <div className="talent-container">
      <div className="talent-showcase" ref={talentShowcaseRef}>
        <div className="talent-showcase-wrapper">
          <h1 className="talent-title">SAY HELLO TO OUR TALENT</h1>
    
          <div className="talent-carousel-wrapper">
            <div className="talent-carousel">
              {talents.slice(0, 5).map((talent, index) => (
                <div 
                  className={getTalentItemClass(talent, index)}
                  onMouseEnter={() => !isNavigating && setHoveredIndex(index)}
                  onMouseLeave={() => !isNavigating && setHoveredIndex(null)}
                  onClick={() => !isNavigating && navigateToTalent(talent.name)}
                  key={talent.id}
                  style={{ cursor: isNavigating ? 'default' : 'pointer' }}
                >
                  <div className="talent-background">
                    <img 
                      src={talent.gif} 
                      alt="Background Hover" 
                      className={`hover-gif ${hoveredIndex === index ? 'active' : ''}`}
                    />
                  </div>
                  <div className="talent-content">
                    <img 
                      src={talent.image} 
                      alt={`Talent ${talent.name}`} 
                      className="talent-image"
                    />
                    <div className="talent-description">
                      <p>{talent.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
        <div 
          className={`scroll-indicator-talent ${isNavigating ? 'fade-out' : ''}`} 
          onClick={togglePersonalProfile}
        >
          <span>Scroll to know more about our talent</span>
          <img src={arrowDown} alt="Arrow Down" width={24} height={24} />
        </div>
      </div>

      <div className="background-photo-talent"></div>

      <div 
        ref={personalProfile1Ref} 
        className="personal-profile-wrapper"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 100}%)`,
          opacity: scrollProgress,
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
        }}
      >
        <PersonalProfile1 />
      </div>
    </div>
  );
};

export default Talent;