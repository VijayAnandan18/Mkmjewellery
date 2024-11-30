import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"
import Reels from "../components/Reels";
import Contacthero from "../components/Contacthero";
import HeaderTwo from "../components/HeaderTwo";

import Footer from "../components/Footer";
import MainContact from "../components/MainContact";
const ContactUs= () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
      <Contacthero/>
<MainContact/>
<Reels/>
       <Footer/>
    </div>
  );
};

export default ContactUs;
