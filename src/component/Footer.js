import React from 'react';
import '../CSS/Footer.css';
import InstagramIcon from '../img/svg-assets/Instagram.svg';
import TikTokIcon from '../img/svg-assets/Tiktok.svg';
import YouTubeIcon from '../img/svg-assets/Youtube.svg';
import LinkedInIcon from '../img/svg-assets/Linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Address</h2>
          <p>Jl. Cilandak Permai Raya No.15A, Cilandak Baru, Kec. Cilandak,</p>
          <p>Kota Jakarta Selatan</p>
          <div className="contact-box">
            <span>+6281 2320 2367</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="connect-section">
            <h2>Connect with us</h2>
            <ul className="social-links">
              <li>
                <a href="#instagram">
                  <img src={InstagramIcon} alt="Instagram" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#tiktok">
                  <img src={TikTokIcon} alt="TikTok" />
                  TikTok
                </a>
              </li>
              <li>
                <a href="#youtube">
                  <img src={YouTubeIcon} alt="YouTube" />
                  YouTube
                </a>
              </li>
              <li>
                <a href="#linkedin">
                  <img src={LinkedInIcon} alt="LinkedIn" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-image">
            <div className="globe-image"></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">©2024 KACA Kreatif. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
