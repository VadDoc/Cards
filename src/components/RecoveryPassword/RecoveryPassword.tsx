import React from 'react'
import styles from './RecoveryPassword.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {InitialStateRecoveryPasswordType} from "./recoveryPasswordReducer";

export const RecoveryPassword:React.FC<PropsType> = () => {
  const pageData = useSelector<AppRootStateType, InitialStateRecoveryPasswordType>(state => state.recoveryPasswordReducer)

  return (
    <div className={styles.recoveryPassword}>
      <h1>{pageData.pageTitle}</h1>
    </div>
  )
}

type PropsType = {}