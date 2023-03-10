import { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Row, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosBack from "../../src/config/axios";
import { UserContext } from "../../src/context/UserContext";

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
    <Container>
      <Row>
        <Col className="styleContainer">
          {state.length !== 0 ? (
            <Table responsive className="mt-3">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Dni</th>
                  <th className="text-center">Habilitado</th>
                </tr>
              </thead>
              <tbody>
                {state?.map((x, index) => (
                  <tr
                    key={index}
                    onClick={()=>setSelected(x.dni)}
                    className={selected==x.dni? "rowSelected" :""}
                  >
                    <td>{x.name}</td>
                    <td>{x.lastname}</td>
                    <td>{x.dni}</td>
                    <td>
                    <Form.Group className=" d-flex justify-content-center mb-3" controlId="habilitadocheck">
                      <Form.Check name="state" checked={x.state}  type="checkbox"  />
                    </Form.Group>
                      {/* <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" onClick={()=>handleCheck()} />
                      </Form.Group> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>
              <Spinner animation="border" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorizationPage;
