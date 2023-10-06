import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './App.css'
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  
} from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import SectionLayout from "./components/sectionLayout/SectionLayout";
function App() {
  const root = JSON.parse(localStorage.getItem("persist:root"))
  const user=root ? JSON.parse(localStorage.getItem("persist:root")).user : false
  const currentUser= user ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser : false

  const admin= currentUser ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin : false
  //const admin=JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
 // console.log(localStorage.getItem("persist:root").user)
 //console.log(root)
 console.log(currentUser)
 //console.log(admin)
  return (
    <>
    <Router>
     <Routes>
     <Route path="/login" exact element={admin ? <Navigate to='/' ></Navigate> : <Login />}></Route>
     {
     admin && (
      <>
    
      
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
          <Route path="/newUser" element={<NewUser />}></Route>

          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/newProduct" element={<NewProduct />}></Route>
          
          </>     
          )
}
          </Routes>
          
        
     </Router>
     </>
    
  );
}

export default App;
