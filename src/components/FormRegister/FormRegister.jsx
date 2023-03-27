import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormRegister = () => {
  const [valuesUser, setValuesUser] = useState(
    {
      name:"",
      email:"",
      password:""
    }
  )
  const handleChanges=(e)=>{
    setValuesUser({
    ...valuesUser,
    [e.target.name]:e.target.value
    }
    )
  }
  const loginUser =(e)=>{
    e.preventDefault();
  }
  return ( 
    <Form onSubmit={loginUser} >
                  <Form.Group className=" "  controlId="NameRegister">
                    <Form.Label>Ingresa tu Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Juan"  name="name" value={valuesUser.name} onChange={handleChanges} />
                  </Form.Group>
                  <Form.Group className=" "  controlId="EmailRegister">
                    <Form.Label>Ingresa tu Email</Form.Label>
                    <Form.Control type="email" placeholder="xxxxx@xxxx.xx"  name="email" value={valuesUser.email} onChange={handleChanges} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="PasswordRegister">
                    <Form.Label>Ingresa tu contraseña</Form.Label>
                    <Form.Control type="password" placeholder="xxxxx" name="password"  value={valuesUser.password} onChange={handleChanges}/>
                  </Form.Group>
                  
                <br />
                  <Button variant="primary" type="submit">
                    Registrar
                  </Button>
            </Form>    
    );
}

export default FormRegister;