import React from 'react'
import Data from './Data'
import { useState } from 'react'
import styles from './Quotes.module.css'
const Quotes = () => {
    const[update,setUpdate]=useState(Data[0])
    const handleClick=()=>{
        let quot=Math.floor(Math.random() * Data.length )
        setUpdate(Data[quot])
    }
  return (
    <div className={styles.maincontainer}>
        <h1 className={styles.head}> Random Quote Generator </h1>
  <p className={styles.quote}>"{update.quote}"</p>
  <p className={styles.author}>Author:-{update.author}</p>
  <button className={styles.btn} onClick={handleClick}>Next</button>

    </div>
  )
}

export default Quotes