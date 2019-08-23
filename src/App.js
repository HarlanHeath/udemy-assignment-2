import React, { useState } from "react";
import Validation from "./Component/Validation";
import "./App.css";

function App() {
  const [inputLength, setInputLength] = useState("");

  const inputTextHandler = e => {
    setInputLength(e.target.value);
  };

  return (
    <div className="App">
      <h1>Udemy Assignment 2</h1>
      <input type="text" value={inputLength} onChange={inputTextHandler} />
      <p>Length: {inputLength}</p>
      <Validation textLength={inputLength.length} />
    </div>
  );
}

export default App;
