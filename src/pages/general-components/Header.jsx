import React from "react";

const Header = () => {
  return (
    <div>
      {/* Header Section Starts */}
      <header className="header_section">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between uppercase">
            <a href="index.html" className="text-2xl font-bold">
              <span>NaturalFlo</span>
            </a>
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
                  <a href="" className="text-gray-700 hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li className="">
                  <a href="" className="text-gray-700 hover:text-blue-600">
                    About
                  </a>
                </li>
                <li className="">
                  <a href="" className="text-gray-700 hover:text-blue-600">
                    Fruits
                  </a>
                </li>
                <li className="">
                  <a href="" className="text-gray-700 hover:text-blue-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* Header Section Ends */}
    </div>
  );
};

export default Header;