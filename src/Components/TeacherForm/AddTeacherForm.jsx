import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { ADD_TEACH_USER_VALUES } from '../../Constants';


const AddTeacherForm = ({handleClose, getTeachers}) => {
    
        const [values, setValues] = useState(ADD_TEACH_USER_VALUES);
      const handleChange =(e)=>{
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      }
      
      const handleSubmit =async(e)=>{
        console.log("funcion agregando usuario")
        e.preventDefault();
        try {
          const userCreated = await axiosBack.post("/teachers", {values});
          getTeachers();

          if(userCreated){
            toast.done("Usuario Creado")
          }
        } catch (error) {
          toast.error("Error, intente nuevamente mas tarde")
        }
      }
    
      return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Ingrese el nombre</Form.Label>
            <Form.Control type="text" placeholder="" name="name" value={values.name} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userLastname">
            <Form.Label>Ingrese el Apellido</Form.Label>
            <Form.Control type="text"  placeholder="" name="lastname" value={values.lastname} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="dniUser">
            <Form.Label>Ingrese el dni</Form.Label>
            <Form.Control type="number"  name="dni" value={values.dni} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="useremail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" value={values.email} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="usercel">
            <Form.Label>cel</Form.Label>
            <Form.Control type="number" name="cel" value={values.cel} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="userCuota">
            <Form.Label>adress</Form.Label>
            <Form.Control type="text" name="adress" value={values.adress} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="state">
            <Form.Label>estado</Form.Label>
            <Form.Control type="bolean" name="state" value={values.state} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="state">
            <Form.Label>course</Form.Label>
            <Form.Control type="text" name="course" value={values.course} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="state">
            <Form.Label>income</Form.Label>
            <Form.Control type="incio" name="income" value={values.income} onChange={handleChange}/>
          </Form.Group>
          <Button variant="success" type="submit" onClick={handleClose}>
            Crear usuario
          </Button>
        </Form>
      );
    }
    
export default AddTeacherForm;