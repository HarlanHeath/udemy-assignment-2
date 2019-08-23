import React from "react";
import "./Char.css";

function Char(props) {
  return (
    <div className="char-block" onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  );
}

export default Char;
