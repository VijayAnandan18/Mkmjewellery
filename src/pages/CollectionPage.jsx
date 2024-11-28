import React from "react";
import Marquee from "../components/Marquee";
import Header from "../components/Header"


import HeaderTwo from "../components/HeaderTwo";


import Footer from "../components/Footer";
import CollectionComponent from "../components/CollectionComponent";
const  CollectionPage = () => {
  return (
    <div className="home-container">
      <Marquee />
      <Header/>
      <HeaderTwo/>
<CollectionComponent/>

       <Footer/>
    </div>
  );
};

export default CollectionPage;
