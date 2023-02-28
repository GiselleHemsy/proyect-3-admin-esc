import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import  axiosBack  from '../../config/axios';


const AddCourseForm = () =>{
const [courses, setCourses] = useState([]);
const [values, setValues] = useState(
  {
    name:""
  }
);

const handleChange =(e)=>{
  setValues({
    [e.target.name]: e.target.value
  });
}

const getCourses =async()=>{
  try {
    const {data}= await axiosBack.get("/course");
    setCourses(data.courses);  
  } catch (error) {
    toast.error(error.message)
  }
}
const handleSubmit =async(e)=>{
  e.preventDefault();
  try {
    const courseCreated = await axiosBack.post("/course", values);
    getCourses();
    if(courseCreated){
      toast.done("Curso creado")
    }
  } catch (error) {
    toast.error("Error, intente nuevamente mas tarde")
  }
}

useEffect(()=>{
  getCourses();
},[courses])

    return (
    <Form onSubmit={handleSubmit}>   
       <Form.Group className="mb-3" controlId="courseName">
        <Form.Label>Nombre del curso</Form.Label>
        <Form.Control type="text" name="name" value={values.name} onChange={handleChange}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" >
       Agregar curso
      </Button>
    </Form>
    );
}

export default AddCourseForm;
