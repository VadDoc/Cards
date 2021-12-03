import React from 'react'
import styles from './Login.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {InitialStateLoginType} from "./loginReducer";

export const Login:React.FC<PropsType> = () => {
  const pageData = useSelector<AppRootStateType, InitialStateLoginType>(state => state.loginReducer)

  return (
    <div className={styles.login}>
      <h1>{pageData.pageTitle}</h1>
    </div>
  )
}

type PropsType = {}
