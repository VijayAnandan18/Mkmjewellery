import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  // State for storing the current location
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Simulate fetching current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`);
      });
    } else {
      setLocation('Location not available');
    }
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-grid">
        {/* Left side with the image */}
        <div className="contact-image">
          <img
            src="/assets/contact-image.jpg" // Replace with the correct path to your image
            alt="Contact"
            className="contact-image-img"
          />
        </div>

        {/* Right side with the contact form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="category">Jewellery Category</label>
              <select id="category" name="category">
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" value={location} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <select id="enquiryType" name="enquiryType">
                <option value="showroom">Showroom Related</option>
                <option value="online-store">Online Store Related</option>
                <option value="scheme">Scheme Related</option>
                <option value="digigold">Digigold</option>
                <option value="comments">Comments</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="reset" className="cancel-button">Cancel</button>
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
