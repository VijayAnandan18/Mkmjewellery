import React from "react";
import "./GridLayout.css"; // External CSS file for the styles

const GridLayout = () => {
  return (
    <div className="container">
      <div
        className="main"
        style={{
          backgroundImage: `url("assets/about1.jpg")`, // Add the main image
        }}
      ></div>
      <div className="sub"></div>
      <div className="sub"></div>
    </div>
  );
};

export default GridLayout;
