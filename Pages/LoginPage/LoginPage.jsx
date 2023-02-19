import "../../src/index.css"
import "../LoginPage/LoginPage.css"
import {Container, Row, Col, Form} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import GeneralModal from "../../src/Components/GeneralModal/GeneralModal";
import FormRegister from "../../src/Components/FormRegister/FormRegister";

const LoginPage = () => {
  const [formResults, setFormResults] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const handleChanges =(e)=>{
    setValues({
      ...values,   //Uso spread operator para modificar solo el campo seleccionado y conservar los valores en los otros
      [e.target.name]:e.target.value
    }
      )
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormResults(values);
    console.log(formResults);
  }
  return (
    <>
    <h1 className="text-center my-5">AlUMNCLICK <br /> Sofware de Gestion Escolar </h1>
    <Container className="style-form-login" > 
      <Row>
        <Col  xs={12} className=" d-flex flex-column" >
            <Form className="border my-3" onSubmit={handleSubmit}>
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
                  <Button className="my-1"variant="primary" type="submit">
                    Ingresar
                  </Button>
                  <GeneralModal buttonText="Crear una cuenta" modalTitle="Formulario de Alta" modalBody={<FormRegister/>} variant="secondary" /> 
                
                  
            </Form>           
        </Col>      
      </Row> 
    </Container>
    </>

  );
}

export default LoginPage;