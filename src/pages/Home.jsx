
import React, { useRef } from "react";
import Header from "./general-components/Header";
import IntroSection from "./home-components/IntroSection"
import DisplayedProductSection from "./home-components/DisplayedProductSection";
import AboutSection from "./home-components/AboutSection";
import TestimonialSection from "./home-components/TestimonialSection";
import ContactSection from "./home-components/ContactSection";

const Home = () => {
  const homeRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const refs = {
    '/': {pathname: '/', hash: '', ref: homeRef},
    '/#about': {pathname: '/', hash: '#about', ref: aboutSectionRef},
    '/#contact': {pathname: '/', hash: '#contact', ref: contactSectionRef},
  };

  const refs2 = {
    'home': homeRef,
    'about': aboutSectionRef,
    'contact': contactSectionRef,
  };

  return (
    <div className="home" ref={homeRef}>
      <Header refs={refs} />
      <IntroSection/>
      {/* <OfferSection/> */}
      <DisplayedProductSection/>
      <AboutSection ref={aboutSectionRef}/>
      <TestimonialSection/>
      <ContactSection ref={contactSectionRef}/>
    </div>
  );
};

export default Home;