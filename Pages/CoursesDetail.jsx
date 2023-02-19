import { useEffect, useState } from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import ButtonDetail from '../src/components/buttonDetail';
import axiosBack from "../src/config/axios";


const CoursesDetail = () => {
  const [courses, setCourses] = useState([]);
  const getCourses =async()=>{
    try {
      const {data}= await axiosBack.get("/course");
      setCourses(data.courses);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getCourses();
  },[])

  return (
    <>
    <h1>CURSOS</h1>
    <div className='d-flex justify-content-end mx-5'>
    <Button variant="outline-primary" size="sm" >Agregar</Button>
    <Button variant="outline-warning" size="sm">Modificar</Button>
    <Button variant="outline-danger" size="sm">Eliminar</Button>
    </div>
    <Container>
      <Row>
        <Col>
          {
            courses?.map((course)=> <ButtonDetail title={course.name}/>
          )
          }
        </Col>
      </Row>
    </Container>
    </>
  );
}
      
export default CoursesDetail;