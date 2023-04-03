import React from "react";
import s from "./Input.module.scss";

const Input = ({ placeholder, id, onChange}) => {
  return (
    <input className={s.field} type="text" placeholder={placeholder} id={id} onChange={onChange} minLength={6} required/>
  );
};

export default Input;
