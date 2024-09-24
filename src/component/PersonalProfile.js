import React, { useState } from 'react';
import '../CSS/PersonalProfile.css';
import arrowRightButton from '../img/svg-assets/arrow-right-button.svg';
import arrowLeftButton from '../img/svg-assets/arrow-left-button.svg';
import KacaNetwork from './KacaNetwork';

const PersonalProfile = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState('Nazla');

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const profiles = {
    Nazla: {
      name: "Nazla Alifa",
      image: require('../img/profile/nazla-profile.png'),
      instagram: "nazlaalifa",
      tiktok: "nazlaalifa",
      stats: { followers: "100K", impressions: "500K", likes: "200K" },
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her adventures through her social media, especially her passion for travel, fashion, and food.`,
      articles: [
        { title: "Article 1", content: "Lorem ipsum dolor sit amet..." },
        { title: "Article 2", content: "Sed nisi. Nulla quis sem at nibh elementum..." },
        { title: "Article 2", content: "Sed nisi. Nulla quis sem at nibh elementum..." },
        { title: "Article 2", content: "Sed nisi. Nulla quis sem at nibh elementum..." },
        { title: "Article 2", content: "Sed nisi. Nulla quis sem at nibh elementum..." },
        { title: "Article 2", content: "Sed nisi. Nulla quis sem at nibh elementum..." },
        // more articles
      ],
    },
    Aaliyah: {
      name: "Aaliyah",
      image: require('../img/profile/aaliyah-profile.png'),
      instagram: "aaliyah",
      tiktok: "aaliyah",
      stats: { followers: "150K", impressions: "600K", likes: "250K" },
      description: `Aaliyah Massaid is a Content Creator which focused on Lifestyle, Fashion, Sports and Beauty. Aaliyah also known for her amazing voice as she has a remarkable contribution on the music industry.

With her limitless energy towards people, she could light up the room she enters. Aaliyah is a passionate individual and always eager to achieve what she intended to.`,
      articles: [
        { title: "Article 1", content: "Aaliyah's impact on fashion..." },
        { title: "Article 2", content: "Her journey through the industry..." },
        // more articles
      ],
    },
    Rachel: {
      name: "Aaliyah",
      image: require('../img/profile/rachel-profile.png'),
      instagram: "aaliyah",
      tiktok: "aaliyah",
      stats: { followers: "150K", impressions: "600K", likes: "250K" },
      description: `Aaliyah Massaid is a Content Creator which focused on Lifestyle, Fashion, Sports and Beauty. Aaliyah also known for her amazing voice as she has a remarkable contribution on the music industry.

With her limitless energy towards people, she could light up the room she enters. Aaliyah is a passionate individual and always eager to achieve what she intended to.`,
      articles: [
        { title: "Article 1", content: "Aaliyah's impact on fashion..." },
        { title: "Article 2", content: "Her journey through the industry..." },
        // more articles
      ],
    },
    Aqsa: {
      name: "Aaliyah",
      image: require('../img/profile/aqsa-profile.png'),
      instagram: "aaliyah",
      tiktok: "aaliyah",
      stats: { followers: "150K", impressions: "600K", likes: "250K" },
      description: `Aaliyah Massaid is a Content Creator which focused on Lifestyle, Fashion, Sports and Beauty. Aaliyah also known for her amazing voice as she has a remarkable contribution on the music industry.

With her limitless energy towards people, she could light up the room she enters. Aaliyah is a passionate individual and always eager to achieve what she intended to.`,
      articles: [
        { title: "Article 1", content: "Aaliyah's impact on fashion..." },
        { title: "Article 2", content: "Her journey through the industry..." },
        // more articles
      ],
    },
    Agatha: {
      name: "Aaliyah",
      image: require('../img/profile/agatha-profile.png'),
      instagram: "aaliyah",
      tiktok: "aaliyah",
      stats: { followers: "150K", impressions: "600K", likes: "250K" },
      description: `Aaliyah Massaid is a Content Creator which focused on Lifestyle, Fashion, Sports and Beauty. Aaliyah also known for her amazing voice as she has a remarkable contribution on the music industry.

With her limitless energy towards people, she could light up the room she enters. Aaliyah is a passionate individual and always eager to achieve what she intended to.`,
      articles: [
        { title: "Article 1", content: "Aaliyah's impact on fashion..." },
        { title: "Article 2", content: "Her journey through the industry..." },
        // more articles
      ],
    },
    'More Talent': {
      component: <KacaNetwork />, // Render the KacaNetwork component directly
    },

    // Add profiles for Aaliyah, Agatha, Aqsa, Rachel, etc.
  };

  const currentProfile = profiles[activeTab];

  return (
<div className="personal-profile-container">
      <div className="tab-container">
        <div className="tab-container-inner">
          {Object.keys(profiles).map((profile) => (
            <div
              key={profile}
              className={`tab ${activeTab === profile ? 'active' : ''} ${profile === '.KACA Network >>' ? 'kaca-network-tab' : ''}`}
              onClick={() => setActiveTab(profile)}
            >
              {profile}
            </div>
          ))}
        </div>
      </div>
      <div className="profile-content">
      
        {activeTab === 'More Talent'  ? (
          currentProfile.component
        ) : (
          <>
            <div className="profile-left">
              <div className="image-container">
                <img src={currentProfile.image} alt={currentProfile.name} />
                <button className="slide-button left">
                <img src={arrowLeftButton} alt="Arrow Left Button" width={24} height={24} />

                </button>
                <button className="slide-button right">
                <img src={arrowRightButton} alt="Arrow Right Button" width={24} height={24} />

                </button>
              </div>
            </div>
            <div className="profile-center">
              <h2>{currentProfile.name}</h2>
              <div className="social-links">
                <a href={`https://instagram.com/${currentProfile.instagram}`} target="_blank" rel="noopener noreferrer">
                  Instagram: @{currentProfile.instagram}
                </a>
                <a href={`https://tiktok.com/@${currentProfile.tiktok}`} target="_blank" rel="noopener noreferrer">
                  TikTok: @{currentProfile.tiktok}
                </a>
              </div>
              <div className="statistic">
                <div className="stat-talent">
                  <p className="stat-label">Followers</p>
                  <p className="stat-value">{currentProfile.stats.followers}</p>
                </div>
                <div className="stat">
                  <p className="stat-label">Impressions</p>
                  <p className="stat-value">{currentProfile.stats.impressions}</p>
                </div>
                <div className="stat">
                  <p className="stat-label">Likes</p>
                  <p className="stat-value">{currentProfile.stats.likes}</p>
                </div>
              </div>
              <div className={`description-text ${showMore ? 'show-more' : ''}`}>
                <p>{currentProfile.description}</p>
              </div>
              <button onClick={handleShowMore}>
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
            <div className="profile-right">
              <h3>Articles</h3>
              <div className="article-content">
                {currentProfile.articles.map((article, index) => (
                  <div key={index} className="article">
                    <h4>{article.title}</h4>
                    <p>{article.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      

    </div>
  );
};

export default PersonalProfile;
