import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ refs, redirect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hashRef = {
    '#home': 'home',
    '#about': 'about',
    '#contact': 'contact',
  }
  
  const handleSmoothScroll = (ref) => {
    if(redirect){
      navigate(ref);
      return;
    }
    navigate('/#');
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    const destRef = refs[hashRef[location.hash]];
    if (destRef) {
      handleSmoothScroll(destRef);
    }
  }, [location]);

  return (
    <div className="relative sticky top-0 nf bg-baja z-50">
      <header>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between uppercase">
            <button className="text-4xl font-bold my-4"
              onClick={()=>{navigate('/#home')}}
            >
              <span className="playwrite">NaturalFlo</span>
            </button>
            <button
              className="block md:hidden focus:outline-none"
              type="button"
            >
              <span className="block w-6 h-1 bg-black my-1"></span>
              <span className="block w-6 h-1 bg-black my-1"></span>
              <span className="block w-6 h-1 bg-black my-1"></span>
            </button>
            <div className="hidden md:flex p-5">
              <ul className="flex space-x-10">
                <li className="">
                  <button className={"p-1 rounded-md uppercase underline-offset-4"}
                    onClick={() => {handleSmoothScroll(refs.home)}}
                  >
                    Home
                  </button>
                </li>
                <li className="">
                <button className={"p-1 rounded-md uppercase underline-offset-4"}
                    onClick={() => {handleSmoothScroll(refs.about)}}
                  >
                    About
                  </button>
                </li>
                <li className="">
                <button className={"p-1 rounded-md uppercase underline-offset-4"}
                    onClick={() => {handleSmoothScroll(refs.contact)}}
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;