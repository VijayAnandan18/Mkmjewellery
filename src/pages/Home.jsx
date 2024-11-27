import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"

import HeroCarousel from "../components/HeroCarousel";
import HeaderTwo from "../components/HeaderTwo";
import GridLayout from "../components/GridLayout";
import Features from "../components/Features";
import FeaturesCircular from "../components/FeaturesCircular";
import NewArrivals from "../components/NewArrivals";
import GoldJewellery from "../components/GoldJewellery";
import Reels from "../components/Reels";
import Diamond from "../components/Diamond";
import Shop from "../components/Shop";
import GemStone from "../components/GemStone";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
    <HeroCarousel/>
     <GridLayout/>
       <div className="features-section">
        <Features />
      </div>
<Shop/>
    
        <FeaturesCircular/>
    <NewArrivals/>
   <GoldJewellery/>
       <Reels/>    
     <Diamond/>
      <GemStone/>
       <Footer/>
    </div>
  );
};

export default Home;

