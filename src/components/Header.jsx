import React from "react";
import Login from "./Login";
import MobileMenu from "./MobileMenu";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";
import MatrixSection from "./MatrixSection";
import PostSection from './PostSection';
import FooterSection from "./FooterSection";

const Header = () => {
  return (
    <div className="bg-black items-center shadow-[#50d71e]">
      <header
        className=" font-gemunu font-bold   
      uppercase 
    lg:py-4"
      >
        <div className=" items-center flex justify-center  space-x-8 lg:space-x-16 py-6 shadow-[#9ff181]">
          <div className="">
            {" "}
            <a
              href="#"
              className="text-4xl lg:text-6xl pl-4 md:pl-0
            font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-900 to-red-200"
            >
              SEGA
           </a>
          </div>
          {/*mobile menü  */}
          <MobileMenu />

          <nav className="hidden md:flex justify-between ">
            <div
              className="flex items-center 
            
            text-xs lg:text-lg space-x-4 lg:space-x-8"
            >
              <a
                href="#"
                className="text-white hover:text-red-500
              transition dration-500 transform
              "
              >
                movies
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500
              transition dration-500 transform
              "
              >
                celebrities
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500
              transition dration-500 transform
              "
              >
                blog
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500
              transition dration-500 transform
              "
              >
                news
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500
              transition dration-500 transform
              "
              >
                about
              </a>

              <Login />
            </div>
          </nav>
        </div>
      </header>
      <HeroSection />
      <MoviesSection/>
      <MatrixSection/>
      <PostSection/>
      <FooterSection/>
    </div>
  );
};

export default Header;
