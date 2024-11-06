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
      instagramFollowers: '364K',
      instagramImpressions: '12.1m',
      tiktokFollowers: '148.9K',
      tiktokLikes: '3.9m',
      description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.

Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her adventures through her social media, especially her passion for travel, fashion, and food. `,
      images: [
        require('../img/our-talent/nazla1.png'),
        require('../img/profile/changeimg/nazlaprofile.jpg'),
        // require('../img/talent/agatha-talent.png'),
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
      instagramFollowers: '970K',
      instagramImpressions: '9.3 m',
      tiktokFollowers: '223.4K',
      tiktokLikes: '2.5 m',
      description: `Aaliyah Massaid is a Content Creator which focused on Lifestyle, Fashion, Sports and Beauty. Aaliyah also known for her amazing voice as she has a remarkable contribution on the music industry. With her limitless energy towards people, she could light up the room she enters. Aaliyah is a passionate individual and always eager to achieve what she intended to. `,
      images: [
        require('../img/our-talent/aaliyah1.png'),
        require('../img/profile/Aaliyahprofile.jpg'),
        // require('../img/talent/agatha-talent.png'),
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
      instagramFollowers: '172K',
      instagramImpressions: '1.4m',
      tiktokFollowers: '42.4K',
      tiktokLikes: '180K',
      description: `Aqsa Aswar is a Jet-Ski Athlete and a
World Champion that has won a Gold
Medal in the ASEAN GAMES 2018,
located in Ancol, Jakarta, Indonesia.
Aqsa has been active on Jet-Ski
Racing since he was 6 years old.
Aqsa is also the founder of Kopi
Botol Kaca, which was established
in 2020 during the pandemic. Aqsa is
fun, energetic, easy-going, and an
active individual. His active lifestyle
has always been interpreted in his
daily life since the beginning of his
Jet-ski career. `,
      images: [
        require('../img/our-talent/aqsa1.png'),
        require('../img/profile/aqsaprofile.jpg'),
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
      instagramFollowers: '237K',
      instagramImpressions: '2.4m',
      tiktokFollowers: '1.328',
      tiktokLikes: '40K',
      description: `Rachel Theresia is a content creator
who specializes in beauty and
fashion. She is known for her
unbiased product reviews, style
choices, and beauty tips. Her
fashion interest led her to take
fashion as her major in one of the
private universities in Jakarta.
As a content creator, she has worked
with many big brands like Louis
Vuitton, Dior, Hermes, Samsung,
Bobbi Brown, Jo Malone, etc.
Besides beauty and fashion, she
loves to travel. She likes to share
her experience through social media
and documentation her travel with
good videos and photos. `,
      images: [
        require('../img/our-talent/rachel.jpg'),
        require('../img/profile/rachelprofile.jpg'),
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
      description: `Agatha Pricilla has been popularly known when she was very young. After spending seven years together in an all-girls vocal group, now Agatha Pricilla starts a new chapter of her musical journey with her own name and story. Not just a singer, Agatha Pricilla is also Known as an actress and content creator. She has been involved in a movie called 'Bebas' and several movies & series. She has also involved in Disney's Mulan for their soundtrack. She has been collaborate with reputable brands in the past few years. `,
      images: [
        require('../img/our-talent/agatha1.png'),
        require('../img/profile/agathaprofile.jpg'),
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
              className="main-image-profile"
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
            <div className="article-list-profile">
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