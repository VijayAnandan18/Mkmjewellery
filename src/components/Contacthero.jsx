import React from 'react';
import './Contacthero.css';

const Contacthero = () => {
  return (
    <div className="contact-hero-video-container">
      <video
        className="contact-hero-video"
        src="assets/contact.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default Contacthero;
