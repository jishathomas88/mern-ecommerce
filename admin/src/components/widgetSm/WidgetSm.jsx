import React, { useEffect, useState } from 'react'
import './WidgetSm.css'
import { Visibility } from '@mui/icons-material'
import { userRequest } from '../../requestMethods'

function WidgetSm() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
    const getUsers=async()=>{
        try{
            const res=await userRequest.get('user?new=true')
            setUsers(res.data)

        }catch{

        }

    }
    getUsers()
    },[])
  return (
    <div className='widgetSm'>
     <span className="widgetSmTitle">New Join Members</span>
     <ul className="widgetSmList">
        {
        users.map(user=>
            (
            <li className="widgetSmListItem" key={user._id}>
            <img src={user.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} className='widgetSmImg'></img>
            <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
                
            </div>
            <buttton className="widgetSmButton">
                <Visibility className='widgetSmIcon'/> Display
            </buttton>
    
        </li>

        ))}
    
     </ul>
      
    </div>
  )
}

export default WidgetSm
