import { useState , useEffect } from "react";
import { Route , Routes } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home/Home.jsx"
import './App.css';
import UserDetails from "./Pages/UserDetails/UserDetails.jsx";



function App() {

  const [users , setUsers] = useState([])
  const [loadUsers , setLoadUsers] = useState(true)

  const getUsers = ()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      setUsers(res.data)
      setLoadUsers(false)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getUsers()
  },[])


  return (
    <div style={{backgroundColor:"#56D90F"}}>
      <Routes>
        <Route path="/" element={<Home users={users} loadUsers={loadUsers} />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />

      </Routes>
    </div>
  );
}

export default App;
