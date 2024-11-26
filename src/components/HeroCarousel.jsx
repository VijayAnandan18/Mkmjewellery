import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const desktopImages = [
    "assets/hero1.png",
    "assets/hero2.png",
    "assets/hero3.png",
    "assets/hero4.png",
  ];

  const mobileImages = [
    "assets/mobilehero1.png",
    "assets/mobilehero2.png",
    "assets/mobilehero3.png",
    "assets/mobilehero4.png",
    "assets/mobilehero5.png",
    "assets/mobilehero6.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update `isMobile` state based on window width
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    updateView(); // Initial check
    window.addEventListener('resize', updateView);

    // Cleanup on unmount
    return () => window.removeEventListener('resize', updateView);
  }, []);

  useEffect(() => {
    // Change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [desktopImages.length]);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="hero-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
          src={image}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
