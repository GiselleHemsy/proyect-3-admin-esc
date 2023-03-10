import "../../src/index.css"
import "../LoginPage/LoginPage.css"
import {Container, Row, Col, Form, Alert} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {  useContext, useEffect, useState } from "react";
// import GeneralModal from "../../src/Components/GeneralModal/GeneralModal";
// import FormRegister from "../../src/Components/FormRegister/FormRegister";
// import axiosBack from "../../src/config/axios";
import { UserContext } from "../../src/context/UserContext";
import { useNavigate } from "react-router-dom";
import { validationLogin } from "../../src/helpers/validations";
import Buttonmu from '@mui/material/Button';


const LoginPage = () => {
  const {login, authenticated} = useContext(UserContext)
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const handleChanges =(e)=>{
    setValues({
      ...values,   //Uso spread operator para modificar solo el campo seleccionado y conservar los valores en los otros
      [e.target.name]:e.target.value
    }
      )
  }
  const handleSubmit =(e) =>{
      e.preventDefault();
      setErrors(validationLogin(values));
      setSubmitting(true)
    }
    useEffect(()=>{
      if (submitting){
        if (Object.keys(errors).length === 0) {
        login(values);
      }
      setSubmitting(false);
      setTimeout(()=>{
        setErrors({});
      },3000)
      }
    }, [errors])

  useEffect(()=>{
    if(authenticated){
      navigate("/home")
    }
  }, [authenticated])
  return (
    <>
    <h1 className="text-center mt-5 styleTitle">AlUMNCLICK <br /> Gestión Escolar </h1>
    <Container className="" > 
      <Row className="table d-flex justify-content-center mx-2 px-2 mb-5 ">
        <Col   md={6} xs={12} className="formCotainer style-form-login mx-2 mb-5 d-flex justify-content-center" >
            <Form className="styleForm" onSubmit={handleSubmit}>
                  <Form.Group className=" bg-fondo-principal "  controlId="userEmail">
                    <Form.Label>Ingresa tu Email</Form.Label>
                    <Form.Control type="email" placeholder="xxxxx@xxxx.xx"  name="email" value={values.email} onChange={handleChanges}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="userPassword">
                    <Form.Label>Ingresa tu contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChanges} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="check-guardarUsuario">
                    <Form.Check type="checkbox" label="Recordar" />
                  </Form.Group>
                  <Buttonmu className="my-1"variant="outlined" type="submit">
                    Ingresar
                  </Buttonmu>
                
                {
                  Object.keys(errors).length!==0 && (
                    Object.values(errors).map(error=>
                      <Alert variant="danger">{error}</Alert>
                      )
                  )
                }
                  
            </Form>  
        </Col>      
      </Row> 
    </Container>
    </>

  );
}

export default LoginPage;