import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";

const EditStudentForm = ({selected, handleClose, getStudents, courses}) => {
  console.log(selected)    //!Recibe correctamente

  const [values, setValues] = useState(
    {
      expediente:"",
      name:"",
      lastname:"",
      email:"",
      course:"",
      cuota:"",
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
      const {data} = await axiosBack.get(`/students/${selected}`); 
      console.log(data)
      setValues(data.student);
    } catch (error) {
      toast.error("Error intente nuevamente mas tarde")
    }
  }
  
  //query "/students?course=7"
  //PARAMS /students/7
  
  
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      await axiosBack.put("/students/",{selected,values} );
      getStudents();
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
    <Form onSubmit={()=>{handleSubmit}}>
      <Form.Group className="mb-3" controlId="userExpediente">
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
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Ingrese el Email</Form.Label>
        <Form.Control type="email"  name="email" value={values.email} onChange={handleChange}/>
      </Form.Group>
      <Form.Select aria-label="Default select example" name="course" onChange={handleChange}  >
      <option>Seleccione el Año de Cursado</option> 
      {
        courses.map((course)=>
        <option key={course._id}   value={course._id}>{course.name}</option>
        )
      }
    </Form.Select>
      {/* <Form.Group className="mb-3" controlId="userCuota">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="boolean" name="cuota" value={values.cuota} onChange={handleChange}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formCuota">
        <Form.Check name="cuota" checked={!values.cuota} onChange={handleChange} type="checkbox" label="Adeuda Cuota" />
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Editar usuario
      </Button>
    <ToastContainer/>
    </Form>
    </>
  );
}

export default EditStudentForm;