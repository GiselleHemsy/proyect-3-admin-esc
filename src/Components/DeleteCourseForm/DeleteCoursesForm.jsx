import { Button, Form } from "react-bootstrap";
import axiosBack  from "../../config/axios";
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from "react";


const DeleteCourseForm = ({getCourses, courses, isDeleted, setIsDeleted, handleDeleteCourse}) => {
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
      console.log(values.course)
      await axiosBack.delete("/course/",{data:{courseId: values.course}
      } );
      setIsDeleted(!isDeleted)
      getCourses();
      handleDeleteCourse()
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
      <Button  variant="danger" type="submit" >
        Eliminar curso
      </Button>
    {/* <ToastContainer/> */}
    </Form>
    </>
  );
}

export default DeleteCourseForm;