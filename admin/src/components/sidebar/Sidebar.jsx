import React from 'react'
import './Sidebar.css'
import { AttachMoneyOutlined, BarChartOutlined, ChatBubbleOutline, DynamicFeedOutlined, Inventory, LineStyle, MailLockOutlined, NewReleasesOutlined, Paid, PaidOutlined, Person2Outlined, Timeline, TrendingUp, WorkOffOutlined, WorkOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className='sidebarList'>
                <Link to='/' className='link'>
                <li className='sidebarListItem active'>
                    <LineStyle className='sidebarIcon'/>
                    Home
                </li>
                </Link>
                <li className='sidebarListItem'>
                    <Timeline  className='sidebarIcon' />
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <TrendingUp className='sidebarIcon' />
                    Sales
                </li>
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className='sidebarList'>
                <Link to={'/users'} className='link'>
                <li className='sidebarListItem active'>
                    <Person2Outlined className='sidebarIcon'/>
                    Users
                </li>
                </Link>
                <Link to={'/products'} className='link'>
                <li className='sidebarListItem'>
                    <Inventory  className='sidebarIcon' />
                    Products
                </li>
                </Link>
                
                <li className='sidebarListItem'>
                    <AttachMoneyOutlined className='sidebarIcon' />
                    Transactions
                </li>
                <li className='sidebarListItem'>
                    <BarChartOutlined className='sidebarIcon' />
                    Reports
                </li>
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem active'>
                    <MailLockOutlined className='sidebarIcon'/>
                    Mail
                </li>
                <li className='sidebarListItem'>
                    <DynamicFeedOutlined  className='sidebarIcon' />
                    Feedback
                </li>
                <li className='sidebarListItem'>
                    <ChatBubbleOutline className='sidebarIcon' />
                    Messages
                </li>
            </ul>

        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className='sidebarList'>
                <li className='sidebarListItem active'>
                    <WorkOutline className='sidebarIcon'/>
                    Manage
                </li>
                <li className='sidebarListItem'>
                    <Timeline  className='sidebarIcon' />
                    Analytics
                </li>
                <li className='sidebarListItem'>
                    <NewReleasesOutlined className='sidebarIcon' />
                    Reports
                </li>
            </ul>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
