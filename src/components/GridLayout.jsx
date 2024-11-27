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

      {/* Grid Layout Section */}
      <div className="container">
        <div
          className="main"
          style={{
            backgroundImage: `url("assets/about1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="sub"
          style={{
            backgroundImage: `url("assets/about2.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="sub"
          style={{
            backgroundImage: `url("assets/about3.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GridLayout;
