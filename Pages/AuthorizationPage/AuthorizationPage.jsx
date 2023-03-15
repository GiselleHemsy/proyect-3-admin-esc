import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../../src/config/axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../../src/index.css"
import { UserContext } from "../../src/context/UserContext";

const AuthorizationPage = () => {
  const {user} = useContext(UserContext)
  
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  //* funcion para traer los usuarios
  const getUsers = async () => {
    try {
      const { data } = await axiosBack.get("/users");
      setUsers(data.users);
    } catch (error) {
      toast.error(error.message);
    }
  };
  //*Cuando cargo el componente traigo los users
  useEffect(() => {
    getUsers();
  }, []);



  //*funcion para manipular el checkbok
  const handleChangeCheckBox =async(id, state)=>{
    try {
          await axiosBack.put("/users",{id,fields:{state:!state}} );
              getUsers();
          } catch (error) {
              toast.error("Error en la deshabilitación, reintente")
          }
  }


  

  return (
    <>
    {user?.admin?
    <Container className=" autorizcontainer ">
      <h4 className="text-center mt-2" >HABILITACIÓN DE USUARIOS</h4>
      <Row>
        <Col className="styleContainer">
          {users.length !== 0 ? (
            <MDBTable  responsive className="">
              <MDBTableHead>
                <tr>
                  <th className="stylecelda text-center p-1">Nombre</th>
                  <th className="stylecelda text-center p-1">Apellido</th>
                  <th className="stylecelda text-center p-1">Dni</th>
                  <th className="text-center stylecelda p-1">Habilitado</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {users?.map((x, index) => (
                  <tr
                    key={index}
                  >
                    <td className="stylecelda text-center p-1">{x.name}</td>
                    <td className="stylecelda text-center p-1">{x.lastname}</td>
                    <td className="stylecelda text-center p-1">{x.dni}</td>
                    <td className="stylecelda text-center p-1">
                      <Form.Group className=" d-flex justify-content-center" controlId="habilitadocheck">
                        <Form.Check name="state" checked={x.state}  type="checkbox" onChange={()=>{handleChangeCheckBox(x._id, x.state)}}/>
                      </Form.Group></td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          ) : (
            <div>
              <Spinner animation="border" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
    :
    navigate("/PrincipalPage")}
  </>
  );
};

export default AuthorizationPage;
