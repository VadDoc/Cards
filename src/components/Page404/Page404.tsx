import React from 'react'
import styles from './Page404.module.css'

type PropsType = {

}

export const Page404:React.FC<PropsType> = () => {
  return (
    <div className={styles.page404}>
      <h1>4<span>0</span>4</h1>
      <div>
        <p>Page not found</p>
        <p>Go to another page using the Menu</p>
      </div>
    </div>
  )
}