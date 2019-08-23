import React from "react";

function Validation(props) {
  return (
    <div>
      <h1>Validation</h1>
      {props.textLength > 5 ? (
        <p>Text is long enough</p>
      ) : (
        <p>Text is not long enough!</p>
      )}
      <p>{props.textLength}</p>
    </div>
  );
}

export default Validation;
