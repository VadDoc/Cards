import React from 'react'
import styles from './Test.module.css'
import InputText from "../../common/InputText/InputText";
import Checkbox from "../../common/Checkbox/Checkbox";
import Button from "../../common/Button/Button";

export const Test:React.FC<PropsType> = () => {
  return (
    <div className={styles.test}>
      <h1>Test</h1>
      <p><InputText className={styles.myInput}/></p>
      <p><Checkbox className={styles.myCheckbox}/></p>
      <p><Button className={styles.myButton}>Button</Button></p>
    </div>
  )
}


type PropsType = {}