import React, { useEffect } from 'react';
import '../CSS/Section/AchievementSection.css';

const AchievementSection = () => {
  const images = [
    require('../img/achivement/agathamake.png'),
    require('../img/achivement/agathagiorgio.png'),
    require('../img/achivement/nazla-gucci.png'),
    require('../img/achivement/aqsa-nazla.png'),
    require('../img/achivement/aaliyahbaju.png'),
    require('../img/achivement/aqsa.png'),
    require('../img/achivement/rachel-nazla.png'),
    require('../img/achivement/agatha-nazla.png'),
  ];

  useEffect(() => {
    const countUp = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start) + "<span>" + element.dataset.suffix + "</span>";
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const stats = document.querySelectorAll(".stat-item-achievement h2");
    stats.forEach(stat => {
      const endValue = parseInt(stat.getAttribute("data-target"));
      countUp(stat, 0, endValue, 2000);
    });
  }, []);

  const ImageSet = () => (
    <div className="moving-images">
      {images.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`Achievement ${index + 1}`}
          style={{ animationDelay: `${index * 0.2}s` }} // Add stagger effect
        />
      ))}
    </div>
  );

  return (
    <div className="achievement-section">
      <div className="content">
        <div className="image-grid">
          <div className="scroll-wrapper">
            <div className="scroll-content">
              <ImageSet />
              <ImageSet /> {/* Duplicate set for seamless loop */}
            </div>
          </div>
        </div>
        
        <div className="text-content">
          <h1>What we already achieve</h1>
          <p>
            KACA Kreatif has partnered with other companies and individuals from multiple 
            industries to ensure that our services are not limited but growing. By helping 
            brands navigate rapidly changing markets and pushing emerging businesses to be 
            heard, we aim to create a solid digital communication that matters.
          </p>
          
          <div className="stats-achievement">
            <div className="stat-item-achievement">
              <h2 data-target="50" data-suffix="m">0<span>m</span></h2>
              <p>Views</p>
            </div>
            <div className="stat-item-achievement">
              <h2 data-target="100" data-suffix="+">0<span>+</span></h2>
              <p>Creative Talents</p>
            </div>
            <div className="stat-item-achievement">
              <h2 data-target="75" data-suffix="+">0<span>+</span></h2>
              <p>Brand Collaboration</p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-photo-achievemnt"></div>
    </div>
  );
};

export default AchievementSection;