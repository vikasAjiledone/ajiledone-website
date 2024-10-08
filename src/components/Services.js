import React from "react";
import ai from "../images/AI.png";
import mobileApp from "../images/app developement.jpg";
import analysts from "../images/data analysts.jpg";
import webDevelop from "../images/web developement.jpg";
import sap from "../images/sap.jpg";
import blockChain from "../images/blockchain.jpg";

const Services = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <h3 className="text-3xl text-center">SERVICES</h3>
      <h3 className="text-4xl p-4 py-12 text-center md:text-left">
        We are delivering beautiful digital products for you.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={ai} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            Artificial Intelligence
          </h4>
        </div>
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={sap} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            SAP
          </h4>
        </div>
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={blockChain} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            BlockChain Metaverse
          </h4>
        </div>
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={mobileApp} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            Mobile App Development
          </h4>
        </div>
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={webDevelop} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            Web Development
          </h4>
        </div>
        <div className="relative max-w-xs mx-auto transform transition duration-500 hover:-translate-y-2">
          <img src={analysts} alt="AI" className="rounded-lg" />
          <div className="absolute inset-0 bg-black opacity-50 hover:opacity-70 rounded-lg"></div>
          <h4 className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white">
            BI and Data Analysis
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
