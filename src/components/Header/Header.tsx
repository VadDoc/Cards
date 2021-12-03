import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

type PropsType = {}

export const Header: React.FC<PropsType> = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <NavLink to={'/'}>Test</NavLink>
          <NavLink to={'/profile'}>Profile</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/new-password'}>New Password</NavLink>
          <NavLink to={'/recovery-password'}>Recovery password</NavLink>
          <NavLink to={'/user-registration'}>User registration</NavLink>
        </div>
      </header>
    </>
  )
}