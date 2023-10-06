import React, { useEffect, useMemo, useState } from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { data } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { userRequest } from '../../requestMethods'
import { Navigate } from 'react-router'

function Home() {
  const [userStats,setUserStats]=useState([])
  const MONTHS=useMemo(
    ()=>[
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ] ,[]   
  );
  useEffect(()=>{
    const getUserStats=async()=>{
      try{
        const res=await userRequest.get('user/stats')
        res.data.map((item)=>{
        setUserStats(prev=>[
        ...prev,{name:MONTHS[item._id - 1] , "Activeuser" : item.totalUsers}

        ]
        )
        })

      }catch(error){
     
      }
    }
   getUserStats()
  },[MONTHS]);
  console.log(userStats)
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='homeContainer'>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" dataKey="Activeuser" grid/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
