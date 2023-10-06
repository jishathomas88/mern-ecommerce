import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { DataGrid , GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../../dummyData';
import { Link, useSearchParams } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {
    const [data,setData]=useState(productRows)
    const products=useSelector(state=>state.product.products)
    const dispatch=useDispatch()
    useEffect(()=>{
     getProducts(dispatch)
    },[dispatch])
    
  
    const handleDelete=(id)=>{
        deleteProduct(dispatch,id)
       }  
       const columns= [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product',width: 200,renderCell : (params)=>{
          return (
           <div className='productListProduct'>
          <img src={params.row.img} alt=" " className='productListImg'></img>
          {params.row.title}
        </div>)
        }
        },
        
        {
          field: 'inStock',
          headerName: 'Stock', 
       
          width: 200,
        },
        
        {
            field: 'price',
            headerName: 'Price',          
            width: 100,
            
          },
          {
            field:'actions',
            headerName: 'Actions',
            width:150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={'/product/'+params.row._id}><button className="productListEdit">Edit</button></Link>
                <DeleteOutline onClick={()=>handleDelete(params.row._id)} className='productListDelete'/>
                </>
              )
            }
          }
      ];
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='productList'>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={rows=>rows._id}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
    </>
  )
}

export default ProductList
