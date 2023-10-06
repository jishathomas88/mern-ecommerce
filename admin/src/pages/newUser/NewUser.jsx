import React, { useState } from 'react'
import './NewUser.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/apiCalls'

function NewUser() {
    const [inputs,setInputs]=useState({})
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        setInputs((prev)=>
       ({...prev,[e.target.name]:e.target.value}))
    }
    console.log(inputs)
    const handleClick=(e)=>{
        e.preventDefault();
      addUser(dispatch,inputs)
    }
    
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" name='username' className="newUserInput" placeholder='Jhon' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" className="newUserInput" name='fullName' placeholder='Jhon Smith' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" className="newUserInput" name='email' placeholder='jhon"gmail.com' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" className="newUserInput" name='password' placeholder='password' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="text" className="newUserInput" name='phone' placeholder='+1 123 456 78' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="text" className="newUserInput" name='address' placeholder='Shabia 10 | Abudhabi' onChange={handleChange}/>
        </div>
        <div className="newUserItem">
            <label>Gender</label>  
            <div className="newUserGender">
            <input type="radio" className="newUserInput" name="gender" id="male" value="male" onChange={handleChange}/>
            <label for="male">Male</label>
            <input type="radio" className="newUserInput" name="gender" id="female" value="female" onChange={handleChange}/>
            <label for="female">Female</label>
            <input type="radio" className="newUserInput" name="gender" id="other" value="other" onChange={handleChange}/>
            <label for="other">Other</label>
            </div>      

        </div>
        <div className="newUserItem">
            <label>Admin</label>
            <select className='newUserSelect' name="isAdmin" id="active" onChange={handleChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>


      </form>
    </div>
    </div>
    </>
  )
}

export default NewUser
