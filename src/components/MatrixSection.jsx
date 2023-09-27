import React from "react";

const MatrixSection = () => {
  return (
    <section className="bg-gega-white  text-red-700 ">
      {/* matrix secton container */}
      <div className="container flex items-center justify-center relative pl-10 lg:pl-0 ">
        {/* left-content */}
        <div className="basis-1/2 md:basis-1/3 lg:basis-1/2 hidden md:block ">
          <img
            src="../images/matrix.png"
            alt=""
            className=" lg:bottom-0 lg:absolute"
          />
        </div>
        {/* right content */}
        <div className="basis-1/2 md:basis-2/3 lg:basis-1/2">
          {/* right content container */}
          <div className="flex flex-col justify-center py-10 w-3/4 md:w-full">
            <h3 className="tracking-wider text-gega-melon">
              ACTİON, DRAMA, THRILLER
            </h3>
            <h2 className="mb-2">Matrix Reloaded</h2>
            <p className="text-sm mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              eligendi minima consequatur quibusdam nemo ducimus ea adipisci
              recusandae pariatur modi.
            </p>
            <h3 className="tracking-wider text-gega-red">
             8 wins 34 nominations
            </h3>
          </div>

        </div>

        {/* oldie */}
        <div className="left-10 absolute -top-12 lg:left-0 w-24 h-24 bg-gega-melon rounded-full text-center flex items-center -rotate-45">
            <p className="uppercase font-bold text-xl text-gega-red ">Oldie & Goldie</p>

        </div>
      </div>
    </section>
  );
};

export default MatrixSection;
