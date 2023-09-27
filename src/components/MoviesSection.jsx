import React from "react";

const MoviesSection = () => {
  return (
    <section className="py-24 bg-black">
      {/*    movies content */}
      <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="basis-2/3">
          {/* titles */}
          <div className="flex space-x-2 divide-x divide-gega-red divide-opacity-50 mb-8 pl-10 lg:pl-0">
            <h2 className="text-gega-red">
              <a href="#">Latest</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Popular</a>
            </h2>
            <h2 className="text-gega-grey pl-2 hover:text-gega-red duration-500">
              <a href="#">Best</a>
            </h2>
          </div>
          {/* images container */}
          <div className="flex flex-wrap cursor-pointer">
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv1.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv6.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv2.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv3.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv4.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
              <img
                src="../images/mv5.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 lg:hidden">
              <img
                src="../images/mv6.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 lg:hidden md:hidden">
              <img
                src="../images/mv3.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 lg:hidden">
              
              <img
                src="../images/mv1.jpg"
                className="group-hover:scale-110 group-hover:opacity-50 duration-500"
              />
              <div className="absolute px-6 bottom-8 ">
                <h3 className="text-gega-grey group-hover:text-gega-melon group-hover:mb-2 duration-500">Oblivion</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 text-gega-grey">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

                {/* icons container */}
                <div className="flex gap-2 absolute space-x-8 text-gega-grey opacity-1 -bottom-2 group-hover:bottom-2 group-hover:opacity-100 duration-500">
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <a href="#" className="hover:text-gega-red duration-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>  
        
          {/* right container*/}
        <div className="basis-1/3 pl-10 lg:pl-0 ">
      
        <h2 className="text-gega-grey mb-8">Hot News</h2>
        {/* new container */}
        <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-col lg:h-full lg:pb-16 justify-start lg:justify-between space-y-4">
          {/* item */}
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* new image container */}
            <div className="basis-1/3 h-full">
              <img src="../images/new1.jpg" alt="" className="h-full w-full object-cover"/>

            </div>
            {/* item detail */}
            <div className="basis-2/3 pl-8 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus reiciendis?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-mono">ON NOW 01 2023</p>
            </div>
          </div>
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* new image container */}
            <div className="basis-1/3 h-full">
              <img src="../images/new5.jpg" alt="" className="h-full w-full object-cover"/>

            </div>
            {/* item detail */}
            <div className="basis-2/3 pl-8 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus reiciendis?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-mono">ON NOW 01 2023</p>
            </div>
          </div>
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* new image container */}
            <div className="basis-1/3 h-full">
              <img src="../images/new2.jpg" alt="" className="h-full w-full object-cover"/>

            </div>
            {/* item detail */}
            <div className="basis-2/3 pl-8 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus reiciendis?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-mono">ON NOW 01 2023</p>
            </div>
          </div>
          <div className="flex items-center group basis-3/4 md:basis-1/2">
            {/* new image container */}
            <div className="basis-1/3 h-full">
              <img src="../images/new3.jpg" alt="" className="h-full w-full object-cover"/>

            </div>
            {/* item detail */}
            <div className="basis-2/3 pl-8 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus reiciendis?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-mono">ON NOW 01 2023</p>
            </div>
          </div>
          <div className="flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex">
            {/* new image container */}
            <div className="basis-1/3 h-full">
              <img src="../images/new4.jpg" alt="" className="h-full w-full object-cover"/>

            </div>
            {/* item detail */}
            <div className="basis-2/3 pl-8 text-gega-grey group-hover:text-gega-melon group-hover:cursor-pointer duration-500">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus reiciendis?</p>
              <p className="text-xs tracking-tighter mt-2 font-bold font-mono">ON NOW 01 2023</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default MoviesSection;
