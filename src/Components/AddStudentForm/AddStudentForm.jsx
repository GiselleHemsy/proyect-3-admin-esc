import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { toast } from 'react-toastify';
// import { axiosBack } from '../../config/axios';

const AddStudentForm = ({handleClose, getStudents}) => {
  const [values, setValues] = useState(
    {
      expediente:"",
      name:"",
      lastname:"",
      course:"",
      cuota:""
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
    e.preventDefault();
    try {
      const userCreated = await axiosBack.post("/students", {values});
      getStudents();
      //Uso los datos que devuelve el back para mostrar una confirmacion
      if(userCreated){
        toast.done("Usuario Creado")
      }
    } catch (error) {
      toast.error("Error, intente nuevamente mas tarde")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>Id/Expediente</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu ID" name="expediente" value={values.expendiente} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Ingrese el nombre</Form.Label>
        <Form.Control type="text" placeholder="Pepe" name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userLastname">
        <Form.Label>Ingrese el Apellido</Form.Label>
        <Form.Control type="text"  name="lastname" value={values.lastname} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userCourse">
        <Form.Label>Ingrese el Año de Cursado</Form.Label>
        <Form.Control type="text"  name="course" value={values.course} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userCuota">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="boolean" name="cuota" value={values.cuota} onChange={handleChange}/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Crear usuario
      </Button>
    </Form>
  );
}

export default AddStudentForm;