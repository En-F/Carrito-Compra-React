import React from "react";
import "../Button/Button.css";

function Button({ texto, clase }) {
  return <button className={clase}>{texto}</button>;
}

export default Button;
