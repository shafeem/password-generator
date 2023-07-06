import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect, useState } from "react";


function App() {

  const [Password, setPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false,
  });

  const [handleText, setHandleText] = useState('');

  useEffect(()=>{
    generatePassword()
  },[Password])


  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = Password;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandleText(characters.join(''));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);

  }

  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-col">
        <Header />
      </div>
      <div className="mt-10" />
      <div className="bg-grn font-bold font-serif h-fit text-center flex justify-center items-center">
        <p className=" text-white sm:text-2xl py-4">
          Create strong and secure passwords to keep your account safe online.
        </p>

      </div>
      <div className="bg-faint-orange pt-10">
        <Body
          Password={Password}
          setPassword={setPassword}
          generatePassword={generatePassword}
          handleText={handleText}
        />
      </div>
      <div className="bg-grn h-20" />
    </div>
  );
}

export default App;
