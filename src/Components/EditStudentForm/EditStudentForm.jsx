import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";

const EditStudentForm = ({selected, handleClose, getData}) => {

  const [values, setValues] = useState(
    {
      expediente:"",
      name:"",
      lastname:"",
      course:"",
      cuota:""
    }
  );



  const getUserInfo=async()=>{
    try {
      const {data} = await axiosBack.get("/users/", {selected});
      setValues(data.users);
    } catch (error) {
      toast.error("Error intente nuevamente mas tarde")
    }
  }
  
  //query "/students?course=7"
  //PARAMS /students/7
  const handleChange =(e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      await axiosBack.put("/users/",{selected,values} );
      getData();
      //Uso los datos que devuelve el back para mostrar una confirmacion
    } catch (error) {
      if(!selected){
      toast.error("Para continuar selecciona un usuario")}
      else{
      toast.error("Error, intente nuevamente mas tarde")
    }}
  }


useEffect(()=>{
  getUserInfo();
},[])
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="userId">
        <Form.Label>Id/Expediente</Form.Label>
        <Form.Control type="text"  name="expendiente" value={values.expediente} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Ingrese el nombre</Form.Label>
        <Form.Control type="text"  name="name" value={values.name} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userLastname">
        <Form.Label>Ingrese el apellido</Form.Label>
        <Form.Control type="text"  name="lastname" value={values.lastname} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userCourse">
        <Form.Label>Ingrese el Año de Cursado</Form.Label>
        <Form.Control type="text"  name="course" value={values.course} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="boolean" name="cuota" value={values.cuota} onChange={handleChange}/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Editar usuario
      </Button>
    </Form>
    <ToastContainer/>
    </>
  );
}

export default EditStudentForm;