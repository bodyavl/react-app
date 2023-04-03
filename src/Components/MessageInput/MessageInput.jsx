import React from 'react'
import s from './MessageInput.module.scss'

const MessageInput = ({ placeholder, id }) => {
    return (
      <input className={s.field} type="text" placeholder={placeholder} id={id}/>
    );
  };

export default MessageInput