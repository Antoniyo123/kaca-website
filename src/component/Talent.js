import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Talent.css';
import arrowRight from '../img/svg-assets/arrow-right.svg';
import arrowLeft from '../img/svg-assets/arrow-left.svg';
import arrowDown from '../img/svg-assets/arrow-down.svg';
import PersonalProfile1 from './PersonalProfile1';

const talents = [
  { id: 1, name: "Talent 1", image: require('../img/talent/nazla-talent.png'), desc: "Nazla ALifah", gif: require('../img/bg/bg-hover.png') },
  { id: 2, name: "Talent 2", image: require('../img/talent/rachel-talent.png'), desc: "Rachel", gif: require('../img/bg/bg-hover.png') },
  { id: 3, name: "Talent 3", image: require('../img/talent/aqsa-talent.png'), desc: "Aqsa Aswar", gif: require('../img/bg/bg-hover.png') },
  { id: 4, name: "Talent 4", image: require('../img/talent/agatha-talent.png'), desc: "Agatha Priscillia", gif: require('../img/bg/bg-hover.png') },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Aaliyah Masaid", gif: require('../img/bg/bg-hover.png') },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Aaliyah Masaid", gif: require('../img/bg/bg-hover.png') },
  { id: 5, name: "Talent 5", image: require('../img/talent/aalyah-talent.png'), desc: "Aaliyah Masaid", gif: require('../img/bg/bg-hover.png') },

];

const Talent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [talentsToShow] = useState(4); // Menampilkan 3 talent sekaligus
  const itemWidth = 314; // 270px item + 70px gap sesuai CSS
  const personalProfile1Ref = useRef(null);
  const talentShowcaseRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const nextTalent = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 1, talents.length - talentsToShow)
    );
  };

  const prevTalent = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const togglePersonalProfile = () => {
    if (talentShowcaseRef.current) {
      const talentShowcaseBottom = talentShowcaseRef.current.offsetTop + talentShowcaseRef.current.offsetHeight;
      window.scrollTo({
        top: talentShowcaseBottom,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="talent-container">
      <div className="talent-showcase" ref={talentShowcaseRef}>
        <div className="talent-showcase-wrapper">
          <h1 className="talent-title">SAY HELLO TO OUR TALENT</h1>
    
          <div className="talent-carousel-wrapper">
            <div 
              className="talent-carousel" 
              style={{ 
                transform: `translateX(-${currentIndex * itemWidth}px)`,
              }}
            >
              {talents.map((talent, index) => (
                <div 
                  className="talent-item"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={talent.id}
                >
                  <div className="talent-background">
                    <img 
                      src={talent.gif} 
                      alt="Background Hover" 
                      className={`hover-gif ${hoveredIndex === index ? 'active' : ''}`}
                    />
                  </div>
                  <div className="talent-content">
                    <img src={talent.image} alt={`Talent ${talent.name}`} className="talent-image" />
                    <div className="talent-description">
                      <p>{talent.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          <div className="nav-buttons">
            <button 
              onClick={prevTalent} 
              className="nav-button-talent prev"
              disabled={currentIndex === 0} // Disabled jika sudah di awal
            >
              <img src={arrowLeft} alt="Arrow Left" width={24} height={24} />
            </button>
            <button 
              onClick={nextTalent} 
              className="nav-button-talent next"
              disabled={currentIndex === talents.length - talentsToShow} // Disabled jika sudah di akhir
            >
              <img src={arrowRight} alt="Arrow Right" width={24} height={24} />
            </button>
          </div>
        </div>
    
        <div className="scroll-indicator-talent" onClick={togglePersonalProfile}>
          <span>Scroll to know more about our talent</span>
          <img src={arrowDown} alt="Arrow Down" width={24} height={24} />
        </div>
      </div>

      <div 
        ref={personalProfile1Ref} 
        className="personal-profile-wrapper"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 100}%)`,
          opacity: scrollProgress
        }}
      >
        <PersonalProfile1 />
      </div>
    </div>
  );
};

export default Talent;
