import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../config/axios";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated]=useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login= async(values)=>{
    try {
        const {data}= await axiosBack.post("/users/login", values);
        setAuthenticated(!!data.user);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        toast.success("Ingreso correcto");  
    } catch (error) {
      if (error.response.status===401) {toast.error("Ups! No tenes permisos")}
      else{
      toast.error("Ups! Hubo un error, intenta nuevamente mas tarde");}
    }
  }

  const getAuth = async()=>{
    try {
      const token = localStorage.getItem("token");
      if(!token){
        setLoading(false)
        return setAuthenticated(false);
      } 
      axiosBack.defaults.headers.common["authorization"]= token;
      const {data}=await axiosBack.get("/users/authStatus")
      setUser(data.user)
      setAuthenticated(true)
    } catch (error) {
      toast.error("error")
    }
    setLoading(false)
  }
  const logout=()=>{
    setUser(null);
    localStorage.removeItem("token");
    navigate("/LoginPage")
  }
    return(

  <UserContext.Provider value={{
    user,
    authenticated,
    loading,
    login,
    getAuth,
    logout
    }}>
    {children}
  </UserContext.Provider>
  )
}
export default UserProvider;