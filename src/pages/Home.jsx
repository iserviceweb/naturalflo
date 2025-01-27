
import React, { useRef, useEffect } from "react";
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
    home: { ref: homeRef },
    about: { ref: aboutSectionRef },
    contact: { ref: contactSectionRef },
    featured: { ref: featuredProductSectionRef },
  };

  useEffect(() => {
    homeRef.current.scrollIntoView({ behavior: 'auto' });
  }, []);

  return (
    <div className="home body" ref={homeRef}>
      <Header refs={refs} />
      <div className="main">
        <IntroSection />
        <HairIDIntro />
        <FeaturedProductSection ref={featuredProductSectionRef} />
        <AboutSection ref={aboutSectionRef} />
        <TestimonialSection />
        <ContactSection ref={contactSectionRef} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;