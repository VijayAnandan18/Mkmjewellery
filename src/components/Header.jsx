import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { HiMiniPhone } from "react-icons/hi2"; // Phone icon
import "./Header.css"; // Header styles

const Header = () => {
  const [country, setCountry] = useState("India");
  const [flag, setFlag] = useState("india-flag.png");
  const [goldRate, setGoldRate] = useState(null);

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
    const fetchGoldRate = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://trademade.com/api/gold-rate?apiKey=7ru57IRbn57oAhJmCEoB"
        );
        const data = await response.json();
        setGoldRate(data.rate);
      } catch (error) {
        console.error("Error fetching gold rate:", error);
      }
    };

    fetchGoldRate();
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="assets/logo1.png" alt="Logo" className="logo" />
        <img src="assets/logo2.png" alt="Logo" className="logo" style={{ width: "140px" }}/>
      </div>

      <div className="search-container">

  <input type="text" placeholder="Search" className="search-box" />
</div>


      <div className="location-container">
        <IoLocationOutline className="location-icon" />
        <span className="store" style={{ color: "#700B00" }}>Store</span>
      </div>

      <div className="country-container">
        <img src={flag} alt={`${country} Flag`} className="country-flag" />
        <span className="country-name" style={{ color: "#700B00" }}>{country}</span>
      </div>

      <div className="goldtext-rate">
        <p className="shiny-text2" data-text="Gold Rate" >Gold Rate</p>
        <div className="dropdown">
          <button className="dropdown-button">▼</button>
          <div className="dropdown-content">
            <p>Gold Rate: ₹{goldRate}</p>
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
