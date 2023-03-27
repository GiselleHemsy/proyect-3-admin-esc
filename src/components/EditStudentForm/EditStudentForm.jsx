import { useEffect, useState } from "react";
import {  Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";
import { validationAddForm } from "../../helpers/validations";
import { FaExclamationTriangle } from "react-icons/fa";
import "../../index.css"

const EditStudentForm = ({selected, handleClose, getStudents, courses}) => {
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
      cuota: ""
    }
  );



  const handleChange =(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const getUserInfo=async()=>{
    try {
      const {data} = await axiosBack.get(`/students/email/${selected}`); 
      setValues(data.student);
    } catch (error) {
      toast.error("Error intente nuevamente mas tarde")
    }
  }
  
  const editStudent =async()=>{
    try {
      await axiosBack.put('/students/',{email: selected, fields:values});
      getStudents();
      toast.success(`Los datos del estudiante se actualizaron de forma correcta`);
    } catch (error) {
      {
      toast.error("Error al intentar actualizar los datos, reintente mas tarde")
    }}
  }
  const handleSubmit =(e) =>{
    e.preventDefault();
    setErrors(validationAddForm(values));
    setSubmitting(true)
  }
  useEffect(()=>{
    if (submitting){
      if (Object.keys(errors).length === 0) {
        editStudent();
        handleClose();
    }
    setSubmitting(false);
    setTimeout(()=>{
      setErrors({});
    },3000)
    }
  }, [errors])


useEffect(()=>{
  getUserInfo();
},[])
const handleChangeCheckBox =(e)=>{
  setValues({
    ...values,
    cuota: e.target.checked
  });
}

const handleChangeSelected =(e)=>{
  const selectedCourse = courses.find(x=>x._id===e.target.value)
  setValues({
    ...values,
    course: selectedCourse
  })};

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Ingrese el nombre</Form.Label>
        <Form.Control type="text"  name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userLastname">
        <Form.Label>Ingrese el apellido</Form.Label>
        <Form.Control type="text"  name="lastname" value={values.lastname} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userExpediente">
        <Form.Label>Id/Expediente</Form.Label>
        <Form.Control type="number"  name="expediente" value={values.expediente} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="userdni">
        <Form.Label>Ingrese el dni</Form.Label>
        <Form.Control type="number"  name="dni" value={values.dni} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userAge">
        <Form.Label>Ingrese la edad</Form.Label>
        <Form.Control type="number"  name="age" value={values.age} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Ingrese el Email</Form.Label>
        <Form.Control type="email"  name="email" value={values.email} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="usercel">
        <Form.Label>Ingrese el celular</Form.Label>
        <Form.Control type="number"  name="cel" value={values.cel} onChange={handleChange}/>
      </Form.Group>
      <Form.Select value={values.course._id} aria-label="Default select example" name="course" onChange={handleChangeSelected}  >
      <Form.Label>Seleccione el Año de Cursado</Form.Label> 
      {
        courses.map((course)=>
        <option key={course._id}   value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
      <Form.Group className="mb-3" controlId="formCuota">
        <Form.Check name="cuota" checked={values.cuota} onChange={handleChangeCheckBox} type="checkbox" label="Cuota al dia" />
      </Form.Group>
      <Button variant="success" type="submit" >
        Confirmar
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

export default EditStudentForm;