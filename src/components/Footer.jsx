import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing icons for social media

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-sections">
      <div className="footer-section">
          <h3>Get to know us</h3>
          <ul className="footer-links">
            <li><a href="/about">About us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Let us help you</h3>
          <ul className="footer-links">
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/enquiry">Enquiry Form</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Schemes</h3>
          <ul className="footer-links">
            <li><a href="/digi-gold">Digi Gold</a></li>
            <li><a href="/super-gold">Super Gold</a></li>
            <li><a href="/smart-gold">Smart Gold</a></li>
            <li><a href="/fixed-deposit">Fixed Deposit</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Collections</h3>
          <ul className="footer-links">
            <li><a href="/gold-jewellery">Gold Jewellery</a></li>
            <li><a href="/diamond-jewellery">Diamond Jewellery</a></li>
            <li><a href="/gold-coins">Gold Coins</a></li>
            <li><a href="/silver-collection">Silver Collection</a></li>
            
          </ul>
        </div>
        <div className="footer-about">
          <h3 >Shop from Mkm Jewellery online. Anytime. Anywhere.</h3>
          <p>
            The best Gold & Diamond Jewellery with just a click. The Mkm Jewellery online store brings you the latest Jewellery designs & gives the safest online Jewellery shopping platform. Trendy Jewellery, Antique Gold, Rose Gold, Diamond Jewellery, Platinum Jewellery… You get it all in just a click.
          </p>
         <div className="footer-qr">
           {/*  <img src="assets/mkmqr.png" alt="QR Code" width="250" height="253" />*/}
            <a
              href="https://play.google.com/store/apps/details?id=com.ri.zinger.mkmthangamaligai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="app-store-buttons">
                <img src="assets/googleplay.webp" alt="Google Play" className="store-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <ul className="social-links">
          <li><a href="https://facebook.com" aria-label="Facebook"><FaFacebook size={30} /></a></li>
          <li><a href="https://twitter.com" aria-label="Twitter"><FaTwitter size={30} /></a></li>
          <li><a href="https://instagram.com" aria-label="Instagram"><FaInstagram size={30} /></a></li>
          <li><a href="https://youtube.com" aria-label="YouTube"><FaYoutube size={30} /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p >
        © {currentYear} Mkm Jewellers. All rights reserved. The product/service names listed in this document are marks and/or registered marks of their respective owners and used under license. Unauthorized use strictly prohibited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
