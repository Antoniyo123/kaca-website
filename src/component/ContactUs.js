import React, { useState } from 'react';
import '../CSS/ContactUs.css';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { email, message });
  };

  return (
    <div className='contactus-container-utama'>
      <div className='contactus-wrapper'>
        <div className="contact-us-container">
          <div className="contact-form">
            <h1>Drop your email here</h1>
            <p>Whether you have questions, feel free to drop your message here</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email here"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message here"
                  required
                />
                <div className="button-container">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="info-container">
          <div className="address">
            <h2>Address</h2>
            <p>Jl. Cilandak Permai Raya No.15A, Cilandak Baru, Kec. Cilandak,</p>
            <p>Kota Jakarta Selatan</p>
            <p className='number'>+6281 2320 2367</p>
          </div>
          <div className="address social-media">
            <h2>Connect with us</h2>
            <p className="social-item">
              <img src={require('../img/icon/instagram-black.png')} alt="Instagram" className="social-icon" />
              <span>Instagram</span>
            </p>
            <p className="social-item">
              <img src={require('../img/icon/tiktok-black.png')} alt="TikTok" className="social-icon" />
              <span>TikTok</span>
            </p>
            <p className="social-item">
              <img src={require('../img/icon/youtube.png')} alt="Youtube" className="social-icon" />
              <span>Youtube</span>
            </p>
            <p className="social-item">
              <img src={require('../img/icon/linkedin.png')} alt="Youtube" className="social-icon" />
              <span>LinkedIn</span>
            </p>
            <p className="social-item">
              {/* <img src="../img/social/newsletter.png" alt="Newsletter" className="social-icon" /> */}
              <span>Subscribe News Letter</span>
            </p>
          </div>
        </div>
        <div className="background-photo-contact"></div>
      </div>
    </div>
  );
};

export default ContactUs;