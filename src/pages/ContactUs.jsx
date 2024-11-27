import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";

import Footer from "../components/Footer";
const ContactUs= () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>

       <Footer/>
    </div>
  );
};

export default ContactUs;
