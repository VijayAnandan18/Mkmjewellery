import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const images = [
    "assets/hero1.png",
    "assets/hero2.png",
    "assets/hero3.png",
    "assets/hero4.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-carousel">
      {images.map((image, index) => (
        <img
          key={index}
          className={`hero-image ${index === currentImageIndex ? 'active' : ''}`} // Add 'active' class to the current image
          src={image}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
