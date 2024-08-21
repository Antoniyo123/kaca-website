import React, { useState } from 'react';
import '../CSS/PersonalProfile.css';

const influencers = {
  Nazla: {
    name: 'Nazla Alifa',
    instagram: 'nazlaalifa',
    tiktok: 'nazlaalifas',
    followers: '1.9 m',
    impression: '5.21 m',
    bio: 'Born In Jakarta, Nazla Alifa has always had an eye for fashion trends since she was younger. She is an early adopter of the lifestyle content creator movement, covering her daily travel and fashion inspirations',

    image: require('../img/profile/nazla-profile.png')
   
  },
  Aaliyah: {
    name: 'Aaliyah Massaid',
    instagram: 'aaliyah.massaid',
    tiktok: 'aaliyahmassaid',
    followers: '1.5 m',
    impression: '4.8 m',
    bio: 'Aaliyah Massaid is a rising star in the Indonesian fashion scene...',
    image: require('../img/profile/nazla-profile.png')

  },
  // Tambahkan data untuk influencer lainnya
};

const articles = [
  { title: 'Inspirasi Kreasi Es Kopi Ala Content Creator', date: '01 August 2024' },
  { title: '5 Ide Mix and Match Skirt ala Selebgram', date: '01 August 2024' },
  { title: '10 Potret Romantis Influencer', date: '01 August 2024' },
  // Tambahkan artikel lainnya
];

const PersonalProfile = () => {
  const [currentInfluencer, setCurrentInfluencer] = useState('Nazla');
  const [showMore, setShowMore] = useState(false);

  const handleInfluencerChange = (name) => {
    setCurrentInfluencer(name);
    setShowMore(false);
  };

  const influencer = influencers[currentInfluencer];

  return (
    <div className="profile-container">
      <main className="main-content">
        <div className="profile-info">
          <div className="profile-image">
            <img src={influencer.image} alt={influencer.name} />
          </div>
          <div className="profile-details">
            <h1>{influencer.name}</h1>
            <div className="social-links">
              <span>Instagram: {influencer.instagram}</span>
              <span>TikTok: {influencer.tiktok}</span>
            </div>
            <div className="stats">
              <div className="stat-item">
                <span>Follower</span>
                <strong>{influencer.followers}</strong>
              </div>
              <div className="stat-item">
                <span>impression</span>
                <strong>{influencer.impression}</strong>
              </div>
            </div>
            <p className="bio">
              {showMore ? influencer.bio : `${influencer.bio.substring(0, 100)}...`}
            </p>
            <button className="show-more" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
        
        <aside className="sidebar">
          <h2>Recent Articles</h2>
          <div className="article-list">
            {articles.map((article, index) => (
              <div key={index} className="article-item">
                <h3>{article.title}</h3>
                <p>{article.date}</p>
              </div>
            ))}
          </div>
        </aside>
      </main>
      
      <nav className="bottom-nav">
        {Object.keys(influencers).map(name => (
          <button
            key={name}
            className={currentInfluencer === name ? 'active' : ''}
            onClick={() => handleInfluencerChange(name)}
          >
            {name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default PersonalProfile;