import { useEffect, useState } from 'react';
import {Container,Row,Col, Table} from 'react-bootstrap';
import { toast } from 'react-toastify';
import axiosBack from "../src/config/axios";
import InfoCourses from "../src/components/InfoCourses";

const CoursesDetail = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  // const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
 
  const getCourses =async()=>{
    try {
      const {data}= await axiosBack.get("/course");
      setCourses(data.courses);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  // const getSubjects =async()=>{
  //   try {
  //     const {data}= await axiosBack.get("/subject");
  //     setSubjects(data.subjects);  
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }

  // const getTeachersByCourse =async(course)=>{
  //   try {
  //   } catch (error) {
  //     toast.error(error.message)
  //   }
  // }
  
  const handleClick = async (course)=>{
    try {
      const {data}= await axiosBack.get(`/students/course?course=${course}`);
      setStudents(data.students);  
      const {data2}= await axiosBack.get(`/teachers/course?course=${course}`);
      setTeachers(data2.teachers);  
} catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getCourses();
    getTeachersByCourse();
  },[])

  return (
    <>
      <Container>
              {
                user.role==='ADMIN'?
                <Button variant="outline-success">Agregar</Button>
                <Button variant="outline-warning">Editar</Button>
                <Button variant="outline-danger">Eliminar</Button>
                :
                null
              }       
      </Container>
    <h1>CURSOS</h1>
    <Container>
      <Row>
        <Col>
          {courses?.map((course, index)=> 
              <button key={index} onClick={()=>{handleClick(course._id)}}> {course.name}</button>
              )}
        </Col>
      </Row>
    </Container> 
    <Table striped bordered hover>
      <thead>
        <tr>
          ALUMNOS
        </tr>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) =>
        <tr key={index}>
          <td>{student?.name}</td>
          <td>{student?.lastname}</td> 
        </tr>
        )}
      </tbody>
    </Table>
  <Table striped bordered hover>
  <thead>
    <tr>
      MATERIAS
    </tr>
    <tr>
      <th>Nombre</th>
    </tr>
  </thead>
  <tbody>
      {/* {subjects?.map((subject, index) =>
    <tr>
      <td>{subject?.name}</td>
    </tr> )} */}
  </tbody>
</Table> 
<Table striped bordered hover>
  <thead>
    <tr>
      PROFESOR A CARGO
    </tr>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
    </tr>
  </thead>
  <tbody>
      {teachers.map((teacher, index) =>
    <tr key = {index}>
      <td>{teacher?.name}</td>
      <td>{teacher?.lastname}</td>
    </tr>)} 
  </tbody>
</Table> 
 </>
  );        
      }
    
      
export default CoursesDetail;