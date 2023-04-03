import React from "react";
import s from "./Message.module.scss";

const Message = ({ children, username, index }) => {
  return (
    <li key={index}>
      <div className={s.messageBox}>
        <div className={s.username}>{username}</div>
        <div className={s.message}>{children}</div>
      </div>
    </li>
  );
};

export default Message;
