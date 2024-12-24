import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images 
import Img1 from "../../assets/card1.jpg";
import Img2 from "../../assets/card2.jpg";
import Img3 from "../../assets/card3.jpg";
import Img4 from "../../assets/card4.jpg";
import Img5 from "../../assets/card5.jpg";

const cardData = [
  {
    id: 1,
    img: Img1,
    h2: "Personalized Learning Plans Just for You",
    p: "We assess your strengths and weaknesses to create a customized study plan that focuses on your learning goals.",
  },
  {
    id: 2,
    img: Img2,
    h2: "Step-by-Step Explanation ",
    p: "Our lessons break down complex concepts into simple, easy-to-understand steps.",
  },
  {
    id: 3,
    img: Img3,
    h2: "Celebrate Your Achievements",
    p: "We believe in celebrating every milestone! Whether it's mastering a tough topic or acing an exam.",
  },
  {
    id: 4,
    img: Img4,
    h2: "Luxury Car 4",
    p: "Innovative design meets timeless beauty.",
  },
  {
    id: 5,
    img: Img5,
    h2: "Luxury Car 5",
    p: "Power, prestige, and performance in one package.",
  },
];

export default function Card() {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <Slider {...settings}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out max-w-xs mx-auto"
          >
            {/* Image Section */}
            <div className="relative w-full h-48">
              <img
                src={card.img}
                alt={card.h2}
                className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Text Section */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {card.h2}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{card.p}</p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
