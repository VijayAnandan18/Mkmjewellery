import React from "react";
import "./GoldJewellery.css";

const GoldJewellery = () => {
  const cards = [
    { id: 1, img: "/assets/gold1.png" },
    { id: 2, img: "/assets/gold2.png" },
    { id: 3, img: "/assets/gold3.png" },
    { id: 4, img: "/assets/gold4.png" },
  ];

  return (
    <div className="goldjewellery-container">
      <div className="goldcards">
        {cards.map((card) => (
          <div className="goldcard" key={card.id}>
            <img
              className="goldcard__image"
              src={card.img}
              alt={`Gold Jewellery ${card.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldJewellery;
