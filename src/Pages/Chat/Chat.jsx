import React from 'react'
import Button from '../../Components/Button/Button'
import MessageInput from '../../Components/MessageInput/MessageInput'
import Message from '../../Components/Message/Message'
import s from './Chat.module.scss'
import { useState, useEffect } from 'react'

const Chat = ({socket}) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on('receive message', message => {
      displayMessage(message.text, message.username)
    })
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!message) return; 
    const output = displayMessage(message, localStorage.username);
    socket.emit('chat message', output);  
    setMessage('');
  }
  const displayMessage = (text, username) => {
    const output = { text, username };
    const newMessages = messages.concat(output);
    setMessages(newMessages);
    window.scrollTo(0, document.body.scrollHeight);
    return output;
  }

  return (
    <>
      <div className={s.container}>
        <ul>
          {messages.map((message, index) => {
            return (<Message username={message.username} index={index} >{message.text}</Message>)
          })}
        </ul>
      </div>

      <form onSubmit={handleSubmit} >
        <div className={s.formWrapper}>
          <MessageInput placeholder={"Enter a message"} value={message} onChange={e => setMessage(e.target.value)} />
          <Button>Send</Button>
        </div>
      </form>
      
    </>

  )
}

export default Chat