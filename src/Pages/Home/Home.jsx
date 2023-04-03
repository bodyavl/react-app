import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import s from './Home.module.scss'

const Home = () => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username) {
      
    }
    localStorage.setItem('username', username);

    navigate('chat')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="container-sm">
        <div className={s.wrapper}>
          <label htmlFor="username" className={s.label}>Enter a username</label>
          <Input placeholder={"username"} id={"username"} onChange={e => setUsername(e.target.value)}/>
          <Button className={s.button}>Login</Button>
        </div>
      </form>
    </>
  )
}

export default Home