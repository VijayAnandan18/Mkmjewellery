import React from "react";
import "./Features.css";

const Features = () => {
  const featuresData = [
    { id: 1, title: "Fair Labour Practices", description: "This exclusive feature gives complete trust in jewellery." },
    { id: 2, title: "Eco-Friendly Materials", description: "Using sustainable materials to preserve the environment." },
    { id: 3, title: "Certified Quality", description: "Guaranteed quality for every piece of jewellery." },
    { id: 4, title: "Innovative Designs", description: "Unique designs that stand out in every occasion." },
    { id: 5, title: "Customer Support", description: "24/7 support to assist with your jewellery needs." },
  ];

  return (
    <div className="features-container">
      {featuresData.map((feature) => (
        <div className="card" key={feature.id}>
          <h1>{feature.title}</h1>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
