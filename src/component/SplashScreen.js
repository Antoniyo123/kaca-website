// src/component/SplashScreen/SplashScreen.jsx
import React, { useState, useEffect } from 'react';
import '../CSS/SplashScreen.css';

const SplashScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
<div className="splash-screen">
  <div className="splash-container">
    {/* Gambar header di atas logo */}
    <img 
      src={require('../img/splashscreen.png')} 
      alt="Gambar Header" 
      className="header-image" 
    />
    <div className="logo-with-lines">
      {/* Gambar garis di sebelah kiri logo */}
      <img 
        src={require('../img/line1.png')} 
        alt="Garis Kiri" 
        className="line-image left-line" 
      />
      {/* Logo */}
      <img 
        src={require('../img/kaca-white.png')} 
        alt="Logo KACA Kreatif" 
        className="logo-image" 
      />
      {/* Gambar garis di sebelah kanan logo */}
      <img 
        src={require('../img/line1.png')} 
        alt="Garis Kanan" 
        className="line-image right-line" 
      />
    </div>
    <div className="loading-bar">
      <div 
        className="loading-progress" 
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="copyright">©2024 KACA Kreatif. All rights reserved</div>
  </div>
</div>



  );
};

export default SplashScreen;