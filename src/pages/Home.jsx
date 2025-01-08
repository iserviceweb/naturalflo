
import React, { useRef } from "react";
import Header from "./general-components/Header";
import IntroSection from "./home-components/IntroSection"
import FeaturedProductSection from "./home-components/FeaturedProductSection";
import AboutSection from "./home-components/AboutSection";
import TestimonialSection from "./home-components/TestimonialSection";
import ContactSection from "./home-components/ContactSection";
import HairIDIntro from "./home-components/HairIDIntro";
import Footer from "./general-components/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const featuredProductSectionRef = useRef(null);

  const refs = {
    'home': homeRef,
    'about': aboutSectionRef,
    'contact': contactSectionRef,
    'featured': featuredProductSectionRef
  };

  return (
    <div className="home" ref={homeRef}>
      <Header refs={refs} />
      <IntroSection/>
      <HairIDIntro/>
      <FeaturedProductSection ref={featuredProductSectionRef}/>
      <AboutSection ref={aboutSectionRef}/>
      <TestimonialSection/>
      <ContactSection ref={contactSectionRef}/>
      <Footer/>
    </div>
  );
};

export default Home;