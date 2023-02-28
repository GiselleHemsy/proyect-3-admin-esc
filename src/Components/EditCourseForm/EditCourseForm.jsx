import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";




const EditCourseForm = ({handleClose,selected}) => {
    const [courses, setCourses] = useState([]);
    const [values, setValues] = useState(
        {
          name:""
        }
      );

      const getCourses =async()=>{
        try {
          const {data}= await axiosBack.get("/course");
          setCourses(data.courses);  
        } catch (error) {
          toast.error(error.message)
        }
      }

      const handleChange =(e)=>{
        setValues({
          [e.target.name]: e.target.value
        });
      }
      
      const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
          await axiosBack.put("/course/",{selected,values} );
          getCourses();
        } catch (error) {
          toast.error("Error, intente nuevamente mas tarde")
        }}
      
    
    
    useEffect(()=>{
      getCourses();
    },[])
    
    return ( 
        <>
    <Form onSubmit={()=>{handleSubmit}}>
    <Form.Select aria-label="Default select example" name="course" onChange={handleChange}  >
      <option>Seleccione el Año de Cursado</option> 
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
      <Button variant="success" type="submit" onClick={handleClose}>
        Editar curso
      </Button>
    <ToastContainer/>
    </Form>
    </>
     );
}
 
export default EditCourseForm;