import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import axiosBack from '../../config/axios';
import { ADD_TEACH_USER_VALUES } from '../../Constants';
import { validationAddUserForm } from '../../helpers/validations';
import { FaExclamationTriangle } from "react-icons/fa";
import "../../index.css"


const AddTeacherForm = ({handleClose, getUsers, cursos}) => {
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
        const [values, setValues] = useState(ADD_TEACH_USER_VALUES);
      
        const handleChange =(e)=>{
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      }
      
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
        const addUser =async()=>{
        try {
          const userCreated = await axiosBack.post("/users", values);
          getUsers();
          toast.success("Usuario Creado")
          
        } catch (error) {
          toast.error("Error en el agregado de un usuario")
        }
      }
        const handleSubmit =(e) =>{
        e.preventDefault();
        setErrors(validationAddUserForm(values));
        setSubmitting(true)
      }
        useEffect(()=>{
        if (submitting){
          if (Object.keys(errors).length === 0) {
            addUser();
            handleClose();
        }
        setSubmitting(false);
        setTimeout(()=>{
          setErrors({});
        },3000)
        }
      }, [errors])
    
      return (
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
          <Form.Select className="my-2" aria-label="Default select example"  value={values.course._id} onChange={handleChange} name="course"  >
      <option>Seleccione el Año de Cursado</option>
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
        <Form.Check name="Habilitado" checked={values.state} onChange={handleChangeCheckBox02} type="checkbox" label="habilitado" />
      </Form.Group>
          <Form.Group className="mb-3" controlId="formAdmin">
        <Form.Check name="admin" checked={values.admin} onChange={handleChangeCheckBox} type="checkbox" label="admin" />
      </Form.Group>
          <Button variant="success" type="submit">
            Crear usuario
          </Button>
          {
                  Object.keys(errors).length!==0 && (
                    Object.values(errors).map(error=>
                      <p className="errorStyle mx-1 px-1 "><FaExclamationTriangle /> {error}</p>
                      )
                  )
                }
        </Form>
      );
    }
    
export default AddTeacherForm;


