import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Contactus from "../components/Contactus";
import StatsSection from "../components/StatsSection";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <StatsSection/>
      <Services/>
      <Contactus />
    </>
  );
};

export default Home;
