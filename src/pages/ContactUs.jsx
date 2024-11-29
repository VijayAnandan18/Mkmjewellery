import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"
import Reels from "../components/Reels";

import HeaderTwo from "../components/HeaderTwo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const ContactUs= () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
<Contact/>
<Reels/>
       <Footer/>
    </div>
  );
};

export default ContactUs;
