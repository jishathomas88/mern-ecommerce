import React, { useState } from 'react'
import './NewProduct.css'
import { Publish } from '@mui/icons-material'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import {addProduct} from '../../redux/apiCalls'
import { useDispatch } from 'react-redux'

function NewProduct() {
  const [file,setFile]=useState("")
  const [inputs,setInputs]=useState({})
  const [cat,setCat]=useState([])
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setInputs((prev)=>{
    return {...prev,[e.target.name]:e.target.value}
    })
  }
  const handleCat=(e)=>{
    setCat(e.target.value.split(','))
  }
  const handleClick=async (e)=>{
    e.preventDefault();
    const fileName=new Date().getTime() + file.name;
    const storage=getStorage(app);
   
    const storageRef=ref(storage,fileName)

    const uploadTask = uploadBytesResumable(storageRef, file);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      
      const product={...inputs,img:downloadURL,categories:cat}
      addProduct(dispatch,product)
    });
  }
);

  }
// console.log(inputs)
// console.log(cat)
 //console.log(file)
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
    }}>
        <Sidebar /> 
    <div className='newProduct'>
      <h1 className="productTitle">New Product</h1>
      
      <form action="" className="addproductForm">
      <div className="addproductFormItem">                   
                    
         <label htmlFor="file">Image </label>
          <input type="file" id="file" onChange={(e)=>setFile(e.target.files[0])} ></input>
                
                </div>
                    <div className="addproductFormItem">
                    <label>Product Name</label>
                    <input name="title" type="text" placeholder='Apple airpod' onChange={handleChange}></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Description</label>
                    <input name="desc" type="text" placeholder='Description...' onChange={handleChange}></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Price</label>
                    <input name="price" type='number' placeholder='100' onChange={handleChange}></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Categories</label>
                    <input type="text" placeholder='Jeans,Skirts' onChange={handleCat}></input>
                    </div>
                    <div className="addproductFormItem">
                    <label>Stock</label>
                    <select name="inStock" onChange={handleChange}>
                      <option value='true'>Yes</option>
                      <option value='false'>No</option>
                    </select>
                    </div>
                                       
                    <button className="addproductButton" onClick={handleClick}>Create</button>
                
            </form>

    </div>
    </div>
    </>
  )
}

export default NewProduct
