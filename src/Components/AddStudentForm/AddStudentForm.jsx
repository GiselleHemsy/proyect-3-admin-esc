import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import  axiosBack  from '../../config/axios';

const AddStudentForm = ({handleClose, getStudents, courses}) => {
  


  const [values, setValues] = useState(
    {
      name:"",
      lastname:"",
      expediente: "",
      dni:"",
      age:"",
      email:"",
      cel:"",
      course:"",
      cuota: false
    }
  );
  const handleChange =(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }
  
  const handleChangeCheckBox =(e)=>{
    setValues({
      ...values,
      cuota: e.target.checked
    });
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      console.log(values)
      const userCreated = await axiosBack.post("/students", values);
      getStudents();
      //Uso los datos que devuelve el back para mostrar una confirmacion
      if(userCreated){
        toast.done("Usuario Creado")
      }
    } catch (error) {
      toast.error("Error, intente nuevamente mas tarde")
    }
  }
  console.log("values:",values);
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Ingrese el nombre</Form.Label>
        <Form.Control type="text"  name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userLastname">
        <Form.Label>Ingrese el Apellido</Form.Label>
        <Form.Control type="text"  name="lastname" value={values.lastname} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>Id/Expediente</Form.Label>
        <Form.Control type="number" placeholder="Ingresa tu ID" name="expediente" value={values.expediente} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="userdni">
        <Form.Label>Ingrese el dni</Form.Label>
        <Form.Control type="number"  name="dni" value={values.dni} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userAge">
        <Form.Label>Ingrese la edad</Form.Label>
        <Form.Control type="number"  name="age" value={parseInt(values.age)} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Ingrese el Email</Form.Label>
        <Form.Control type="email"  name="email" value={values.email} onChange={handleChange}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="usercel">
        <Form.Label>Ingrese el celular</Form.Label>
        <Form.Control type="number"  name="cel" value={values.cel} onChange={handleChange}/>
      </Form.Group>
      
      {/* <Form.Group className="mb-3" controlId="userCourse">
        <Form.Label>Ingrese el Año de Cursado</Form.Label>
        <Form.Control type="text"  name="course" value={values.course} onChange={handleChange}/>
      </Form.Group> */}
      <Form.Select className="my-2" aria-label="Default select example"  value={values.course._id} onChange={handleChange} name="course"  >
      <option>Seleccione el Año de Cursado</option>
      {
        courses.map((course)=>
        <option key={course._id} value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
      {/* <Form.Group className="mb-3" controlId="userCuota">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="boolean" name="cuota" value={values.cuota} onChange={handleChange}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formCuota">
        <Form.Check name="cuota" checked={values.cuota} onChange={handleChangeCheckBox} type="checkbox" label="Cuota al dia" />
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Crear usuario
      </Button>
    </Form>
      <ToastContainer/>
    
      </>
    
  );
}

export default AddStudentForm;