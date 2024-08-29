import React from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../CSS/Articles/ArticlesDetail.css'; // Make sure to create and style this CSS file

const ArticlesDetail = () => {
  const { id } = useParams();

  // Example article data based on the id
  const article = {
    1: {
      title: "11 Ide OOTD Denim ala Nazla Alifa Senia, Casual Timeless",
      date: "24 Agustus 2024",
      shares: 240,
      image: require('../img/projectdetail/project2.png'),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac velit id risus tempor ornare eget sed dui. Vestibulum vestibulum vitae elit sit amet imperdiet. Integer facilisis sagittis quam, non ultricies mi convallis sit amet. Suspendisse vel fringilla justo. In venenatis gravida sapien. Ut vivamus maximus lectus, id consectetur enim molestie sed. Nam fermentum lacus id ligula consectetur sagittis. Nunc scelerisque ipsum nulla, vitae congue magna volutpat vitae. Phasellus tincidunt est sit amet ante eleifend semper id quis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      tags: ["Nazla Alifa", "Fashion", "Denim", "Outfit Inspiration"]
    },
    2: {
      title: "Another Article Title",
      date: "August, 2024",
      shares: 100,
      image: require('../img/projectdetail/project5.png'),
      content: "Detailed content for another article...",
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
        <div className="flex space-x-2">
          <Share2 size={20} />
          <Instagram size={20} />
          <Twitter size={20} />
          <MessageCircle size={20} />
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
