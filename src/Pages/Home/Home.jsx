import React from 'react'
import s from './Home.module.css'
const Home = () => {
  return (
    <div className={s.wrapper}>
      <form action="">
        <label htmlFor="username" className={s.label}>Enter a username</label>
        <input className={s.field} type="text" placeholder="username" id='username'/>
      </form>
    </div>
  )
}

export default Home