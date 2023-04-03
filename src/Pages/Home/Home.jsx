import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import s from './Home.module.scss'

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('chat')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="container-sm">
        <div className={s.wrapper}>
          <label htmlFor="username" className={s.label}>Enter a username</label>
          <Input placeholder={"username"} id={"username"} />
          <Button className={s.button}>Login</Button>
        </div>
      </form>
    </>
  )
}

export default Home