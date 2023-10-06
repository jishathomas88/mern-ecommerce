import React from "react";
import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name: "user",
    initialState:{
        isFetching : false,
        users:[],
        currentUser : null,
        error : false
    },
    reducers:{
      
      loginStart:(state)=>{
        state.isFetching=true;
      },
      loginSuccess:(state,action)=>{
      state.isFetching=false;
       state.currentUser=action.payload;
      state.error=false
      },
      loginError:(state)=>{
        state.isFetching=false;
        state.error=true;

      },
      //GET ALL USERS
      getUserStart:(state)=>{
        state.isFetching=true;
        state.error = false;
    },
    getUserSuccess:(state,action)=>{
        state.users=action.payload;
        state.isFetching=false;
        state.error=false;
    },
    getUserFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
    },
    //DELETE USER
    deleteUserStart:(state)=>{
      state.isFetching=true;
      state.error = false;
  },
  deleteUserSuccess:(state,action)=>{
      state.users.splice(
         state.users.findIndex(item=>item._id===action.payload),
         1 
      );
      state.isFetching=false;
      state.error=false;
  },
  deleteUserFailure:(state)=>{
      state.isFetching=false;
      state.error=true;
  },
  //ADD USER
  addUserStart:(state)=>{
    state.isFetching=true;
    state.error = false;
},
addUserSuccess:(state,action)=>{
    state.users.push(action.payload)
    state.isFetching=false;
    state.error=false;
},
addUserFailure:(state)=>{
    state.isFetching=false;
    state.error=true;
},
//UPDATE USER
updateUserStart:(state)=>{
  state.isFetching=true;
  state.error = false;
},
updateUserSuccess:(state,action)=>{
  state.users[state.users.findIndex((item)=>item._id===action.payload.id)]=action.payload.product
  state.isFetching=false;
  state.error=false;
},
updateProductFailure:(state)=>{
  state.isFetching=false;
  state.error=true;
},
    
      

    }
})

export const {loginStart,
  loginSuccess,
  loginError,
  getUserStart,
  getUserFailure,
  getUserSuccess,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  addUserStart,
  addUserFailure,
  addUserSuccess,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess
  
}=userSlice.actions
export default userSlice.reducer