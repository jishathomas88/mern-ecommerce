import React from 'react'
import '../topbar/Topbar.css'
import {LanguageOutlined, NotificationsNone, Settings} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="leftTopbar">
            <span className="logo">Jishaadmin</span>
        </div>
        <div className="rightTopbar">
          <div className="rightIconContainer">
            <NotificationsNone />
            <span className='rightIconBadge'>2</span>
          </div>
          <div className="rightIconContainer">
            <LanguageOutlined />
            <span className='rightIconBadge'>2</span>
          </div>
          <div className="rightIconContainer">
            <Settings />
            </div>
           <img src="https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" className="topAvatar" /> 
          
        </div>
      </div>
    </div>
  )
}

export default Topbar
