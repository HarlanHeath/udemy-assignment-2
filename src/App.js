import React, { useState } from "react";
import Validation from "./Component/Validation";
import Char from "./Component/Char";
import "./App.css";

function App() {
  const [inputLength, setInputLength] = useState("");

  const inputTextHandler = e => {
    setInputLength(e.target.value);
  };

  const deleteCharHandler = index => {
    const text = inputLength.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    setInputLength(updatedText);
  };

  const charList = inputLength.split("").map((char, index) => {
    return (
      <Char
        character={char}
        key={index}
        clicked={() => deleteCharHandler(index)}
      />
    );
  });

  return (
    <div className="App">
      <h1>Udemy Assignment 2</h1>
      <input type="text" value={inputLength} onChange={inputTextHandler} />
      <p>Length: {inputLength}</p>
      <Validation textLength={inputLength.length} />
      {charList}
    </div>
  );
}

export default App;
