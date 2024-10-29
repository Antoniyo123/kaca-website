import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../CSS/Articles/ArticlesDetail.css';

const ArticlesDetail = () => {
  const { id } = useParams();

  // Example article data based on the id
  const article = {
    1: {
      title: "About KACA Kreatif",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/projectdetail/project2.png'),
      additionalImages: [
        require('../img/projects/bts2.png'),
        require('../img/projectdetail/project4.png'),
        require('../img/projectdetail/project5.png')
      ],
      content: "In a world bursting with creativity, one platform just isn't enough for us! We're excited to share our journey and what we can do, both now and in the future, right here on LinkedIn. Our goal is to connect even more creativity in social media marketing and advertising. But first, let's introduce ourselves—we're thrilled to finally be here! Tagar#KACAKreatif",
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    // ... (keep other article data the same)
  };

  const relatedArticles = [
    { title: "Related Article 1", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 2", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 3", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 4", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
  ];

  const currentArticle = article[id] || {};

  // Share handlers remain the same
  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentArticle.title,
          text: currentArticle.content.substring(0, 100) + '...',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleTwitterShare = () => {
    const tweetText = encodeURIComponent(`${currentArticle.title}\n\n`);
    const tweetUrl = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`,
      '_blank'
    );
  };

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied! Open Instagram and paste the link in your story or post.');
  };

  const handleMessageShare = () => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `sms:?body=${encodeURIComponent(currentArticle.title + ' ' + window.location.href)}`;
    } else {
      window.location.href = `mailto:?subject=${encodeURIComponent(currentArticle.title)}&body=${encodeURIComponent(window.location.href)}`;
    }
  };

  return (
    <div className="article-container">
      <div className="breadcrumbs">
        Articles » {currentArticle.title}
      </div>
      
      <h1 className="article-title">
        {currentArticle.title}
      </h1>
      
      <div className="article-meta">
        <span className="article-info-detail">{currentArticle.date} • {currentArticle.shares} shares</span>
        <div className="share-buttons">
          <button onClick={handleGeneralShare} className="share-button" aria-label="Share">
            <Share2 size={20} />
          </button>
          <button onClick={handleInstagramShare} className="share-button instagram" aria-label="Share on Instagram">
            <Instagram size={20} />
          </button>
          <button onClick={handleTwitterShare} className="share-button twitter" aria-label="Share on Twitter">
            <Twitter size={20} />
          </button>
          <button onClick={handleMessageShare} className="share-button message" aria-label="Share via Message">
            <MessageCircle size={20} />
          </button>
        </div>
      </div>
      
      <img 
        src={currentArticle.image} 
        alt={currentArticle.title} 
        className="main-image"
      />
      
      <div className="article-content">
        <p>{currentArticle.content}</p>
      </div>

      <div className="additional-images">
        {currentArticle.additionalImages?.map((image, index) => (
          <div key={index} className="additional-image-container">
            <img 
              src={image} 
              alt={`Additional image ${index + 1}`}
              className="additional-image"
            />
          </div>
        ))}
      </div>
      
      <div className="tags-container">
        {currentArticle.tags?.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="related-articles">
        <h2 className="related-title">More Articles</h2>
        <div className="related-grid">
          {relatedArticles.map((relatedArticle, index) => (
            <div key={index} className="related-article">
              <img 
                src={relatedArticle.image} 
                alt={relatedArticle.title} 
                className="related-image"
              />
              <div className="related-content">
                <h3 className="related-article-title">{relatedArticle.title}</h3>
                <p className="related-article-info">
                  {relatedArticle.date} • {relatedArticle.shares} Shares
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetail;