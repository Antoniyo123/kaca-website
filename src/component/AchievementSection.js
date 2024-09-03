import React from 'react';
import '../CSS/Section/AchievementSection.css';

const AchievementSection = () => {
  // Asumsikan Anda memiliki beberapa gambar tambahan
  const images = [
    require('../img/achivement/aliya.png'),
    require('../img/achivement/aliya.png'),
    require('../img/achivement/aliya.png'),
    require('../img/achivement/aliya.png'),
    // Tambahkan lebih banyak gambar sesuai kebutuhan
  ];

  return (
    <div className="achievement-section">
      <div className="content">
        <div className="image-grid">
          <div className="moving-images">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Achievement ${index + 1}`} />
            ))}
            {/* Duplikasi gambar untuk efek loop yang mulus */}
            {images.map((img, index) => (
              <img key={`dup-${index}`} src={img} alt={`Achievement ${index + 1}`} />
            ))}
          </div>
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