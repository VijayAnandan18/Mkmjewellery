import React from "react";
import "./Marquee.css"; // Assuming you save the CSS in this file

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-container-custom">
        <div className="marquee-text-custom"> MKM jewellery welcomes you!</div>
        <div className="marquee-text-custom">Browse our exquisite collection today</div>
      </div>
    </div>
  );
};

export default Marquee;
