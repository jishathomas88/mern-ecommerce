import React, { useEffect, useState } from 'react'
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { userRequest } from '../../requestMethods'

function FeaturedInfo() {
  const [income,setIncome]=useState([])
  const [perc,setPerc]=useState(0)
  useEffect(()=>{
    const getIncome=async()=>{
      try{
        const res=await userRequest.get('order/income')
        setIncome(res.data[1].total)
        setPerc((res.data[1].total * 100) / res.data[0].total - 100)
            }catch{

      }
 
    }
   getIncome();
  },[])
  
  console.log(income)
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">${income}</span>
            <span className="featuredMoneyRate">% {Math.floor(perc)}{perc<0 ? <ArrowDownward className='featuredIcon negative'/> : <ArrowUpward className='featuredIcon'/>}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,145</span>
            <span className="featuredMoneyRate">-1.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2.225</span>
            <span className="featuredMoneyRate">+2.4<ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
