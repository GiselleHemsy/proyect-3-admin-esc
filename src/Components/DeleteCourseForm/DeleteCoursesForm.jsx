import { Button, Form } from "react-bootstrap";
import axiosBack  from "../../config/axios";
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from "react";


const DeleteCourseForm = ({getCourses, courses}) => {
  const [values, setValues] = useState(
    {
      name:"",
      course:""
    }
  );

  const handleChange =(e)=>{
    setValues({
        ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      await axiosBack.delete("/course/",{courseId: values.course, fields:{name: values.name}} );
      getCourses();
    } catch (error) {
      toast.error("Error, intente nuevamente mas tarde")
    }}
    
    useEffect(()=>{
      getCourses();
    },[])

  return ( 
    <>
    <Form onSubmit={handleSubmit}>
    <Form.Select aria-label="Default select example" name="course" onChange={handleChange}  >
      <option>Seleccione el Curso</option> 
      {
        courses?.map((course, index)=>
        <option key={index}  value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
      <Button  variant="success" type="submit" >
        Eliminar curso
      </Button>
    <ToastContainer/>
    </Form>
    </>
  );
}

export default DeleteCourseForm;