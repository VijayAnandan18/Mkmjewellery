import React from "react";
import "./GridLayout.css"; // External CSS file for the styles

const GridLayout = () => {
  return (
    <div className="Gridlayout">
      {/* Heading Section */}
      <div className="one">
        <h1>About Our Store</h1>
      </div>
      <p className="about-description">
        Get in touch with us for a complete jewellery shopping experience!
      </p>

      {/* Full-Width Image Section */}
      <div className="about-image">
        <img src="assets/about.jpeg" alt="About Us" />
      </div>
    </div>
  );
};

export default GridLayout;
