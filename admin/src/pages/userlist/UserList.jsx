import React, { useEffect, useState } from 'react'
import './UserList.css'
import { DataGrid , GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { getUsers,deleteUser } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

function UserList() {
  const [data,setData]=useState(userRows)
  const dispatch=useDispatch();
  const users=useSelector((state)=>state.user.users)

  useEffect(()=>{
   getUsers(dispatch)
  },[dispatch])

  
  
    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'user', headerName: 'User',width: 200,renderCell : (params)=>{
          return (
           <div className='userListUser'>
          <img src={params.row.img ? params.row.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt=" " className='userListImg'></img>
          {params.row.username}
        </div>)
        }
        },
        
        {
          field: 'email',
          headerName: 'Email', 
       
          width: 200,
        },
        {
          field: 'isAdmin',
          headerName: 'Admin',          
          width: 100,
          
        },
        
          {
            field:'actions',
            headerName: 'Actions',
            width:150,
            renderCell:(params)=>{
              return(
                <>
                <Link to={'/user/'+params.row._id}><button className="userListEdit">Edit</button></Link>
                <DeleteOutline onClick={()=>handleDelete(params.row._id)} className='userListDelete'/>
                </>
              )
            }
          }
      ];
      
   const handleDelete=(id)=>{
    deleteUser(dispatch,id)
   }  
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    
    <div className='userList'>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={row=>row._id}
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

export default UserList
