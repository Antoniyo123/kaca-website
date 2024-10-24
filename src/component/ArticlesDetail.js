import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../CSS/Articles/ArticlesDetail.css'; // Make sure to create and style this CSS file

const ArticlesDetail = () => {
  const { id } = useParams();

  // Example article data based on the id
  const article = {
    1: {
      title: "About KACA Kreatif",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/projectdetail/project2.png'),
      content: "In a world bursting with creativity, one platform just isn’t enough for us! We’re excited to share our journey and what we can do, both now and in the future, right here on LinkedIn. Our goal is to connect even more creativity in social media marketing and advertising. But first, let’s introduce ourselves—we're thrilled to finally be here! Tagar#KACAKreatif",
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    2: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Social media is totally the go-to spot for promoting businesses these days, and that’s why influencer marketing is such a big deal! While some people might think running a social media campaign is a piece of cake, we know it actually takes a lot of work. That’s where KACA Network comes in to make things easier for you! ",
      tags: ["Tag1", "Tag2"]
    },
    3: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Life can get incredibly busy, and sometimes it feels like there aren’t enough hours in the day to prioritize self-care. But when we make time for ourselves, even amidst our hectic schedules, we can truly thrive! Engaging in sport activities helps us stay fit while also providing a mental refresh. Remember to incorporate simple stretches throughout your day. Whether it’s a quick set of lunges between meetings or some deep stretches after a game, these little practices can have a profound impact on our flexibility and overall health. Take a peek at our weekly badminton day! It was one day of the week to step away from our desks, get moving, and bond with our team over some friendly competition. It’s not just about the game; it’s about the laughter, the camaraderie, and the joy that comes from moving our bodies. And let’s be honest: nothing beats the thrill of a good rally followed by a fit of laughter over a missed shot! It’s incredible how a little friendly competition can bring everyone together and boost morale. So, let’s commit to prioritizing our well-being, even on our busiest days! Discover joy in movement, connect with friends, and stretch not just your muscles, but your limits. Your body will thank you for it!   "
      ,
      tags: ["Tag1", "Tag2"]
    },
    4: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Throwback to an unforgettable cultural fashion event! We just had to share this moment because we are still buzzing from the amazing time spent at the Indonesia Kaya event. Rachel was so honored to wear this beautiful yellow kebaya from her own collection designed by the incredibly talented @didietmaulana. It’s one of those pieces that just makes her feel like a queen! The Svarna by Ikat Indonesia Trunk Show paired with the gorgeous accessories from Epa Jewel, we are blown away by how effortlessly traditional attire can blend into our modern lives. It’s like, why shouldn’t we wear such stunning pieces every day? it was a perfect match that highlighted the kebaya's versatility. Whether you’re dressing up for a special occasion or just want to add a pop of color to your everyday look, kebaya can totally do it all! Plus, with July 24th officially recognized as National Kebaya Day, it’s so inspiring to see organizations like Indonesia Kaya working hard to keep our cultural heritage alive and vibrant. It's a reminder that we can embrace our traditions while navigating the modern world. Here’s to celebrating our culture in style! Discover more about Indonesia Kaya on www.indonesiakaya.com",
      tags: ["Tag1", "Tag2"]
    },
    5: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Life can get incredibly busy, and sometimes it feels like there aren’t enough hours in the day to prioritize self-care. But when we make time for ourselves, even amidst our hectic schedules, we can truly thrive! Engaging in sport activities helps us stay fit while also providing a mental refresh. Remember to incorporate simple stretches throughout your day. Whether it’s a quick set of lunges between meetings or some deep stretches after a game, these little practices can have a profound impact on our flexibility and overall health. Take a peek at our weekly badminton day! It was one day of the week to step away from our desks, get moving, and bond with our team over some friendly competition. It’s not just about the game; it’s about the laughter, the camaraderie, and the joy that comes from moving our bodies. And let’s be honest: nothing beats the thrill of a good rally followed by a fit of laughter over a missed shot! It’s incredible how a little friendly competition can bring everyone together and boost morale. So, let’s commit to prioritizing our well-being, even on our busiest days! Discover joy in movement, connect with friends, and stretch not just your muscles, but your limits. Your body will thank you for it!   "
      ,
      tags: ["Tag1", "Tag2"]
    },
    6: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Life can get incredibly busy, and sometimes it feels like there aren’t enough hours in the day to prioritize self-care. But when we make time for ourselves, even amidst our hectic schedules, we can truly thrive! Engaging in sport activities helps us stay fit while also providing a mental refresh. Remember to incorporate simple stretches throughout your day. Whether it’s a quick set of lunges between meetings or some deep stretches after a game, these little practices can have a profound impact on our flexibility and overall health. Take a peek at our weekly badminton day! It was one day of the week to step away from our desks, get moving, and bond with our team over some friendly competition. It’s not just about the game; it’s about the laughter, the camaraderie, and the joy that comes from moving our bodies. And let’s be honest: nothing beats the thrill of a good rally followed by a fit of laughter over a missed shot! It’s incredible how a little friendly competition can bring everyone together and boost morale. So, let’s commit to prioritizing our well-being, even on our busiest days! Discover joy in movement, connect with friends, and stretch not just your muscles, but your limits. Your body will thank you for it!   "
      ,
      tags: ["Tag1", "Tag2"]
    },
    // Add more articles as needed
  };

  const relatedArticles = [
    { title: "Related Article 1", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 2", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 3", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
    { title: "Related Article 4", date: "August, 2024", shares: 124, image: require('../img/projectdetail/project1.png') },
  ];

  const currentArticle = article[id] || {};

  // Get current page URL
  const currentUrl = window.location.href;

  // Share handlers
  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentArticle.title,
          text: currentArticle.content.substring(0, 100) + '...',
          url: currentUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const handleTwitterShare = () => {
    const tweetText = encodeURIComponent(`${currentArticle.title}\n\n`);
    const tweetUrl = encodeURIComponent(currentUrl);
    window.open(
      `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`,
      '_blank'
    );
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have a direct web sharing API
    // We'll copy the URL and show instructions
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied! Open Instagram and paste the link in your story or post.');
  };

  const handleMessageShare = () => {
    // For mobile devices, try to open native messaging
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `sms:?body=${encodeURIComponent(currentArticle.title + ' ' + currentUrl)}`;
    } else {
      // Fallback to email for desktop
      window.location.href = `mailto:?subject=${encodeURIComponent(currentArticle.title)}&body=${encodeURIComponent(currentUrl)}`;
    }
  };

  return (
<div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-sm breadcrumbs mb-4">
        Articles » {currentArticle.title}
      </div>
      
      <h1 className="text-4xl font-bold mb-4">
        {currentArticle.title}
      </h1>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">{currentArticle.date} • {currentArticle.shares} shares</span>
        <div className="flex space-x-4">
          <button 
            onClick={handleGeneralShare}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Share"
          >
            <Share2 size={20} className="transition-colors duration-300" />
          </button>
          <button 
            onClick={handleInstagramShare}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-pink-100 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label="Share on Instagram"
          >
            <Instagram size={20} className="transition-colors duration-300" />
          </button>
          <button 
            onClick={handleTwitterShare}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-sky-100 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label="Share on Twitter"
          >
            <Twitter size={20} className="transition-colors duration-300" />
          </button>
          <button 
            onClick={handleMessageShare}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-green-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Share via Message"
          >
            <MessageCircle size={20} className="transition-colors duration-300" />
          </button>
        </div>
      </div>
      
      <img 
        src={currentArticle.image} 
        alt={currentArticle.title} 
        className="w-full mb-4"
      />
      
      <div className="prose max-w-none mb-8">
        <p>{currentArticle.content}</p>
      </div>
      
      <div className="mb-8">
        {currentArticle.tags && currentArticle.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">More Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedArticles.map((relatedArticle, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <img 
                src={relatedArticle.image} 
                alt={relatedArticle.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{relatedArticle.title}</h3>
                <p className="text-sm text-gray-600">{relatedArticle.date} • {relatedArticle.shares} Shares</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetail;
