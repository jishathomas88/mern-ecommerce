import React, { useEffect, useMemo, useState } from 'react'
import './Product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods'
function Product() {
    const [pstat,setPStat]=useState([])
    const location=useLocation();
    const productId=location.pathname.split('/')[2]
    const product=useSelector(
        state=>state.product.products.find(product=>product._id===productId)
        )

        const MONTHS=useMemo(()=>[
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
        
        ],[])
    //console.log(product)
    
   useEffect(()=>{
    const getStat=async ()=>{
        try{
            const res=await userRequest.get('/order/income?pid='+productId)
             res.data.map(item=>
                setPStat((prev)=>[
                ...prev,{name:MONTHS[item._id - 1 ],sales:item.total}
                ])) 
        }catch{

        }
    }
    getStat()
   },[MONTHS])
   console.log(pstat)
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='product'>
        <div className="productTitleContainer">
            <h3 className="productTitle">Product</h3>
            <Link to='/newProduct'>
            <button className="productCreateButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={pstat} dataKey="sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={product.img} alt="" className="productInfoImg" />
                    <span className="productName">{product.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="ProductInfoValue">{product._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="ProductInfoValue">5123</span>
                    </div>
                   
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="ProductInfoValue">{product.inStock}</span>
                    </div>

                </div>
            </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder={product.title}></input>
                    <label>Product Description</label>
                    <input type="text" placeholder={product.desc}></input>
                    <label>Price</label>
                    <input type="text" placeholder={product.price}></input>
                    
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    

                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={product.img} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish ></Publish>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}></input>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Product

