import React from "react";

const Login = () => {
  return (
    <div className=" text-red-600 flex items-center 
    left-0
    text-xs lg:text-lg space-x-4 lg:space-x-8 ">
      <form>
        <div className="
        group border-r px-4 mx-4 py-1 border-red-500 flex gap-2 text-3xl ">
          <input
            type="text"
            className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-t border-red-500 focus:outline-none w-24 lg:w-28 transtion duration-700"
          />
          <button className="group-hover:ml-0 ">
            <i class="fa-solid fa-magnifying-glass group-hover:text-red-500 transtion duration-500"></i>
          </button>
        </div>
      </form>

        <div className="flex items-centertext-xs lg:text-lg space-x-4 lg:space-x-8">
            <a href="#">Login</a>
            <a href="#" className="bg-red-500 px-3 py-1 hover:bg-rose-900 cursor-pointer transition duration-700 text-white hover:border-b transtion duration whitespace-nowrap">Sign up</a>

        </div>

    </div>
  );
};

export default Login;
