import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name : "user",
    initialState : {
        currentUser : null,
         isFetching : false,
         error : false
    },
    reducers : {
        loginStart : (state)=>{
         state.isFetching=true
         state.error=false
        },
        loginSuccess :(state,action)=>{
            state.isFetching =false
            state.currentUser=action.payload
            state.error=false
        },
        loginFailure :(state)=>{
            state.isFetching=false
            state.error=true
        },
        logoutStart : (state)=>{
            state.isFetching=true
            state.error=false
           },
           logoutSuccess :(state,action)=>{
               state.isFetching =false
               state.currentUser=null
               state.error=false
           },
           logoutFailure :(state)=>{
               state.isFetching=false
               state.error=true
           }
    }

});

export const {loginStart,loginSuccess,loginFailure,logoutStart,logoutFailure,logoutSuccess}=userSlice.actions
export default userSlice.reducer
