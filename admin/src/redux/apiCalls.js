import { publicRequest, userRequest } from "../requestMethods"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess,updateProductStart,updateProductSuccess,updateProductFailure,addProductStart,addProductSuccess,addProductFailure } from "./productRedux"
import { loginStart, loginSuccess, loginError,getUserStart,getUserFailure,getUserSuccess,deleteUserStart,deleteUserFailure,deleteUserSuccess ,addUserStart,addUserSuccess,addUserFailure,updateUserStart,updateUserFailure,updateUserSuccess} from "./userRedux"

export const login=async (dispatch,user)=>{
    dispatch(loginStart())
    try{
    const res= await publicRequest.post('/auth/login',user)
    dispatch(loginSuccess(res.data))
    }catch(error){
     dispatch(loginError())
    }
}
 export const getProducts=async(dispatch)=>{
    dispatch(getProductStart())
    try{
        const res=await publicRequest.get('/product')
        dispatch(getProductSuccess(res.data))

    }catch(error){
        dispatch(getProductFailure())
    }
 }

 export const deleteProduct=async(dispatch,id)=>{
    dispatch(deleteProductStart())
    try{
        //const res=await userRequest.post(`/product/${id}`)
        dispatch(deleteProductSuccess(id))

    }catch(error){
        dispatch(deleteProductFailure())
    }
 }
 export const updateProduct=async(dispatch,id,product)=>{
    dispatch(updateProductStart())
    try{
        //update
        dispatch(updateProductSuccess({id,product}))

    }catch(error){
        dispatch(updateProductFailure())
    }
 }
 export const addProduct=async(dispatch,product)=>{
    dispatch(addProductStart())
    try{
        const res=await userRequest.post(`/product`,product)
        dispatch(addProductSuccess(res.data))

    }catch(error){
        dispatch(addProductFailure())
    }
 }
 //GET USERS
 export const getUsers=async(dispatch)=>{
    dispatch(getUserStart())
    try{
        const res=await userRequest.get('/user')
        dispatch(getUserSuccess(res.data))

    }catch(error){
        dispatch(getUserFailure())
    }
 }
 //DELETE USER
 export const deleteUser=async(dispatch,id)=>{
    dispatch(deleteUserStart())
    try{
        //const res=await userRequest.post(`/auth/${id}`)
        dispatch(deleteUserSuccess(id))

    }catch(error){
        dispatch(deleteUserFailure())
    }
 }
 //ADD USER
 export const addUser=async(dispatch,user)=>{
    dispatch(addUserStart())
    try{
        const res=await userRequest.post(`/auth/register`,user)
        dispatch(addUserSuccess(res.data))

    }catch(error){
        dispatch(addUserFailure())
    }
 }
 //UPDATE USER
 export const updateUser=async(dispatch,id,user)=>{
    dispatch(updateUserStart())
    try{
        //update
        dispatch(updateUserSuccess({id,user}))

    }catch(error){
        dispatch(updateUserFailure())
    }
 }