import React from 'react';
import '../CSS/Footer.css';
import InstagramIcon from '../img/svg-assets/Instagram.svg';
import TikTokIcon from '../img/svg-assets/Tiktok.svg';
import YouTubeIcon from '../img/svg-assets/Youtube.svg';
import LinkedInIcon from '../img/svg-assets/Linkedin.svg';

const Footer = () => {
  const socialMediaLinks = {
    instagram: "https://www.instagram.com/kacakreatif/?hl=en",
    tiktok: "https://www.tiktok.com/@kacakreatif?lang=en",
    youtube: "https://www.youtube.com/@kacakreatif22",
    linkedin: "https://www.linkedin.com/company/kaca-kreatif/",
  };

  // Handle social click event
  const handleSocialClick = (url) => {
    try {
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error opening link:', error);
    }
  };


  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="background-photo-footer-top"></div>

          <h2>Address</h2>
          <p>Jl. Cilandak Permai Raya No.15A, Cilandak Baru, Kec. Cilandak,</p>
          <p>Kota Jakarta Selatan</p>
          <div className="contact-box">
            <a href="tel:+628123202367" className="number-link">
              <span>+6281 2320 2367</span>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="connect-section">
            <h2>Connect with us</h2>
  <div className="address social-media">
    {/* s */}
    <p 
      className="social-item" 
      onClick={() => handleSocialClick(socialMediaLinks.instagram)}
      style={{ cursor: 'pointer' }}
    >
      <img src={require('../img/icon/instagram-black.png')} alt="Instagram" className="social-icon" />
      <span>Instagram</span>
    </p>
    <p 
      className="social-item"
      onClick={() => handleSocialClick(socialMediaLinks.tiktok)}
      style={{ cursor: 'pointer' }}
    >
      <img src={require('../img/icon/tiktok-black.png')} alt="TikTok" className="social-icon" />
      <span>TikTok</span>
    </p>
    <p 
      className="social-item"
      onClick={() => handleSocialClick(socialMediaLinks.youtube)}
      style={{ cursor: 'pointer' }}
    >
      <img src={require('../img/icon/youtube.png')} alt="Youtube" className="social-icon" />
      <span>Youtube</span>
    </p>
    <p 
      className="social-item"
      onClick={() => handleSocialClick(socialMediaLinks.linkedin)}
      style={{ cursor: 'pointer' }}
    >
      <img src={require('../img/icon/linkedin.png')} alt="LinkedIn" className="social-icon" />
      <span>LinkedIn</span>
    </p>
    <p 
      className="social-item"
      onClick={() => handleSocialClick(socialMediaLinks.newsletter)}
      style={{ cursor: 'pointer' }}
    >
      {/* <span>Subscribe Newsletter</span> */}
    </p>
  </div>
          </div>

          <div className="footer-image">
            <div className="globe-image"></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">©2024 KACA Kreatif. All rights reserved</p>
      </div>
      <div className="background-photo-footer"></div>
    </footer>
  );
};

export default Footer;
