import React, { useState } from 'react';
import './HeaderTwo.css'; // External CSS for additional styles

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerStyle = {
    width: '100%',
    backgroundImage: 'url(/assets/headerbg2.avif)', // Correct path for the public folder
    backgroundSize: 'cover', // Ensures the image covers the entire header
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    padding: '20px 0', // Adds padding for vertical space
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-two" style={headerStyle}>
      <nav className="nav">
        <button className="hamburger" onClick={handleToggleMenu}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a href="#">Gold</a>
            <ul className="dropdown">
              <li><a href="#">Rings</a></li>
              <li><a href="#">Earring</a></li>
              <li><a href="#">Pendants</a></li>
              <li><a href="#">chains</a></li>   
               <li><a href="#">Necklaces</a></li>
                 <li><a href="#">Nosepins</a></li>
          
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Diamond</a>
            <ul className="dropdown">
              <li><a href="#">Rings</a></li>
              <li><a href="#">Earring</a></li>
              <li><a href="#">Pendants</a></li>
              <li><a href="#">chains</a></li>   
               <li><a href="#">Necklaces</a></li>
                 <li><a href="#">Nosepins</a></li>
          
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Silver</a>
            <ul className="dropdown">
              <li><a href="#">Silver Coins</a></li>
              <li><a href="#">Idols</a></li>
              <li><a href="#">Articles</a></li>
              <li><a href="#">Bangles & Bracelets</a></li>
              <li><a href="#">Chains</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Gold Coins</a>
          </li>
          <li className="nav-item">
            <a href="#">Gemstones</a>
            <ul className="dropdown">
              <li><a href="#">Ruby</a></li>
              <li><a href="#">Sapphire</a></li>
              <li><a href="#">Emerald</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">Digigold</a>
          </li>
          <li className="nav-item">
            <a href="#">Schemes</a>
            <ul className="dropdown">
              <li><a href="#">Savings Plans</a></li>
              <li><a href="#">Investment Plans</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTwo;
