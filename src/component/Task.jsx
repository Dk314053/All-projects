import React from 'react'
import { useState } from 'react'
import { TiDeleteOutline } from 'react-icons/ti';
import styles from './Task.module.css'

const Task = () => {
  const [change,setChange]=useState("")
  const [text,setText]=useState([])
  const handleClick =()=>{
   if(change ===""){
      alert("please fill the input field")
      return;
    }
    const newUser = {
      id: new Date() + text,
      title: change,
    
    }
let data=[...text, newUser]
setText(data)
setChange("")
  }
  const handleDelete=(index)=>{
  let data = text.filter((ele)=>{
   return index !==ele.id;
  })
  setText(data)
  }

const handleCompleted=(id)=>{
let updateData=text.map((item)=>{
  if(item.id===id){
    return { ...item, status: !item.status }
  }else{
    return item
  }
})
setText(updateData)
}

  return (
    <div className={styles.maincontainer}>
      <h1 className={styles.head}>Todo task</h1>
      <button className={styles.btn1} onClick={handleClick}>Add</button>
  <input className={styles.input} type='text' placeholder='Enter the Task' value={change} onChange={(e)=>setChange(e.target.value)} required/>
  {
    text.map((ele,index)=>{
    return(
   
      <div className={styles.container}>
   <div key={index} >
    <ul className={styles.list}>
            {ele.status ? <li> <strike> {ele.title}</strike></li> : <li>{ele.title}</li>}
            </ul>
            </div>
   <TiDeleteOutline className={styles.icon} onClick={()=>handleDelete(ele.id)}/>
   <button className={styles.btn} onClick={()=>handleCompleted(ele.id)} >Completed</button>
   </div>
   
    )})
  
  }

    </div>
  )
}

export default Task