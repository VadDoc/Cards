import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header} from "../Header/Header";
import styles from './Layout.module.css'

type PropsType = {}

export const Layout: React.FC<PropsType> = () => {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </>
  )
}