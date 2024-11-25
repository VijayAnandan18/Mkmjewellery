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

    
       <FeaturesCircular/>
    <NewArrivals/>
    <GoldJewellery/>
       {/*<Reels/>*/}
    
    </div>
  );
};

export default Home;

