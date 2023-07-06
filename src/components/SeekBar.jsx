import React, { useState } from "react";
import Slider from '@mui/material/Slider';

const SeekBar = () => {
  const [count, setCount] = useState(0);

  return (
    <div  className="w">
      <Slider max={10} min={0} valueLabelDisplay="auto" />
    </div>
  );
};

export default SeekBar;
