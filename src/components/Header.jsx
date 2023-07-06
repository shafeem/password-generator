import React from "react";
import icon from "../assets/images/icon.jpg";

const Header = () => {
  return (
    <div className="w-full flex pt-10 font-bold">
      <div className="w-32">
        <img src={icon} alt="" className=" w-28 h-16 pl-3" /> 
      </div>
      <div className=" w-full flex justify-center items-center">
      <h2 className="md:text-4xl sm:text-xl font-serif text-gray-800">Random Password Generator</h2>
      </div>
    </div>
  );
};

export default Header;
