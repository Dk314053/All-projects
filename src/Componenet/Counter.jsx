import React from 'react'
import { useState } from 'react'
import { FaArrowAltCircleLeft} from 'react-icons/fa';
import { FaArrowAltCircleRight} from 'react-icons/fa';
import { FaArrowAltCircleUp} from 'react-icons/fa';
import { FaArrowCircleDown} from 'react-icons/fa';
import styles from './Counter.module.css'

const Counter = () => {
    const [update,setUpdate]=useState(0)
    const handleClick=(e)=>{
        e.preventDefault()
        setUpdate(update+1);
        return;
    }

  return (
    <>
     <h1 className={styles.head}>Counter App</h1>
    <div className={styles.maincontainer}>
       
<FaArrowAltCircleLeft onClick={()=>setUpdate(update-10)} className={styles.left}/>
<FaArrowAltCircleUp  onClick={handleClick} className={styles.up}/>
<p className={styles.value}>{update}</p>
<FaArrowAltCircleRight onClick={()=>setUpdate(update+10)} className={styles.right}/>
<FaArrowCircleDown  onClick={()=>setUpdate(update-1)} className={styles.down} />

    </div>
    </>
  )
}

export default Counter