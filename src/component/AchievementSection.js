import React from 'react';
import '../CSS/Section/AchievementSection.css';

const AchievementSection = () => {
  return (
    <div className="achievement-section">
      
      <div className="content">
        <div className="image-grid">
          <img src= {require('../img/achivement/galery.png')} alt="Woman with product" />
          </div>
        
        <div className="text-content">
          <h1>What we already achieve,</h1>
          <p>
            KACA Kreatif has partnered with other companies and individuals from multiple 
            industries to ensure that our services are not limited but growing. By helping 
            brands navigate rapidly changing markets and pushing emerging businesses to be 
            heard, we aim to create a solid digital communication that matters.
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h2>0<span>million</span></h2>
              <p>Views</p>
            </div>
            <div className="stat-item">
              <h2>0<span>+</span></h2>
              <p>Creative Talents</p>
            </div>
            <div className="stat-item">
              <h2>0<span>+</span></h2>
              <p>Brand Collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;