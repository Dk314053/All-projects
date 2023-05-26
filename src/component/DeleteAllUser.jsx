import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "./store/slice/userSlice";

export const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const clearAllUser=()=>{
dispatch(deleteUser());
  }
  return (
  <div>
    <button onClick={clearAllUser} style={{marginTop:"1.5rem",padding:"1.2rem",backgroundColor:"greenyellow",fontSize:"2rem"}}>Clear User</button>
  </div>
  
  );
};