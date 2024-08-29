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
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
          
          <div className="contact-image">
            <img src={require('../img/kaca3Dring.png')} alt="Decorative image" className="decorative-image" />
          </div>
        </div>

        <div className="info-container">
          <div className="address">
            <h2>Address</h2>
            <p>Jl. Cilandak Permai Raya No.15A, Cilandak Baru, Kec. Cilandak,</p>
            <p>Kota Jakarta Selatan</p>
            <p>+6281 2320 2367</p>
          </div>
          <div className="address">
            <h2>Connect with us</h2>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Youtube</p>
            <p>Subscribe News Letter</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
