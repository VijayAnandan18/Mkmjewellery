import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const cards = [
    {
      img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTNQx6dAy_XJh-wLZwOd5qGL63kg_JOHHqe8QJOsg5-C9HYswaFOAvHAkOx-KLHxsSU",
      title: "Sigiriya",
      subtitle: "Fortress built by King Kashyapa",
      description:
        "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
      link: "https://en.wikipedia.org/wiki/Sigiriya",
    },
    {
      img: "https://classiclanka.com/wp-content/uploads/2022/06/Galle.webp",
      title: "Galle",
      subtitle: "Known for its historic fort",
      description:
        "Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.",
      link: "https://en.wikipedia.org/wiki/Galle",
    },
    {
      img: "https://haleyblackall.com/wp-content/uploads/2020/12/things-to-do-in-Kandy-20.jpg",
      title: "Kandy",
      subtitle: "The Last Kingdom",
      description:
        "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, home to tea plantations and biodiverse rainforest.",
      link: "https://en.wikipedia.org/wiki/Kandy",
    },
    {
      img: "https://www.lovidhu.com/uploads/posts-seo/2021/05/polonnaruwa-vatadage-sri-lanka.jpg",
      title: "Polonnaruwa",
      subtitle: "The second major Sinhalese kingdom",
      description:
        "Poḷonnaruwa is the main town of Polonnaruwa District in North Central Province, Sri Lanka. It was the royal ancient city of the Kingdom of Polonnaruwa.",
      link: "https://en.wikipedia.org/wiki/Polonnaruwa",
    },
    {
      img: "https://www.jetwinghotels.com/jetwingviluyana/wp-content/uploads/sites/2/2017/09/dambulla-temple-1.jpg",
      title: "Dambulla",
      subtitle: "The best-preserved cave temple",
      description:
        "Dambulla is a town situated in the north of Matale District, Central Province of Sri Lanka, known for its cave temples and historic importance.",
      link: "https://en.wikipedia.org/wiki/Dambulla",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/16/db/91/41/the-city-now-a-world.jpg",
      title: "Anuradhapuraya",
      subtitle: "The first ever Sinhala kingdom",
      description:
        "Anuradhapura is a major city in the North Central Province of Sri Lanka, known for its historic significance and cultural heritage.",
      link: "https://en.wikipedia.org/wiki/Anuradhapura",
    },
  ];

  return (
    <div className="new-arrivals">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        World Heritage Sites in Sri Lanka
      </h1>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </div>
            <div className="content" style={{ padding: "15px" }}>
              <h3 style={{ marginBottom: "10px" }}>{card.title}</h3>
              <h4 style={{ color: "gray", marginBottom: "10px" }}>
                {card.subtitle}
              </h4>
              <p style={{ marginBottom: "10px" }}>{card.description}</p>
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "10px 20px",
                    background: "navy",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;