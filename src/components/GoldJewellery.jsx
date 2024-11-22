import React from "react";
import "./GoldJewellery.css";

const GoldJewellery = () => {
  const cards = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      gradient: "radial-gradient(#1fe4f5, #3fbafe)",
    },
    {
      id: 2,
      title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      gradient: "radial-gradient(#fbc1cc, #fa99b2)",
    },
    {
      id: 3,
      title: "Ut enim ad minim veniam.",
      gradient: "radial-gradient(#76b2fe, #b69efe)",
    },
    {
      id: 4,
      title: "Quis nostrud exercitation ullamco laboris nisi.",
      gradient: "radial-gradient(#60efbc, #58d5c9)",
    },

  ];

  return (
    <div className="goldjewellery-container">
      <div className="heading">
        <h1 className="heading__title">Gradient Banner Cards</h1>
        <p className="heading__credits">
          <a
            className="heading__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/sl"
          >
            Design by Simon Lurwer on Dribbble
          </a>
        </p>
      </div>
      <div className="goldcards">
        {cards.map((card) => (
          <div className="goldcard" key={card.id} style={{ background: card.gradient }}>
            <div className="goldcard__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="goldcard__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="goldcard__title">{card.title}</h2>
            <p className="card__apply">
              <a className="goldcard__link" href="#">
                Apply Now <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldJewellery;
