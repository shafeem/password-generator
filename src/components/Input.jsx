import React, { useState } from "react";
import SeekBar from "./SeekBar";

const Input = (props) => {
  const { Password, setPassword } = props;
  const [isRotate, setIsRotate] = useState(false);

  const handleClick = () => {
    setIsRotate(true);
    setTimeout(() => {
      setIsRotate(false);
    }, 1000);
  };

  return (
    <div className=" h-fit items-center  ">
      <div className="w-full flex gap-10 md:px-12">
        <div className=" border-2 max-w-xl rounded-3xl md:w-full w-28 h-12 border-gray-300 decoration-transparent md:h-14 flex justify-between md:px-20 items-center">
          <p className="text-gray-800 font-serif text-center ">54Wfs</p>
          <button
            className={`transition-all ${isRotate ? "animate-spin" : ""}`}
            onClick={handleClick}
          >
            <span className="material-symbols-outlined">refresh</span>
          </button>
        </div>
        <button className="bg-blue-600 text-white text-sm md:text-md w-28 rounded-3xl font-bold h-12 md:h-14 uppercase px-2 hover:scale-110 duration-500 hover:shadow">
          c o p y
        </button>
      </div>

      <div className="flex pt-10">
        <p className="pl-16 text-gray-800 font-serif md:text-lg text-base font-thin ">
          Password Length :
        </p>
        <p className="pl-6 text-xl font-semibold">{`${Password?.length}`}</p>
        <button>
          <span className="material-symbols-outlined">do_not_disturb_on</span>
        </button>
        
        <SeekBar />
        <button>
          <span class="material-symbols-outlined">add_circle</span>
        </button>
      </div>
    </div>
  );
};

export default Input;
