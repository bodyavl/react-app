import React from 'react'
import s from './Message.module.scss'

const Message = ({children, username}) => {
  return (
    <li className={s.messageBox}>
        <div className={s.username}>{username}</div>
        <div className={s.message}>{children}</div>
    </li> 
  )
}

export default Message