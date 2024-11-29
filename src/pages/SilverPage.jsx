import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";

import SilverHero from "../components/SilverHero";
import Footer from "../components/Footer";
import SilverCollection from "../components/SilverCollection";
const SilverPage = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
      <SilverHero/>
<SilverCollection/>

       <Footer/>
    </div>
  );
};

export default SilverPage;
