import React from "react";

const FooterSection = () => {
  return (
    // footer section
    <footer className="bg-black text-gega-grey mt-8 mb-2 ">
      <div className="container  pb-8 flex flex-col md:flex-row px-10 lg:px-0">
        {/* left */}
        <div className="basis-1/3">
          <a
            href="#"
            className="text-2xl lg:text-3xl 
            font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-900 to-red-200"
          >
            SEGA
          </a>
          <p className="text-sm mt-2">2023 YunusSOFT NO &copy; COPYRIGHT </p>
        </div>

        {/* middle */}
        <div className="basis-1/3">
            <h2 className="mb-2 text-gega-red">LINKS</h2>
            <div className="grid grid-cols-5 gap-2 uppercase">
                <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Movies</a>
                <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Celebrities</a>
                <a href="#" className="col-span-2 hover:text-gega-melon duration-500">Blog</a>
                <a href="#" className="col-span-2 hover:text-gega-melon duration-500">News</a>
                <a href="#" className="col-span-2 hover:text-gega-melon duration-500">About</a>
            </div>
        </div>
        {/* right */}
        <div className="basis-1/3">
            <h2 className="mb-2 text-gega-red">FOLLOW US</h2>
            <form action="" className="flex">
                <input type="text" placeholder="TYPE YOUR EMAİL"
                className="footer-form  placeholder:bg-transparent  border-gega-red placeholder:text-xs outline-none" />
                <button className="footer-form  border-gega-red bg-gega-red font-mono uppercase">Subscribe</button>
            </form>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
