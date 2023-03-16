import { useEffect, useState } from "react";
import { InputGroup, Table } from "react-bootstrap";
import axiosBack from "./../config/axios";
import "./../index.css"

const AuthorizPage = () => {
  const [state, setState] = useState([]);
  const getUsers =async()=>{
    try {
      const {data}= await axiosBack.get("/users");
      setState(data.users);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getUsers();
  },[])
    return (  
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Habilitación</th>
      </tr>
    </thead>
    <tbody>
      {state.map((user) => 
        <tr> 
          <td>{user.name}</td>
          <td>{user.lastname}</td>
          <td>{user.email}</td>
          <td>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup>
          </td>
        </tr>
      )}
    </tbody>
    </Table>
    );
}
    

 
export default AuthorizPage;