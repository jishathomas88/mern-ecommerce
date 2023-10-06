import React, { useState } from 'react'
import './User.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/apiCalls'

function User() {
    const location=useLocation();
    const dispatch=useDispatch();
    const userId=location.pathname.split('/')[2];
    const users=useSelector(state=>state.user.users)
    const user=users.find((item)=>item._id===userId)
    const [inputs,setInputs]=useState({})
    
    const handleChange=(e)=>{
        setInputs((prev)=>{
            return ({...prev,[e.target.name]:e.target.value})
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
       // updateUser(dispatch,userId,inputs)

    }
    console.log(inputs)

  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='user'>
        <div className="userTitleContainer">
            <h3 className="userTitle">Edit User</h3>
            <Link to='/newUser'>
            <button className="userCreateButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" alt="" className="userShowTopImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">{user.username}</span>
                        <span className="userShowTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'></PermIdentity>
                        <span className="userShowInfoTitle">{user.username}</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'></CalendarToday>
                        <span className="userShowInfoTitle">{user.createdAt}</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'></PhoneAndroid>
                        <span className="userShowInfoTitle">{user.phone}</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'></MailOutline>
                        <span className="userShowInfoTitle">{user.email}</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'></LocationSearching>
                        <span className="userShowInfoTitle">{user.address}</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                      
                      <div className="userUpdateItem">
                        <label>Username</label>
                        <input 
                        type="text" 
                        name='username'
                        className="userUpdateInput"
                        onChange={handleChange}
                         placeholder={user.username} />
                      </div>
                      <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input 
                        type="text" 
                        name='fullName'
                        className="userUpdateInput"
                        onChange={handleChange}
                         placeholder={user.fullName} />
                      </div>
                      <div className="userUpdateItem">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name='email'
                        className="userUpdateInput"
                        onChange={handleChange}
                         placeholder={user.email} />
                      </div>
                      <div className="userUpdateItem">
                        <label>Phone</label>
                        <input 
                        type="text" 
                        name='phone'
                        className="userUpdateInput"
                        onChange={handleChange}
                         placeholder={user.phone} />
                      </div>
                      <div className="userUpdateItem">
                        <label>Address</label>
                        <input 
                        type="text" 
                        name='address'
                        className="userUpdateInput"
                        onChange={handleChange}
                         placeholder={user.address} />
                      </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" alt="" className="userUpdateImg" />
                            <label htmlFor='file'><Publish className='userUpdateIcon'/> </label>
                            <input type="file" id="file" style={{display:"none"}}></input>
                       </div>
                       <button className="userUpdateButton" onClick={handleClick}>Update</button>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default User
