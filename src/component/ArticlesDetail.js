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
      image: require('../img/article/kreatif1.gif'),
      additionalImages: [
        require('../img/article/kreatif2.jpeg'),
        require('../img/article/kreatif3.jpeg'),
        require('../img/article/kreatif4.jpeg')
      ],
      content: {
        paragraph1: "In a world bursting with creativity, one platform just isn't enough for us! We're excited to share our journey and what we can do, both now and in the future, right here on LinkedIn. Our passion for innovation and creative excellence drives everything we do at KACA Kreatif, making us more than just another agency – we're your partners in creative success.",
        paragraph2: "At KACA Kreatif, we specialize in transforming ordinary brand stories into extraordinary digital experiences. Our team of dedicated professionals combines strategic thinking with creative execution to deliver results that truly matter. We understand that in today's fast-paced digital landscape, standing out requires more than just good design – it needs a comprehensive approach that combines aesthetics with functionality.",
        paragraph3: "Our goal is to connect even more creativity in social media marketing and advertising, building bridges between brands and their audiences through authentic, engaging content. Join us on this exciting journey as we continue to push the boundaries of creative excellence. But first, let's introduce ourselves—we're thrilled to finally be here! Tagar#KACAKreatif"
      },
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    4: {
      title: "Influencer marketing",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/article/influencer1.png'),
      additionalImages: [
        require('../img/article/influencer1.png'),
        require('../img/article/influencer2.png'),
        require('../img/article/influencer3.png'),
        require('../img/article/influencer4.png'),
        require('../img/article/influencer5.png')
      ],
      content: {
        paragraph1: "Influencer marketing has revolutionized the way brands connect with their target audiences in the digital age. It's like finding that perfect friend who's always up on the coolest trends and knows just what you're into—except this friend has a massive following and can help get your brand noticed in a big way. The authenticity and relatability of influencer partnerships have made them an invaluable tool in modern marketing strategies.",
        paragraph2: "What makes influencer marketing particularly effective is its ability to leverage trust and credibility that influencers have built with their followers. When an influencer shares your message, it doesn't feel like traditional advertising – it feels like a personal recommendation from someone their audience trusts and respects. This natural integration of brand messaging into organic content creates a powerful connection that traditional advertising methods often struggle to achieve.",
        paragraph3: "If you want your product to really stand out in today's crowded marketplace, teaming up with the right marketing influencer could be the key to making it happen! The key is finding influencers whose values align with your brand and whose audience matches your target demographic. When these elements come together, the results can be truly remarkable. 🚀✨"
      },
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    3: {
      title: "⁠Indonesia Kaya With Rachel",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/article/indonesiakayarachel.png'),
      additionalImages: [
        require('../img/projects/bts2.png'),
        require('../img/projectdetail/project4.png'),
        require('../img/projectdetail/project5.png')
      ],
      content: {
        paragraph1: "Throwback to an unforgettable cultural fashion event! 🌼✨",
        paragraph2: "We just had to share this moment because we are still buzzing from the amazing time spent at the Indonesia Kaya event. Rachel was so honored to wear this beautiful yellow kebaya from her own collection designed by the incredibly talented @didietmaulana. It’s one of those pieces that just makes her feel like a queen!",
        paragraph3: "The Svarna by Ikat Indonesia Trunk Show paired with the gorgeous accessories from Epa Jewel, we are blown away by how effortlessly traditional attire can blend into our modern lives. It’s like, why shouldn’t we wear such stunning pieces every day? it was a perfect match that highlighted the kebaya's versatility. Whether you’re dressing up for a special occasion or just want to add a pop of color to your everyday look, kebaya can totally do it all!",
        paragraph4:"Plus, with July 24th officially recognized as National Kebaya Day, it’s so inspiring to see organizations like Indonesia Kaya working hard to keep our cultural heritage alive and vibrant. It's a reminder that we can embrace our traditions while navigating the modern world. Here’s to celebrating our culture in style! 💖🌟",
        paragraph5:"Discover more about Indonesia Kaya on www.indonesiakaya.com"
      },
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    2: {
      title: "⁠Itro to Kaca Network",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/article/intronetwork1.png'),
      additionalImages: [
        require('../img/article/intronetwork2.png'),
        require('../img/article/intronetwork3.png'),
        require('../img/article/intronetwork4.png'),
        require('../img/article/intronetwork5.png')
      ],
      content: {
        paragraph1: "Social media is totally the go-to spot for promoting businesses these days, and that’s why influencer marketing is such a big deal! While some people might think running a social media campaign is a piece of cake, we know it actually takes a lot of work. That’s where KACA Network comes in to make things easier for you! ",
        paragraph2: "Check KACA Network out through this post or go into details in the link bellow; https://lnkd.in/gCS9K3cT",
        
      },
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    
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
          text: Object.values(currentArticle.content)[0].substring(0, 100) + '...',
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
      
      <h1 className="article-title-detail">
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
        {currentArticle.content && typeof currentArticle.content === 'object' && (
          <>
            <p>{currentArticle.content.paragraph1}</p>
            <p>{currentArticle.content.paragraph2}</p>
            <p>{currentArticle.content.paragraph3}</p>
            <p>{currentArticle.content.paragraph4}</p>
            <p>{currentArticle.content.paragraph5}</p>
          </>
        )}
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