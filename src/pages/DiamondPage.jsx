import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";

import DiamondHero from "../components/DiamondHero";
import Footer from "../components/Footer";
import DiamondCollection from "../components/DiamondCollection";
const  DiamondPage = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
      <DiamondHero/>
<DiamondCollection/>

       <Footer/>
    </div>
  );
};

export default DiamondPage;
