import React, { useState, useRef } from 'react';
import '../CSS/PersonalProfile1.css';
import KacaNetwork from '../component/KacaNetwork'

const PersonalProfile1 = () => {
  const [activeTab, setActiveTab] = useState(null);
  const contentRef = useRef(null);
  const [socialStats, setSocialStats] = useState({});

  const talents = [
    {
      name: 'NAZLA',
      fullName: 'NAZLA ALIFA',
      instagram: 'nazlaalifa',
      tiktok: 'nazlaalifas',
      instagramFollowers: '1.9 m',
      instagramImpressions: '5.21 m',
      tiktokFollowers: '500K',
      tiktokLikes: '4.3 m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
      images: [
        require('../img/our-talent/nazla1.png'),
        require('../img/talent/aero.png'),
        require('../img/talent/agatha-talent.png'),
      ],
      articles: [
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
        { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
      ]
    },
    {
      name: 'AALIYAH',
      fullName: 'AALIYAH MASSAID',
      instagram: 'aaliyah.massaid',
      tiktok: 'aalmassaid',
      instagramFollowers: '1.9 m',
      instagramImpressions: '5.21 m',
      tiktokFollowers: '500K',
      tiktokLikes: '4.3 m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
      images: [
        require('../img/our-talent/aaliyah1.png'),
        require('../img/talent/aero.png'),
        require('../img/talent/agatha-talent.png'),
      ],
      articles: [
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
        { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
      ]
    },
    {
      name: 'AQSA',
      fullName: 'AQSA ASWAR',
      instagram: 'aqsaaswar',
      tiktok: 'aqsaaswar',
      instagramFollowers: '1.9 m',
      instagramImpressions: '5.21 m',
      tiktokFollowers: '500K',
      tiktokLikes: '4.3 m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
      images: [
        require('../img/our-talent/aqsa1.png'),
        require('../img/talent/aero.png'),
        require('../img/talent/agatha-talent.png'),
      ],
      articles: [
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
        { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
      ]
    },
    {
      name: 'RACHEL',
      fullName: 'RACHEL TERESIA',
      instagram: 'racheltheresia',
      tiktok: 'rachel.theresia',
      instagramFollowers: '1.9 m',
      instagramImpressions: '5.21 m',
      tiktokFollowers: '500K',
      tiktokLikes: '4.3 m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
      images: [
        require('../img/our-talent/rachel.jpg'),
        require('../img/talent/aero.png'),
        require('../img/talent/agatha-talent.png'),
      ],
      articles: [
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
        { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
      ]
    },
    {
      name: 'AGATHA',
      fullName: 'AGATHA PRICILLA',
      instagram: 'agthpricilla',
      tiktok: 'agthpricilla',
      instagramFollowers: '1.9 m',
      instagramImpressions: '5.21 m',
      tiktokFollowers: '500K',
      tiktokLikes: '4.3 m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
      images: [
        require('../img/our-talent/agatha1.png'),
        require('../img/talent/aero.png'),
        require('../img/talent/agatha-talent.png'),
      ],
      articles: [
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
        { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
      ]
    },
    // Tambahkan talent lain jika diperlukan
  ];

  const handleTabClick = (talentName) => {
    setActiveTab(talentName);
    const element = document.getElementById(talentName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const openSocialMedia = (platform, username) => {
    const urls = {
      instagram: `https://instagram.com/${username}`,
      tiktok: `https://tiktok.com/@${username}`
    };
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  };
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const TabBar = () => (
    <div className='tab__bar__container'>
      <div className='tab__bar__wrapper'>
        <div className="tab-bar">
          {talents.map((talent) => (
            <button
              key={talent.name}
              className={`tab ${activeTab === talent.name ? 'active' : ''}`}
              onClick={() => handleTabClick(talent.name)}
            >
              {talent.name}
            </button>
          ))}
          <button
            className="tab"
            onClick={() => handleTabClick('More Talents')}
          >
            More Talents
          </button>
        </div>
      </div>
    </div>
  );

  const TalentCard = ({ talent }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleShowMore = () => {
      setIsExpanded(!isExpanded);
    };

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? talent.images.length - 1 : prevIndex - 1
      );
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === talent.images.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div className='talent__card__wrapper'>
        <div id={talent.name} className="talent-card">
          {/* Image Carousel Section */}
          <div className="talent-image-personal">
            <img 
              src={talent.images[currentImageIndex]} 
              alt={`${talent.fullName} - Image ${currentImageIndex + 1}`} 
              className="main-image"
            />
            <button 
              className="arrow-button left"
              onClick={handlePrevImage}
              aria-label="Previous image"
            >
              &lt;
            </button>
            <button 
              className="arrow-button right"
              onClick={handleNextImage}
              aria-label="Next image"
            >
              &gt;
            </button>
            <div className="image-indicators">
              {talent.images.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="talent-info">
            <h2 className="talent-name">{talent.fullName}</h2>
            
            {/* Social Stats Section - New Layout */}
            <div className="social-stats-container">
              {/* Baris atas - Logo dan Username */}
              <div className="social-usernames">
                <div className="social-platform instagram-platform">
                  <img 
                    src={require('../img/icon/instagram.png')} 
                    alt="Instagram"
                    className="social-icon"
                  />
                  <a href={`https://www.instagram.com/${talent.instagram}`} target="_blank" rel="noopener noreferrer" className="username">
                    @{talent.instagram}
                  </a>

                </div>
                <div className="social-platform tiktok-platform">
                  <img 
                    src={require('../img/icon/tiktok.png')} 
                    alt="TikTok"
                    className="social-icon"
                  />
                    <a href={`https://www.tiktok.com/@${talent.tiktok}`} target="_blank" rel="noopener noreferrer" className="username">
                      @{talent.tiktok}
                    </a>

                </div>
              </div>
              
              {/* Baris bawah - Metrics */}
              <div className="social-metrics">
                <div className="instagram-metrics">
                  <div className="metric">
                    <span className="metric-label">Follower</span>
                    <span className="metric-value">{talent.instagramFollowers}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Impression</span>
                    <span className="metric-value">{talent.instagramImpressions}</span>
                  </div>
                </div>
                <div className="tiktok-metrics">
                  <div className="metric">
                    <span className="metric-label">Follower</span>
                    <span className="metric-value">{talent.tiktokFollowers}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Likes</span>
                    <span className="metric-value">{talent.tiktokLikes}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="description-container">
              <p className={`description ${isExpanded ? 'expanded' : ''}`}>
                {talent.description}
              </p>
              <button className="show-more" onClick={toggleShowMore}>
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>

          {/* Articles Section */}
          <div className="talent-articles">
            <h3 className="articles-title">Articles</h3>
            <div className="article-list">
              {talent.articles.map((article, index) => (
                <div key={index} className="article">
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-date">{article.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="talent-profile">
      <TabBar />
      <div className="talent-content-wrapper">
        <div ref={contentRef} className="talent-content">
          {talents.map((talent) => (
            <TalentCard key={talent.name} talent={talent} />
          ))}
          <div id="More Talents" className="more-talents">
            <KacaNetwork/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile1;