import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import  axiosBack  from '../../config/axios';
import 'react-toastify/dist/ReactToastify.css'
import { validationAddForm } from '../../helpers/validations';
import { FaExclamationTriangle } from "react-icons/fa";
import "../../index.css"

const AddStudentForm = ({handleClose, getStudents, courses}) => {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
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
  const addStudent =async()=>{
    
    try {
      const userCreated = await axiosBack.post("/students", values);
      getStudents();
      toast.success(`Estudiante agregado con éxito. Bievenido ${values.name}`);
    } catch (error) {
      toast.error("Error, intente nuevamente mas tarde")
    }
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    setErrors(validationAddForm(values));
    setSubmitting(true)
  }
  useEffect(()=>{
    if (submitting){
      if (Object.keys(errors).length === 0) {
        addStudent();
        handleClose();
    }
    setSubmitting(false);
    setTimeout(()=>{
      setErrors({});
    },3000)
    }
  }, [errors])
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
      <Form.Select className="my-2" aria-label="Default select example"  value={values.course._id} onChange={handleChange} name="course"  >
      <option>Seleccione el Año de Cursado</option>
      {
        courses.map((course)=>
        <option key={course._id} value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
      <Form.Group className="mb-3" controlId="formCuota">
        <Form.Check name="cuota" checked={values.cuota} onChange={handleChangeCheckBox} type="checkbox" label="Cuota al dia" />
      </Form.Group>
      <Button variant="success" type="submit" >
        Crear usuario
      </Button>
      {
                  Object.keys(errors).length!==0 && (
                    Object.values(errors).map(error=>
                      <p className="errorStyle mx-1 px-1 "><FaExclamationTriangle /> {error}</p>
                      )
                  )
                }
    </Form>
    <ToastContainer/>
      </>
    
  );
}

export default AddStudentForm;