import React from "react";
import "./FeaturesCircular.css";

const FeaturesCircular = () => {
  // Example data for 10 circular items
  const circularFeatures = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <div className="features-circular-container">
      {circularFeatures.map((feature) => (
        <div className="orb" key={feature.id}></div>
      ))}
    </div>
  );
};

export default FeaturesCircular;
