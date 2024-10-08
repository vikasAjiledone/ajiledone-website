import React from "react";
import Slider from "react-slick";
import BannerOne from "../images/Banner1.jpg";
import BannerTwo from "../images/Banner2.jpg";
import BannerThree from "../images/Banner3.jpg";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-black">
      <div className="relative container mx-auto">
        <Slider {...settings}>
          <div>
            <div className="relative p-4">
              <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
              <img
                src={BannerOne}
                alt="Slide 1"
                className="w-full xxl:h-[500px] xl:h-[500px] lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">
                  Hello We are , Ajiledone Technologies
                </h3>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-4">
              <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
              <img
                src={BannerTwo}
                alt="Slide 2"
                className="w-full xxl:h-[500px] xl:h-[500px] lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">Hello We are , Ajiledone Technologies</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-4">
              <div className="absolute inset-0 bg-black opacity-80 hover:opacity-70 rounded-lg"></div>
              <img
                src={BannerThree}
                alt="Slide 3"
                className="w-full xxl:h-[500px] xl:h-[500px] lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">Hello We are , Ajiledone Technologies</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
