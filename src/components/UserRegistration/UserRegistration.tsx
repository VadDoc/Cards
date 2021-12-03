import React from 'react'
import styles from './UserRegistration.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {InitialStateUserRegistrationType} from "./userRegistrationReducer";

export const UserRegistration:React.FC<PropsType> = () => {
  const pageData = useSelector<AppRootStateType, InitialStateUserRegistrationType>(state => state.userRegistrationReducer)

  return (
    <div className={styles.login}>
      <h1>{pageData.pageTitle}</h1>
    </div>
  )
}

type PropsType = {}