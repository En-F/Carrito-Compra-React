import React from "react";
import "../Button/Button.css";

function Button({ texto, onClick, clase }) {
  return (
    <button className={clase} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;
