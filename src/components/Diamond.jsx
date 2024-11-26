import React from "react";
import "./Diamond.css";

const Diamond = () => {
  return (
    <div className="diamond-main-container">
      <div className="diamond-grid-container">
        <div className="diamond-card diamond-card--2x">
          <div className="diamond-card__content diamond-big-script diamond-padding-large">
            <p>Travel and see the world</p>
          </div>
        </div>
        <div className="diamond-card">
          <div className="diamond-card__image">
            <img
              src="https://images.pexels.com/photos/443416/pexels-photo-443416.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Travel"
            />
          </div>
        </div>
        <div className="diamond-card">
          <div className="diamond-card__image">
            <img
              src="https://images.pexels.com/photos/542411/pexels-photo-542411.png?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Nature"
            />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Diamond;
