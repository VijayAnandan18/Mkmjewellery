import React from "react";
import "./Reels.css";

const Reels = () => {
  return (
    <div className="reels-container">
      <div className="reel-card reel-card-1">
        <img
          src="assets/mkmreel1.jpg"
          alt="New Arrival 1"
          className="reel-card__image"
        />
      </div>
      <div className="reel-card reel-card-2">
        <img
          src="assets/mkmreel2.jpg"
          alt="New Arrival 2"
          className="reel-card__image"
        />
      </div>
      <div className="reel-card reel-card-3">
        <img
          src="assets/mkmreel3.jpg"
          alt="New Arrival 3"
          className="reel-card__image"
        />
      </div>
      <div className="reel-card reel-card-4">
        <img
          src="assets/mkmreel4.jpg"
          alt="New Arrival 4"
          className="reel-card__image"
        />
      </div>
      <div className="reel-card reel-card-5">
        <video
          src="assets/mkmreel1.mp4"
          className="reel-card__video"
          controls
          loop
          muted
        />
      </div>
    </div>
  );
};

export default Reels;

