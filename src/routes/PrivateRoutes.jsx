import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../config/axios";

const PrivateRoute = ({children}) => {
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)
  const getAuth = async()=>{
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      if(!token){
        setLoading(false)
        return setUser(false);
      } 
      axiosBack.defaults.headers.common["authorization"]= token;
      // axiosInstance.defaults.headers.common['authorization'] = token;
      const {data}=await axiosBack.get("/users/authStatus")
      setUser(data.user)
      console.log(data.user);
      setLoading(false)
    } catch (error) {
      toast.error("error")
    }
    setLoading(false)
  }
  // Authorization
  useEffect(()=>{
    getAuth();
  }, [])
  console.log(user)
  return loading? <Spinner/> : !!user? children : <Navigate to="/LoginPage"/>;
}

export default PrivateRoute;