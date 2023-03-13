import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../../src/config/axios";
import { UserContext } from "../../src/context/UserContext";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../../src/index.css"

const AuthorizationPage = () => {
  const [state, setState] = useState([]);
  const [selected, setSelected] = useState("");
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      const { data } = await axiosBack.get("/users");
      setState(data.users);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  console.log(selected);

  const handleChangeCheckBox =(e)=>{
    setValues({
      ...values,
      state: e.target.checked
    });
  }


  const handleCheck =()=>{
    console.log("funcion para habilitar o deshabilitar");
  }

  return (
    <>

    <Container className=" autorizcontainer ">
      <Row>
        <Col className="styleContainer">
          {state.length !== 0 ? (
            <MDBTable  responsive className="mt-3 pt-1">
              <MDBTableHead>
                <tr>
                  <th className="stylecelda text-center p-1">Nombre</th>
                  <th className="stylecelda text-center p-1">Apellido</th>
                  <th className="stylecelda text-center p-1">Dni</th>
                  <th className="text-center stylecelda p-1">Habilitado</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {state?.map((x, index) => (
                  <tr
                    key={index}
                    onClick={()=>setSelected(x.dni)}
                    className={selected==x.dni? "rowSelected" :""}
                  >
                    <td className="stylecelda text-center p-1">{x.name}</td>
                    <td className="stylecelda text-center p-1">{x.lastname}</td>
                    <td className="stylecelda text-center p-1">{x.dni}</td>
                    <td className="stylecelda text-center p-1">
                      <Form.Group className=" d-flex justify-content-center mb-3" controlId="habilitadocheck">
                      <Form.Check name="state" checked={x.state}  type="checkbox"  />
                    </Form.Group>
                      {/* <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onClick={()=>handleCheck()} />
                      </Form.Group> */}
                    </td>
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
                      </>
  );
};

export default AuthorizationPage;
