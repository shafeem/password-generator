import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CheckBox = (props) => {
  const { Password, setPassword } = props;

  const handleChange = (e) => {
    setPassword((prevPassword) => ({
      ...prevPassword,
      [e.target.name]: e.target.checked,
    }));
  };

  const lower = () => {
    if (!Password.uppercase && !Password.numbers && !Password.symbols) {
      return true;
    }
  };
  const upper = ()=>{
    if (!Password.lowercase && !Password.numbers && !Password.symbols) {
        return true;
      }
  }
  const number = ()=>{
    if (!Password.lowercase && !Password.uppercase && !Password.symbols) {
        return true;
      }
  }
  const symbol = ()=>{
    if (!Password.lowercase && !Password.numbers && !Password.uppercase) {
        return true;
      }
  }

  return (
    <div className=" flex w-full justify-center items-center gap-8">
      <FormControlLabel
        onChange={handleChange}
        checked={Password.uppercase}
        control={<Checkbox name="uppercase" />}
        label="A B C"
        disabled={upper()}
      />
      <FormControlLabel
        onChange={handleChange}
        checked={Password.lowercase}
        control={<Checkbox name="lowercase" />}
        label="a b c"
        disabled={lower()}
      />
      <FormControlLabel
        onChange={handleChange}
        checked={Password.numbers}
        control={<Checkbox name="numbers" />}
        label="1 2 3"
        disabled={number()}
      />
      <FormControlLabel
        onChange={handleChange}
        checked={Password.symbols}
        control={<Checkbox name="symbols" />}
        label="# $ &"
        disabled={symbol()}
      />
    </div>
  );
};

export default CheckBox;
