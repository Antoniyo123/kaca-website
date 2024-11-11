import React, { useState } from 'react';
import '../CSS/ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Data social media links
  const socialMediaLinks = {
    instagram: "https://instagram.com/youraccount",
    tiktok: "https://tiktok.com/@youraccount",
    youtube: "https://youtube.com/@youraccount",
    linkedin: "https://linkedin.com/company/youraccount",
    newsletter: "/newsletter" // Atau URL form newsletter Anda
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ljght9l',
      'template_kiiul6g',
      { email, message, to_email: 'collaboration@kacakreatif.com' },
      's0Lyp4fKU7IrI2KkF'
    ).then(
      (result) => {
        console.log('Email sent successfully', result.text);
        setShowModal(true);
      },
      (error) => {
        console.error('Failed to send email', error.text);
        setStatus('Failed to send email, please try again.');
      }
    );
  };

  // Handler untuk membuka link dalam tab baru
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className='contactus-container-utama'>
      <div className='contactus-wrapper'>
        <div className="contact-us-container">
          <div className="contact-form">
            <h1>Drop your email here</h1>
            <p>Whether you have questions, feel free to drop your message here</p>
            {status && <p>{status}</p>}
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
              <span>Subscribe Newsletter</span>
            </p>
          </div>
        </div>
        <div className="background-photo-contact"></div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Success!</h2>
            <p>Your email has been sent successfully.</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;