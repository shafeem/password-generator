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

  const lengthDecreaser = () => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      length: Math.max(prevPassword.length - 1, 4),
    }));
  };

  const lengthIncreaser = () => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      length: Math.min(prevPassword.length + 1, 20),
    }));
  };

  const strengthChecker = (length) => {
    if (length >= 4 && length <= 5) {
      return "Very Weak";
    } else if (length >= 6 && length <= 7) {
      return "Weak";
    } else if (length >= 8 && length <= 9) {
      return "Good";
    } else if (length >= 10 && length <= 11) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const bgChecker = (length) => {
    if (length >= 4 && length <= 5) {
      return "bg-veryweak";
    } else if (length >= 6 && length <= 7) {
      return "bg-orange-600";
    } else if (length >= 8 && length <= 9) {
      return "bg-amber-400";
    } else if (length >= 10 && length <= 11) {
      return "bg-green-400";
    } else {
      return "bg-blue-600";
    }
  };

  const bgColor = bgChecker(Password.length)
  const strengthText = strengthChecker(Password.length);

  return (
    <div className="h-fit items-center">
      <div className="w-full flex gap-10 md:px-12">
        <div className="border-2 max-w-xl rounded-3xl md:w-full w-28 h-12 border-gray-300 decoration-transparent md:h-14 flex flex-row md:px-20 items-center justify-between">
          <div>
            <p className="text-gray-800 font-serif text-center">54Wfs</p>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center gap-1">
            <div className={`${bgColor} w-24 h-7 rounded-lg flex justify-center items-center`}>
              <p className="font-semibold  text-white text-center uppercase text-xs">{`${strengthText}`}</p>
            </div>

            <div className="flex-grow"></div>
            <button
              className={`transition-all ${isRotate ? "animate-spin" : ""}`}
              onClick={handleClick}
            >
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </div>
        <button className="bg-blue-600 text-white text-sm md:text-md w-28 rounded-3xl font-bold h-12 md:h-14 uppercase px-2 hover:scale-110 duration-500 hover:shadow">
          c o p y
        </button>
      </div>
      <div className="flex pt-10 justify-around items-center">
        <p className="pl-16 text-gray-800 font-serif md:text-lg text-base font-thin">
          Password Length :
        </p>
        <p className="text-xl font-semibold">{`${Password?.length}`}</p>
        <button className="" onClick={lengthDecreaser}>
          <span className="material-symbols-outlined text-5xl text-gray-600">
            do_not_disturb_on
          </span>
        </button>
        <SeekBar Password={Password} setPassword={setPassword} />
        <button className="" onClick={lengthIncreaser}>
          <span className="material-symbols-outlined text-5xl text-gray-600">
            add_circle
          </span>
        </button>
      </div>
      <div className="flex pl-4 items-center">
        <p className="pl-16 text-gray-800 font-serif md:text-lg text-base font-thin"> Characters used:</p>

      </div>
    </div>
  );
};

export default Input;
