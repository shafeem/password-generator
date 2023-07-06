import React, { useState } from "react";
import Image from "./Image";
import Input from "./Input";

const Body = (props) => {
  const { Password, setPassword, generatePassword,handleText } = props;

  return (
    <div className="flex flex-row  bg-faint-orange gap-5">
      <div className="w-5/12">
        <Image Password={Password} />
      </div>
      <div className="w-7/12">
        <Input
          Password={Password}
          setPassword={setPassword}
          generatePassword={generatePassword}
          handleText={handleText}
        />
      </div>
    </div>
  );
};

export default Body;
