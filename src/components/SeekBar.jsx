import React, { useState } from "react";
import Slider from '@mui/material/Slider';

const SeekBar = (props) => {
  const {Password,setPassword} = props;

  const handleLength = (e)=>{
    console.log();
    setPassword((prevPassword) => ({
      ...prevPassword,
      length: e.target.value,
    }));

  }

  return (
    <div  className="w-96 ">
      <Slider max={20} min={4} value={Password.length} onChange={(e)=>handleLength(e)} color="secondary" valueLabelDisplay="auto" />
    </div>
  );
};

export default SeekBar;
