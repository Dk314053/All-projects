import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { MdDeleteForever } from 'react-icons/md';
import './DisplayUser.css'
import { removeUser } from './store/slice/userSlice';

const DisplayUser = () => {
    const dispatch=useDispatch();

    const data=useSelector((state)=>{
        return state.users;
    })

const deleteUser=(id)=>{
dispatch(removeUser(id))
}

    // console.log(data)
  return (
    <div>
 {
    data.map((user,id)=>{
        return (
            <div className='list'>
            <li className='name' key={id}>{user}
             </li>
            <li className='delete'>
            <MdDeleteForever onClick={()=>deleteUser(id)}/>

            </li>
           
            </div>
        )
    })
 }

    </div>
  )
}

export default DisplayUser