import React from 'react'
import styles from './NewPassword.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {InitialStateNewPasswordType} from "./newPasswordReducer";

export const NewPassword:React.FC<PropsType> = () => {
  const pageData = useSelector<AppRootStateType, InitialStateNewPasswordType>(state => state.newPasswordReducer)
  return (
    <div className={styles.newPassword}>
      <h1>{pageData.pageTitle}</h1>
    </div>
  )
}

type PropsType = {}
