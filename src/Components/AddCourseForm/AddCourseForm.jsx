// import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { toast, ToastContainer } from 'react-toastify';
// import  axiosBack  from '../../config/axios';



const AddCourseForm = ({handleClose}) =>{
    return (
    <Form>   
       <Form.Group className="mb-3" controlId="courseName">
        <Form.Label>Nombre del curso</Form.Label>
        <Form.Control type="text" placeholder="7" name="name" value={values.name} onChange={handleChange}></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClose}>
       Agregar
      </Button>
    </Form>
    );
}

export default AddCourseForm;
