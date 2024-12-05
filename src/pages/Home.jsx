
import React, { useRef } from "react";
import Header from "./general-components/Header";
import IntroSection from "./home-components/IntroSection"
import OfferSection from "./home-components/OfferSection";
import ProductSection from "./home-components/ProductSection";
import AboutSection from "./home-components/AboutSection";
import TestimonialSection from "./home-components/TestimonialSection";

const Home = () => {
  const homeRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const refs = {
    '/': {pathname: '/', hash: '', ref: homeRef},
    '/#about': {pathname: '/', hash: '#about', ref: aboutSectionRef},
  };

  return (
    <div className="home" ref={homeRef}>
      <Header refs={refs} />
      <IntroSection/>
      <OfferSection/>
      <ProductSection/>
      <AboutSection ref={aboutSectionRef}/>
      <TestimonialSection/>
    </div>
  );
};

export default Home;