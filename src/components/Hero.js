import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Bajrangi from "../images/Bajrangi.png";
import slokart from "../images/slokart.png";
import Housing from "../images/Housing.png";
import saathi from "../images/Saathi solution.png";
import wedding from "../images/Wedding.png";
import ecomdash from "../images/Ecomdash.png";
import hrms from "../images/HRMS.png";
import speakerore from "../images/Speakerore.png";

const PrevArrow = ({ className, onClick }) => {
  return (
    <button
      className={`text-black  p-2 absolute z-10 right-10 -top-3 transform -translate-y-1/2 focus:outline-none`}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <button
      className={`text-black p-2 absolute z-10 right-0 -top-3 transform -translate-y-1/2 focus:outline-none`}
      style={{ display: "block" }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 overflow-hidden relative">
      <Slider {...settings} className=" mt-12 w-full max-w-full">
        <div className="p-4">
          <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
          <img src={slokart} alt="Slide 1" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
          <img src={saathi} alt="Slide 2" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
          <img src={Housing} alt="Slide 3" className="w-full h-auto" />
        </div>
        <div className="p-4">
          <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
          <img src={wedding} alt="Slide 4" className="w-full h-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
