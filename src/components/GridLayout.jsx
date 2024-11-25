import React from "react";
import "./GridLayout.css"; // External CSS file for the styles

const GridLayout = () => {
  return (
    <div className="container">
      <div
        className="main"
        style={{
          backgroundImage: `url("assets/about1.png")`, // Main image URL
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}
      ></div>
      <div className="sub" style={{
          backgroundImage: `url("assets/about2.jpeg")`, // Main image URL
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}></div>
      <div className="sub"  style={{
          backgroundImage: `url("assets/about3.jpeg")`, // Main image URL
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
        }}></div>
    </div>
  );
};

export default GridLayout;
