import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
    const user = Json.parse (localStorage.getItem("user"));
    return (user?.role==="admin"? children : <Navigate to="/PrincipalPage"/>);

}

export default AdminRoute; 