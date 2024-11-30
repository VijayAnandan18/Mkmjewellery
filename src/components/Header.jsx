import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { HiMiniPhone } from "react-icons/hi2"; // Phone icon
import "./Header.css"; // Header styles

const Header = () => {
  const [country, setCountry] = useState("India");
  const [flag, setFlag] = useState("india-flag.png");
  const [goldRates, setGoldRates] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountry(data.country_name);
        setFlag(`https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`);
      } catch (error) {
        console.error("Error fetching location:", error);
        setCountry("India");
        setFlag("india-flag.png");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const accessKey = "goldapi-498iibysm3razbme-io"; // Replace with your API key
        const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
          headers: {
            "x-access-token": accessKey,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();

        // Set the gold rates to the state
        if (data) {
          setGoldRates(data);
          console.log("Gold rates:", data); // Log to verify
        } else {
          console.error("Invalid data received from Gold API.");
        }
      } catch (error) {
        console.error("Error fetching gold rates:", error);
      }
    };

    fetchGoldRates();
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/logo1.png" alt="Logo" className="logo" />
        <img src="assets/logo2.png" alt="Logo" className="logo" style={{ width: "140px" }} />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-box" />
      </div>

      <div className="location-container">
  <IoLocationOutline className="location-icon" />
  <a 
    href="https://maps.app.goo.gl/fDHQGWRaN74YVShb7" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'none' }}
  >
    <span className="store" style={{ color: "#700B00" }}>Store</span>
  </a>
</div>


      <div className="country-container">
        <img src={flag} alt={`${country} Flag`} className="country-flag" />
        <span className="country-name" style={{ color: "#700B00" }}>{country}</span>
      </div>

      <div className="goldtext-rate">
  <p className="shiny-text2" data-text="Gold Rate">Gold Rate</p>
  <div className="dropdown">

    <div className="dropdown-content">
      {goldRates ? (
        <table className="gold-rate-table">
          <thead>
            <tr>
              <th colSpan="2" style={{ background: "#700B00", color: "white", textAlign: "center" }}>Today's Gold Rate</th>
            </tr>
            <tr>
              <th style={{ background: "#700B00", color: "white" }}>Gold Type</th>
              <th style={{ background: "#700B00", color: "white" }}>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24k</td>
              <td>₹{goldRates.price_gram_24k.toFixed(2)}</td>
            </tr>
            <tr>
              <td>22k</td>
              <td>₹{goldRates.price_gram_22k.toFixed(2)}</td>
            </tr>
            <tr>
              <td>21k</td>
              <td>₹{goldRates.price_gram_21k.toFixed(2)}</td>
            </tr>
            <tr>
              <td>20k</td>
              <td>₹{goldRates.price_gram_20k.toFixed(2)}</td>
            </tr>
            <tr>
              <td>18k</td>
              <td>₹{goldRates.price_gram_18k.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
</div>



      <div className="phone-container">
        <HiMiniPhone className="phone-icon" />
        <a href="tel:+919778907890" className="phone-link">
          <span className="phone-number">+91 9778907890</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
