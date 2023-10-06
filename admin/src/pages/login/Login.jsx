import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

function Login() {
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch()
    const handleClick=(e)=>{
        e.preventDefault();
        login(dispatch,{username,password})
    }

  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
      <input 
      type="text" 
      placeholder='Username' 
      onChange={(e)=>setUserName(e.target.value)}
      style={{padding: 10,marginBottom:20}}
      >
      
      </input>
      <input 
      type="password" 
      placeholder='Password'
       onChange={(e)=>setPassword(e.target.value)}
       style={{padding:10,marginBottom:20}}
       >
      </input>
      <button onClick={(e)=>handleClick(e)} style={{padding:10,width:100}}>Login</button>
      
    </div>
  )
}

export default Login

