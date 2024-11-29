import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";

import GoldHero from "../components/GoldHero";
import Footer from "../components/Footer";
import Gold from "../components/Gold";
const  CollectionPage = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
      <GoldHero/>
<Gold/>

       <Footer/>
    </div>
  );
};

export default CollectionPage;
