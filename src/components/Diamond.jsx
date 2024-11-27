import React from "react";
import "./Diamond.css";

const Diamond = () => {
  return (
    <div className="diamond-main-container">
      <div className="one">
        <h1>Diamond Jewellery</h1>
        <p>Sparkle through the festive nights with timeless diamonds</p>
      </div>
      <div className="diamond-grid-container">
        <div className="diamond-card diamond-card--2x">
          <div className="diamond-card__content diamond-big-script diamond-padding-large">
            <img
              src="assets/diamond.png" // Path to the main image
              alt="Big Diamond"
              className="diamond-card__image"
            />
          </div>
        </div>
        <div className="diamond-card">
          <div className="diamond-card__image">
            <img
              src="assets/diamond1.png" // Path to the first smaller image
              alt="Diamond 1"
            />
          </div>
        </div>
        <div className="diamond-card">
          <div className="diamond-card__image">
            <img
              src="assets/diamond2.png" // Path to the second smaller image
              alt="Diamond 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
