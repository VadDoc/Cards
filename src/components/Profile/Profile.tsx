import React from 'react'
import styles from './Profile.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {InitialStateProfileType} from "./profileReducer";

export const Profile: React.FC<PropsType> = () => {
  const pageData = useSelector<AppRootStateType, InitialStateProfileType>(state => state.profileReducer)

  return (
    <div className={styles.profile}>
      <h1>{pageData.pageTitle}</h1>
    </div>
  )
}

type PropsType = {}
