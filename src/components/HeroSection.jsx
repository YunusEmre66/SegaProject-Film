import React from "react";

const HeroSection = () => {
  return (
    <div className="
    h-96 lg:h-128
    bg-orange-400 group relative">
      <img
        src="../images/batman.jpg"
        alt="asdas"
        className="h-full w-full object-cover"
      />

      {/*       hero content  */}
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black">
        {/*  hero content container */}
        <div className="container pl-10 lg:pl-0">
          <h3 className="text-gega-melon tracking-wider group-hover:mb-1 duration-500">
            Action, Drama, Thriller
          </h3>
          <h1 className="text-4xl lg:text-6xl text-gega-grey group-hover:mb-1 duration-500">
            The Dark Knight
          </h1>
          <p className="text-gega-grey group-hover:mb-2 duration-500 w-3/4 lg:w-2/^3 text-sm lg:text-base">
            When the menace known as the Joker wreaks havoc and chaos on the
            people of Gotham, Batman must accept one of the greatest
            psychological and physical tests of his ability to fight injustice.
          </p>
          {/* detail container */}
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10  lg:group-hover:mb-20  duration-1000">
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
              >
                WATCH TRAILER
              </a>
              <div className="flex h-8 w-8 text-center justify-center items-center rounded-full bg-gega-red text-gega-white ">
                <i className="fas fa-play"></i>

              </div>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-gega-grey uppercase lg:text-lg hover:text-gega-red duration-500"
              >
                FULL SYNOPSIS
              </a>
              <div className="flex h-8 w-8 text-center justify-center items-center rounded-full bg-gega-red text-gega-white ">
                <i className="fas fa-arrow-right"></i>

              </div>
            </div>
          </div>
        </div>
      </div>
     {/*  points */}
     <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
      <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-gega-grey"></div>
     </div>
    </div>
  );
};

export default HeroSection;
