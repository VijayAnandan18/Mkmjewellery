import React from "react";
import "./FeaturesCircular.css";

const FeaturesCircular = () => {
  // Example data for 10 circular items, including names and a GIF for the 6th item
  const circularFeatures = [
    { id: 1, name: "Gold Coin", imageUrl: "/assets/round1.jpg" },
    { id: 2, name: "Gold Chain", imageUrl: "/assets/round2.jpg" },
    { id: 3, name: "Gold Ring", imageUrl: "/assets/round3.jpg" },
    { id: 4, name: "Gold Bracelet", imageUrl: "/assets/round4.jpg" },
    { id: 5, name: "Gold Necklace", imageUrl: "/assets/round5.jpg" },
    { id: 6, name: "Gold Earring", imageUrl: "/assets/round6.gif" }, // Use GIF for 6th item
    { id: 7, name: "Gold Pendant", imageUrl: "/assets/round7.jpg" },
    { id: 8, name: "Gold Bangle", imageUrl: "/assets/round8.jpg" },
    { id: 9, name: "Gold Watch", imageUrl: "/assets/round9.jpg" },
    { id: 10, name: "Gold Anklet", imageUrl: "/assets/round10.jpg" },
  ];

  return (
    <div className="features-circular-container">
      {circularFeatures.map((feature) => (
        <div className="orb-wrapper" key={feature.id}>
          <div className="orb">
            <img
              src={feature.imageUrl}
              alt={feature.name}
              className="orb-image"
            />
          </div>
          <p className="orb-label">{feature.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCircular;
