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
            <h4 className="features-card-title">Guaranteed Purity</h4>
            <p className="features-card-description">
            HUID CERTIFIED GOLD JEWELLERY
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/easy.png"
              alt="Diamonds"
              className="features-card-image"
            />
            <h4 className="features-card-title">Authenticity Assured</h4>
            <p className="features-card-description">
            CERTIFIED DIAMOND JEWELLERY 
            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/easy.png"
              alt="Exchange"
              className="features-card-image"
            />
            <h4 className="features-card-title">Smart Savings Made Easy</h4>
            <p className="features-card-description">
            DIGITAL GOLD APP FOR SAVINGS SCHEME 

            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/fairprice.png"
              alt="Price Promise"
              className="features-card-image"
            />
            <h4 className="features-card-title">Exquisite Experience</h4>
            <p className="features-card-description">
            SOPHISTICATED SHOWROOM FOR CUSTOMER SERVICE 

            </p>
          </div>
          <div className="features-card">
            <img
              src="assets/zero.png"
              alt="Labour Practices"
              className="features-card-image"
            />
            <h4 className="features-card-title">
            Convenient Exchanges
            </h4>
            <p className="features-card-description">
            New for Old Easy Exchange Policy
            </p>
          </div>
        
          <div className="features-card">
            <img
              src="assets/zero.png"
              alt="Labour Practices"
              className="features-card-image"
            />
            <h4 className="features-card-title">
            Exceptional Service
            </h4>
            <p className="features-card-description">
            Well-Trained Staffs for Best Customer Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
