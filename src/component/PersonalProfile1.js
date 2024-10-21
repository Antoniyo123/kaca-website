import React, { useState, useRef } from 'react';
import '../CSS/PersonalProfile1.css';

const PersonalProfile1 = () => {
  const [activeTab, setActiveTab] = useState('Nazla');
  const contentRef = useRef(null);

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
      image: require('../img/talent/nazla-talent.png'),
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
        fullName: 'NAZLA ALIFA',
        instagram: 'nazlaalifa',
        tiktok: 'nazlaalifas',
        instagramFollowers: '1.9 m',
        instagramImpressions: '5.21 m',
        tiktokFollowers: '500K',
        tiktokLikes: '4.3 m',
        description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.
  
  Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
        image: require('../img/talent/nazla-talent.png'),
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
        fullName: 'NAZLA ALIFA',
        instagram: 'nazlaalifa',
        tiktok: 'nazlaalifas',
        instagramFollowers: '1.9 m',
        instagramImpressions: '5.21 m',
        tiktokFollowers: '500K',
        tiktokLikes: '4.3 m',
        description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.
  
  Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
        image: require('../img/talent/nazla-talent.png'),
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
        fullName: 'NAZLA ALIFA',
        instagram: 'nazlaalifa',
        tiktok: 'nazlaalifas',
        instagramFollowers: '1.9 m',
        instagramImpressions: '5.21 m',
        tiktokFollowers: '500K',
        tiktokLikes: '4.3 m',
        description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.
  
  Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
        image: require('../img/talent/nazla-talent.png'),
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
        fullName: 'NAZLA ALIFA',
        instagram: 'nazlaalifa',
        tiktok: 'nazlaalifas',
        instagramFollowers: '1.9 m',
        instagramImpressions: '5.21 m',
        tiktokFollowers: '500K',
        tiktokLikes: '4.3 m',
        description: `Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations.
  
  Over the past six years, she has cultivated a personal style that is both sophisticated and versatile in a way where people can relate to her style. She is also a founder of multiple businesses such as Kopi Botol Kaca and Kaca Kreatif. She shares all of her...`,
        image: require('../img/talent/nazla-talent.png'),
        articles: [
          { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
          { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
          { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
          { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
          { title: 'Inspirasi Kreasi Es Kopi Ala Content Cr...', date: '01 August 2024' },
        ]
      },

    // Tambahkan lebih banyak talent jika diperlukan...
  ];

  const handleTabClick = (talentName) => {
    setActiveTab(talentName);
    const element = document.getElementById(talentName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
    const [isExpanded, setIsExpanded] = useState(false); // State for showing full description
  
    const toggleShowMore = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className='talent__card__wrapper'>
      <div id={talent.name} className="talent-card">
        <div className="talent-image-personal">
          <img src={talent.image} alt={talent.fullName} />
          <button className="arrow-button left">&lt;</button>
          <button className="arrow-button right">&gt;</button>
        </div>
        <div className="talent-info">
          <h2>{talent.fullName}</h2>
          <div className="social-stats">
            <div className="instagram">
              <p>Instagram: @{talent.instagram}</p>
              <p>Follower {talent.instagramFollowers}</p>
              <p>Impression {talent.instagramImpressions}</p>
            </div>
            <div className="tiktok">
              <p>TikTok: @{talent.tiktok}</p>
              <p>Follower {talent.tiktokFollowers}</p>
              <p>Likes {talent.tiktokLikes}</p>
            </div>
          </div>
  
          {/* Tambahkan kelas 'expanded' ketika isExpanded bernilai true */}
          <p className={`description ${isExpanded ? 'expanded' : ''}`}>
            {talent.description}
          </p>
          <button className="show-more" onClick={toggleShowMore}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <div className="talent-articles">
          <h3>Articles</h3>
          <div className="article-list">
            {talent.articles.map((article, index) => (
              <div key={index} className="article">
                <h4>{article.title}</h4>
                <p>{article.date}</p>
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
            <h2>More Talents Coming Soon</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile1;
