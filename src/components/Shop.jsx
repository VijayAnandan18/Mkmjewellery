import React, { useState } from "react";
import "./Shop.css";

const Shop = () => {
  // State to handle selected category
  const [selectedCategory, setSelectedCategory] = useState("womens");

  // Example images for each category (ID: image URL)
  const jewelryImages = {
    womens: [
      { id: 1, url: "assets/women1.jpg" },
      { id: 2, url: "assets/women2.jpg" },
      { id: 3, url: "assets/women3.jpg" },
      { id: 4, url: "assets/women4.jpg" },
      { id: 5, url: "assets/women1.jpg" },
      { id: 6, url: "assets/women4.jpg" },
    ],
    mens: [
      { id: 1, url: "assets/men1.jpg" },
      { id: 2, url: "assets/men2.jpg" },
      { id: 3, url: "assets/men3.jpg" },
      { id: 4, url: "assets/men4.jpg" },
      { id: 5, url: "assets/men1.jpg" },
      { id: 6, url: "assets/men2.jpg" },
    ],
    kids: [
      { id: 1, url: "assets/kid1.jpg" },
      { id: 2, url: "assets/kid2.jpg" },
      { id: 3, url: "assets/kid3.jpg" },
      { id: 4, url: "assets/kid4.jpg" },
      { id: 5, url: "assets/kid1.jpg" },
      { id: 6, url: "assets/kid2.jpg" },
    ],
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-container">
      {/* Heading Section */}
      <div className="shop-heading one">
        <h1>Our Collections</h1>
        <p>Find Jewelry for Women, Men, and Kids</p>
      </div>

      {/* Navigation */}
      <nav className="shop-nav">
        <button onClick={() => handleCategorySelect("womens")}>Women's Jewellery</button>
        <button onClick={() => handleCategorySelect("mens")}>Men's Jewellery</button>
        <button onClick={() => handleCategorySelect("kids")}>Kids' Jewellery</button>
      </nav>

      {/* Grid of Images */}
      <div className="shop-grid">
        {jewelryImages[selectedCategory].map((image) => (
          <div key={image.id} className="shop-card">
            <img src={image.url} alt={`Jewelry ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
