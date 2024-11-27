
import React from "react";
import Header from "./home-components/Header";
import IntroSection from "./home-components/IntroSection"
import OfferSection from "./home-components/OfferSection";
import ProductSection from "./home-components/ProductSection";
import AboutSection from "./home-components/AboutSection";
import TestimonialSection from "./home-components/TestimonialSection";

const Home = () => {
  return (
    <>
      <Header/>
      <IntroSection/>
      <OfferSection/>
      <ProductSection/>
      <AboutSection/>
      <TestimonialSection/>
    </>
  );
};

export default Home;