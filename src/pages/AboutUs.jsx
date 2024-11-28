import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"

import HeroCarousel from "../components/HeroCarousel";
import HeaderTwo from "../components/HeaderTwo";

import Footer from "../components/Footer";
import Abouthero from "../components/Abouthero";
import Timeline from "../components/Timeline";
const AboutUs = () => {
  return (
    <div className="AboutUs-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
   <Abouthero/>
   <Timeline/>
       <Footer/>
    </div>
  );
};

export default AboutUs;

