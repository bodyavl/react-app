import React from "react";
import s from "./Input.module.scss";

const Input = ({ placeholder, id, style}) => {
  return (
    <input className={s.field} type="text" placeholder={placeholder} id={id} style={style}/>
  );
};

export default Input;
