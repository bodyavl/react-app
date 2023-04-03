import React from 'react'
import s from './MessageInput.module.scss'

const MessageInput = ({ placeholder, id, onChange, value }) => {
    return (
      <input className={s.field} type="text" value={value} placeholder={placeholder} id={id} onChange={onChange}/>
    );
  };

export default MessageInput