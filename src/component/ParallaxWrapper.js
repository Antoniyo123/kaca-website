import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

const ParallaxWrapper = ({ children }) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  );
};

export default ParallaxWrapper;