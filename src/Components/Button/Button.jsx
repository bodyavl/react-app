import React from "react";
import s from './Button.module.scss'

const LoginButton = ({ children }) => {
  return (
      <button className={s.button}>{children}</button>
  )
};

export default LoginButton;
