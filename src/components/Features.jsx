import React from "react";
import "./Features.css"; // Ensure to import the updated CSS file

const Features = () => {
  return (
    <div className="features-section">
      {/* Heading Section */}
      <div className="one">
        <h1>Pure Elegance</h1>
      </div>
      <p className="features-description">
        We assure you that you will get what you can trust. Always!
      </p>

      {/* Features Cards */}
      <div className="features-container">
        <div className="features-row">
          <div className="features-card">
            <img
              src="assets/bis.jpg"
              alt="HUID"
              className="features-card-image"
            />
            <h4 className="features-card-title">BIS HUID</h4>
            <p className="features-card-description">
              100% HUID Compliant Gold
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/diamond.png"
              alt="Diamonds"
              className="features-card-image"
            />
            <h4 className="features-card-title">Diamonds</h4>
            <p className="features-card-description">
              HUID certified diamonds
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/easy.png"
              alt="Exchange"
              className="features-card-image"
            />
            <h4 className="features-card-title">Easy Exchange</h4>
            <p className="features-card-description">
              This exclusive feature gives complete flexibility to our
              customers.
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/fairprice.png"
              alt="Price Promise"
              className="features-card-image"
            />
            <h4 className="features-card-title">Fair Price Promise</h4>
            <p className="features-card-description">
              This exclusive feature gives complete flexibility to our
              customers.
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/zero.png"
              alt="Labour Practices"
              className="features-card-image"
            />
            <h4 className="features-card-title">
              Zero Deduction Gold Exchange
            </h4>
            <p className="features-card-description">
              When you exchange "22KT" gold with us, we give 100% value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
