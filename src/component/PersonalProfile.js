import React, { useState } from 'react';
import '../CSS/PersonalProfile.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons for slide buttons

const PersonalProfile = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="personal-profile-container">
      <div className="profile-content">
        <div className="profile-left">
          <div className="image-container">
            <img src={require('../img/profile/nazla-profile.png')} alt="Nazla Alifa" />
            <button className="slide-button left">
              <FaArrowLeft />
            </button>
            <button className="slide-button right">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="profile-center">
          <h2>Nazla Alifa</h2>
          <div className="social-links">
            <a href="https://instagram.com/nazlaalifa" target="_blank" rel="noopener noreferrer">Instagram: @nazlaalifa</a>
            <a href="https://tiktok.com/@nazlaalifa" target="_blank" rel="noopener noreferrer">TikTok: @nazlaalifa</a>
          </div>
          <div className="stats">
            <div className="stat">
              <p className="stat-label">Followers</p>
              <p className="stat-value">100K</p>
            </div>
            <div className="stat">
              <p className="stat-label">Impressions</p>
              <p className="stat-value">500K</p>
            </div>
            <div className="stat">
              <p className="stat-label">Followers</p>
              <p className="stat-value">80K</p>
            </div>
            <div className="stat">
              <p className="stat-label">Likes</p>
              <p className="stat-value">200K</p>
            </div>
          </div>
          <div className={`description-text ${showMore ? 'show-more' : ''}`}>
            <p>
              Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.
            </p>
            <p>
              Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her adventures through her social media, especially her passion for travel, fashion, and food.
            </p>
          </div>
          <button onClick={handleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <div className="profile-right">
          <h3>Articles</h3>
          <div className="article-content">
            <div className="article">
              <h4>Article 1</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
            <div className="article">
              <h4>Article 2</h4>
              <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper aliquet.</p>
            </div>
            <div className="article">
              <h4>Article 3</h4>
              <p>Vestibulum viverra dui nec justo ultricies, nec tempor libero dictum. Etiam cursus leo at sapien malesuada, vel tristique nisi malesuada.</p>
            </div>
            <div className="article">
              <h4>Article 4</h4>
              <p>Vestibulum viverra dui nec justo ultricies, nec tempor libero dictum. Etiam cursus leo at sapien malesuada, vel tristique nisi malesuada.</p>
            </div>
            <div className="article">
              <h4>Article 5</h4>
              <p>Vestibulum viverra dui nec justo ultricies, nec tempor libero dictum. Etiam cursus leo at sapien malesuada, vel tristique nisi malesuada.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-container">
        <div className="tab-container-inner">
          <div className="tab">Nazla</div>
          <div className="tab">Aaliyah</div>
          <div className="tab">Agatha</div>
          <div className="tab">Aqsa</div>
          <div className="tab">Rachel</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
