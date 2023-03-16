import "./../../index.css"
import "./../LoginPage/LoginPage.css"
import {Container, Row, Col, Form, Button, FloatingLabel} from "react-bootstrap";
import {  useContext, useEffect, useState } from "react";
// import GeneralModal from "../../src/Components/GeneralModal/GeneralModal";
// import FormRegister from "../../src/Components/FormRegister/FormRegister";
// import axiosBack from "../../src/config/axios";
import { UserContext } from "./../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { validationLogin } from "./../../helpers/validations";
// import Buttonmu from '@mui/material/Button';
import { toast, ToastContainer} from "react-toastify";
import { FaExclamationTriangle, FaUserAlt } from "react-icons/fa";



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
        toast.done("Ingreso Correcto")
      }
      setSubmitting(false);
      setTimeout(()=>{
        setErrors({});
      },5000)
      }
    }, [errors])

  useEffect(()=>{
    if(authenticated){
      navigate("/PrincipalPage");
        }
  }, [authenticated])
  return (
    <>
    <div className="stylecontainer pb-3 mb-3">
    <h1 className="text-center mt-3 ">Bienvenido</h1>  <p className="styleTitle1 text-center">Inicia Sesión <FaUserAlt className="sizeicon" /> </p> 
    <Container className="" > 
      <Row className="table d-flex justify-content-center mx-2 px-2 ">
        <Col   md={6} xs={12} className="formCotainer style-form-login   d-flex justify-content-center" >
            <Form className="styleForm" onSubmit={handleSubmit}>
                    <FloatingLabel className=" p-1 "  label="Ingresa tu email" controlId="userEmail">
                    <Form.Label></Form.Label>
                    <Form.Control className="class-input" type="email" placeholder="Ingresa tu Email"  name="email" value={values.email} onChange={handleChanges}/>
                  </FloatingLabel>
                  <FloatingLabel className="mb-1 p-1" controlId="userPassword" label="Ingresa tu contraseña">
                    <Form.Label></Form.Label>
                    <Form.Control className="class-input" type="password"  placeholder="Ingresa tu contraseña" name="password" value={values.password} onChange={handleChanges} />
                  </FloatingLabel>
                  <FloatingLabel className="mb-1 " controlId="check-guardarUsuario" >
                    <Form.Check type="checkbox" label="Recordar" />
                  </FloatingLabel>
                  <Button className="my-1 mb-2 w-100 buttonlogin " type="submit">
                    Ingresar
                  </Button>
                
                {
                  Object.keys(errors).length!==0 && (
                    Object.values(errors).map(error=>
                      <p className="errorStyle mx-1 px-1 "><FaExclamationTriangle /> {error}</p>
                      )
                      )
                    }
                  
            </Form>  
        </Col>      
      </Row> 
      <ToastContainer/>
    </Container>
  </div>
    </>

  );
}

export default LoginPage;