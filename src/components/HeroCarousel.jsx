import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [videoSrc, setVideoSrc] = useState("assets/hero.webm"); // Default video source for desktop

  useEffect(() => {
    // Function to update video source based on window size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc("assets/heroreels.webm"); // Change to mobile video on smaller screens
      } else {
        setVideoSrc("assets/hero.webm"); // Default desktop video
      }
    };

    // Call once initially to set the correct video on page load
    handleResize();

    // Add resize event listener to update the video on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to only run once on mount

  return (
    <div className="hero-carousel">
      <video
        className="hero-video"
        src={videoSrc} // Dynamically set the video source
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeroCarousel;
