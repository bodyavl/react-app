import React from 'react'
import Button from '../../Components/Button/Button'
import MessageInput from '../../Components/MessageInput/MessageInput'
import Message from '../../Components/Message/Message'
import s from './Chat.module.scss'


const Chat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
      <ul className={s.messsages}>
        <Message username={"Vasyl"}>Hello world</Message>
      </ul>

      <form onSubmit={handleSubmit} >
        <div className={s.formWrapper}>
          <MessageInput placeholder={"Enter a message"}/>
          <Button>Send</Button>
        </div>
      </form>
      
    </>

  )
}

export default Chat