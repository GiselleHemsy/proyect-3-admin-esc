import { useEffect, useState } from "react";
import { Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import axiosBack  from "../../config/axios";
import { EDIT_TEACH_USER_VALUES } from "../../Constants";

const EditTeachersForm = ({handleClose, getUsers,id,cursos}) => {
  console.log(cursos)

    const [values, setValues] = useState(EDIT_TEACH_USER_VALUES);
    // const [cursos, setCursos] = useState([])
    
    const handleChangeCheckBox =(e)=>{
      setValues({
        ...values,
        admin: e.target.checked,
      });
    }
    const handleChangeCheckBox02 =(e)=>{
      setValues({
        ...values,
        state: e.target.checked
      });
    }
    const getUserInfo=async()=>{
      try {
        const {data} = await axiosBack.get(`/users?single=true&id=${id}`);
        console.log(data)
        setValues(data.user);
      } catch (error) {
        toast.error("Error intente nuevamente mas tarde")
      }
    }
  //   const getCourses = async()=>{
  //     try {
  //         const {data }= await axiosBack.get("/course");
  //         setCursos(data.courses); 
  //     } catch (error) {
  //         toast.error("error al traer los cursos")
  //     }
  // }
    const handleChange =(e)=>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    });
}
const handleChangeSelected =(e)=>{
  // console.log("cambiando el selected")
// }
  const selectedCourse = cursos.find(x=>x._id===e.target.value)
  console.log("e.target.value::::::::", e.target.value);
  setValues({
    ...values,
    course: selectedCourse
  })};

    const handleSubmit =async(e)=>{
    e.preventDefault();
    try {
        // console.log(values)
        await axiosBack.put("/users",{id,fields:values} );
        getUsers();
    } catch (error) {
        if(!id){
        toast.error("Para continuar selecciona un usuario")}
        else{
        toast.error("Error, intente nuevamente mas tarde")
    }}
}

useEffect(()=>{
  getUserInfo();
  // getCourses();
},[])
// console.log(cursos)
  return (
    <>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Ingrese el nombre</Form.Label>
            <Form.Control type="text" name="name" value={values.name} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastname">
            <Form.Label>Ingrese el Apellido</Form.Label>
            <Form.Control type="text" name="lastname" value={values.lastname} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDni">
            <Form.Label>Ingrese el dni</Form.Label>
            <Form.Control type="number" name="dni" value={values.dni} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={values.email} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCel">
            <Form.Label>cel</Form.Label>
            <Form.Control type="number" name="cel" value={values.cel} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAdress">
            <Form.Label>direccion</Form.Label>
            <Form.Control type="text" name="adress" value={values.adress} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIcome">
            <Form.Label>fecha de ingreso</Form.Label>
            <Form.Control type="date" name="income" value={values.income} onChange={handleChange}/>
          </Form.Group>
          <Form.Select className="my-2" aria-label="Default select example" id={id} cursos={cursos} value={values.course} onChange={handleChangeSelected} name="course"  >
      
      {
        cursos.map((course)=>
        
        <option key={course._id} value={course._id}>{course.name}</option>

        )
      }
      
    </Form.Select>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" name="password" value={values.password} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formState">
        <Form.Check name="state" checked={values.state} onChange={handleChangeCheckBox02} type="checkbox" label="habilitado" />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formAdmin">
        <Form.Check name="admin" checked={values.admin} onChange={handleChangeCheckBox} type="checkbox" label="admin" />
      </Form.Group>
          <Button variant="success" type="submit" onClick={handleClose}>
            Crear usuario
          </Button>
        </Form>
    <ToastContainer/>
    </>
  );
}

export default EditTeachersForm;


// name, lastname, dni, email, cel, admin, password