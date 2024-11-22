import React from 'react';
import './Reels.css';

const Reels = () => {
  return (
<div className="reels-container">
  <div className="reel-card reel-card-1" style={{ height: "150px" }}>1</div>
  <div className="reel-card reel-card-2" style={{ height: "150px" }}>2</div>
  <div className="reel-card reel-card-3" style={{ height: "150px" }}>3</div>
  <div className="reel-card reel-card-4" style={{ height: "150px" }}>4</div>
  <div className="reel-card reel-card-5">5</div>
</div>
  );
};

export default Reels;
