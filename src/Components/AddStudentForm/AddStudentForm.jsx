import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { toast } from 'react-toastify';
// import { axiosBack } from '../../config/axios';

const AddStudentForm = ({handleClose, getStudents}) => {
  const [values, setValues] = useState(
    //Nombre	Role	Año de cursado	Cuota al dia
    //"id": "1245",
   // "name": "Agostina Mercado",
    //"role": "admin",
    //"añoCursado": "2°",
    //"EstadoCuota":"true"
    {
      id:"",
      name:"",
      role:"",
      añoCursado:"",
      estadoCuota:""
    }
  );
  const handleChange =(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit =async(e)=>{
    console.log("funcion agregando usuario")
    // e.preventDefault();
    // try {
    //   const userCreated = await axiosBack.post("/users", values);
    //   getUsers();
    //   //Uso los datos que devuelve el back para mostrar una confirmacion
    //   if(userCreated){
    //     toast.done("Usuario Creado")
    //   }
    // } catch (error) {
    //   toast.error("Error, intente nuevamente mas tarde")
    // }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu ID" name="id" value={values.id} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nombre del usuario</Form.Label>
        <Form.Control type="text" placeholder="Pepe" name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Ingrese el Role</Form.Label>
        <Form.Control type="text" placeholder="admin, user" name="role" value={values.role} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Ingrese el Año de Cursado</Form.Label>
        <Form.Control type="text"  name="añoCursado" value={values.añoCursado} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="text" name="estadoCuota" value={values.estadoCuota} onChange={handleChange}/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Crear usuario
      </Button>
    </Form>
  );
}

export default AddStudentForm;