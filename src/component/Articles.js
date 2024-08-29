import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Articles/Articles.css';

const Articles = () => {
  return (
    <div className="article-page">
      <div className="featured-articles">
        <div className="main-article">
          <Link to="/article/1">
            <img src={require('../img/projectdetail/project5.png')} alt="Main article" />
            <div className="article-info">
              <h2>Headline Title</h2>
              <p>August, 2024</p>
            </div>
          </Link>
        </div>
        <div className="secondary-articles">
          <div className="secondary-article large">
            <Link to="/article/2">
              <img src={require('../img/projectdetail/project2.png')} alt="Secondary article 1" />
              <div className="article-info">
                <h2>Headline Title 2</h2>
                <p>August, 2024</p>
              </div>
            </Link>
          </div>
          <div className="secondary-article">
            <Link to="/article/3">
              <img src={require('../img/projectdetail/project1.png')} alt="Secondary article 2" />
              <div className="article-info">
                <h2>Headline Title 3</h2>
                <p>August, 2024</p>
              </div>
            </Link>
          </div>
          <div className="secondary-article">
            <Link to="/article/4">
              <img src={require('../img/projectdetail/project3.png')} alt="Secondary article 3" />
              <div className="article-info">
                <h2>Headline Title 4</h2>
                <p>August, 2024</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="article-list">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Link key={item} to={`/article/${item}`} className="article-item">
            <div className="article-text">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>August, 2024 • 124 Shares</p>
            </div>
            <img src={require('../img/projectdetail/project1.png')} alt="Article thumbnail" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
