import React, { useRef, useEffect, useState } from 'react';
import '../CSS/Talent.css';
import arrowDown from '../img/svg-assets/arrow-down.svg';
import PersonalProfile1 from './PersonalProfile1';

const talents = [
  { 
    id: 'nazla', 
    name: "NAZLA",
    fullName: 'NAZLA ALIFA',
    image: require('../img/our-talent/NAZLA.png'), 
    desc: "Nazla Alifa", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 'aaliyah', 
    name: 'AALIYAH',
    fullName: 'AALIYAH MASSAID',
    image: require('../img/our-talent/AALIYAH.png'), 
    desc: "Aaliyah Massaid", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 'aqsa', 
    name: 'AQSA',
    image: require('../img/our-talent/AQSA.png'), 
    desc: "Aqsa Aswar", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 'agatha', 
    name: "AGATHA",
    image: require('../img/our-talent/AGATHA.png'), 
    desc: "Agatha Pricilla", 
    gif: require('../img/bg/bg-hover.png') 
  },
  { 
    id: 'rachel', 
    name: "RACHEL",
    image: require('../img/our-talent/RACHEL.png'), 
    desc: "Rachel Theresia", 
    gif: require('../img/bg/bg-hover.png') 
  },
];

const Talent = () => {
  const personalProfile1Ref = useRef(null);
  const talentShowcaseRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (talentShowcaseRef.current) {
        const talentShowcaseRect = talentShowcaseRef.current.getBoundingClientRect();
        const threshold = window.innerHeight * 0.7;
        setIsVisible(talentShowcaseRect.bottom < threshold);
        
        const scrollPosition = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(scrollPosition / maxScroll);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (element, duration = 1200, callback) => {
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    let animationFrame = null;

    const easeInOutQuart = (t) => {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easedProgress = easeInOutQuart(progress);
      const currentPosition = startPosition + distance * easedProgress;

      window.scrollTo({
        top: currentPosition,
        behavior: 'smooth'
      });

      if (timeElapsed < duration) {
        animationFrame = requestAnimationFrame(animation);
      } else {
        if (callback) callback();
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      }
    };

    animationFrame = requestAnimationFrame(animation);
  };

  const navigateToTalent = async (talentName) => {
    if (isNavigating) return;
    
    setSelectedTalent(talentName);
    setIsNavigating(true);
  
    // Find the PersonalProfile1 section
    const profileSection = document.querySelector('.tab__bar__container__wraper');
    if (!profileSection) {
      setIsNavigating(false);
      return;
    }
  
    // First scroll to PersonalProfile1 section
    const headerOffset = 80;
    const elementPosition = profileSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    // Perform smooth scroll to the profile section
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  
    // Wait for the scroll to complete before highlighting the talent content
    setTimeout(() => {
      // Find the specific talent's content
      const talentContent = document.getElementById(talentName);
      if (talentContent) {
        // Add highlight effect
        talentContent.classList.add('talent-highlight');
        
        // Scroll the talent content into view within the PersonalProfile1 component
        talentContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Remove highlight after animation
        setTimeout(() => {
          talentContent.classList.remove('talent-highlight');
        }, 500);
      }
      
      setIsNavigating(false);
    }, 1000); // Adjust timing based on scroll duration
  };

  const togglePersonalProfile = () => {
    if (personalProfile1Ref.current) {
      personalProfile1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getTalentItemClass = (talent) => {
    let classes = "talent-item";
    if (isNavigating && talent.name === selectedTalent) {
      classes += " talent-selected";
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
              {talents.map((talent, index) => (
                <div 
                  className={getTalentItemClass(talent)}
                  onMouseEnter={() => !isNavigating && setHoveredIndex(index)}
                  onMouseLeave={() => !isNavigating && setHoveredIndex(null)}
                  onClick={() => !isNavigating && navigateToTalent(talent.name)}
                  key={talent.id}
                  style={{ 
                    cursor: isNavigating ? 'default' : 'pointer',
                    transition: 'opacity 0.3s ease-in-out'
                  }}
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
          className="scroll-indicator-talent"
          onClick={togglePersonalProfile}
        >
          <span>Scroll to know more about our talent</span>
          <img src={arrowDown} alt="Arrow Down" width={24} height={24} />
        </div>
      </div>

      <div className="background-photo-talent"></div>

      <div 
        ref={personalProfile1Ref} 
        className={`personal-profile-wrapper ${isVisible ? 'visible' : ''}`}
        style={{
          '--scroll-progress': scrollProgress
        }}
      >
        <PersonalProfile1 
          initialSelectedTalent={selectedTalent}
        />
      </div>
    </div>
  );
};

export default Talent;