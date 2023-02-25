import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify'
import axiosBack  from "../../config/axios";

const EditStudentForm = ({selected, handleClose, getStudents, courses}) => {
  console.log(selected)    //!Recibe correctamente

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
      const {data} = await axiosBack.get(`/students/${selected}`); 
      console.log(data)
      setValues(data.student);
    } catch (error) {
      toast.error("Error intente nuevamente mas tarde")
    }
  }
  
  //query "/students?course=7"
  //PARAMS /students/7
        // "/users/"+selected, values

  
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
      // '/coins/' + selected ,{update:values}
      await axiosBack.put("/students/"+selected,{fields:values});
      getStudents();
      //Uso los datos que devuelve el back para mostrar una confirmacion
    } catch (error) {
      {
      toast.error("Error, intente nuevamente mas tarde")
    }}
  }





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
  console.log("e.target.value::::::::", e.target.value);
  setValues({
    ...values,
    course: selectedCourse
  })};
// handleChangeSelected

console.log("values:",values);
console.log(courses);
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
      {/* <Form.Group className="mb-3" controlId="userCuota">
        <Form.Label>Estado de Cuota</Form.Label>
        <Form.Control type="boolean" name="cuota" value={values.cuota} onChange={handleChange}/>
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formCuota">
        <Form.Check name="cuota" checked={values.cuota} onChange={handleChangeCheckBox} type="checkbox" label="Cuota al dia" />
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Confirmar
      </Button>
    </Form>
    <ToastContainer/>
    </>
  );
}

export default EditStudentForm;