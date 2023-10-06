import axios from 'axios'

const BASE_URL="http://localhost:5000/api/"

const root = JSON.parse(localStorage.getItem("persist:root"))
  const user=root ? JSON.parse(localStorage.getItem("persist:root")).user : false
  const currentUser= user ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser : false
  //const admin= user ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin : false

const TOKEN=currentUser ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken : false
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken) 

export const publicRequest=axios.create({
    baseURL:BASE_URL,
})

export const userRequest=axios.create({
baseURL:BASE_URL,
headers:{
    token : `Bearer ${TOKEN}`
}
})