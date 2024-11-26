import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewArrivals.css"; // Ensure you link the CSS file for updated styles

const NewArrivals = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    "assets/newarrivals1.webp",
    "assets/newarrivals2.webp",
    "assets/newarrivals3.webp",
    "assets/newarrivals4.webp",
    "assets/newarrivals5.webp",
    "assets/newarrivals6.webp",
    "assets/newarrivals7.webp",
    "assets/newarrivals8.webp",
    "assets/newarrivals9.webp",
    "assets/newarrivals10.webp",
  ];

  return (
    <div className="new-arrivals">
      <h1 className="new-arrivals-title">New Arrivals
      </h1>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img
              src={img}
              alt={`New Arrival ${index + 1}`}
              className="card-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
