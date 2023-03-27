import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";




const EditCourseForm = ({getCourses, courses,handleEditCourse}) => {
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
          await axiosBack.put("/course/",{courseId: values.course, fields:{name: values.name}} );
          getCourses();
          handleEditCourse()
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
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Ingrese el nuevo nombre</Form.Label>
        <Form.Control type="text"  name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Button  variant="warning" type="submit" >
        Editar curso
      </Button>
    {/* <ToastContainer/> */}
    </Form>
    </>
      );
}
  
export default EditCourseForm;