import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../config/axios";

const PrivateRoute = ({children}) => {
  const [user, setUser] = useState(false)
  const getAuth = async()=>{
    try {
      const token = localStorage.getItem("token");
      if(!token) return setUser(false);
      axiosBack.defaults.headers.common["authorization"]= token;
      // axiosInstance.defaults.headers.common['authorization'] = token;
      const {data}=await axiosBack.get("/users/authStatus")
      setUser(data.user)
    } catch (error) {
      toast.error("error")
    }
  }
  // Authorization
  useEffect(()=>{
    getAuth();
  }, [])
  console.log(user)
  return ( 
    !!user? children : <Navigate to="/LoginPage"/>
    );
}

export default PrivateRoute;