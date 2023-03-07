import { useContext, useEffect, useState} from 'react';
import {Container,Row,Col, Table, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import AddCourseForm from '../src/components/AddCourseForm/AddCourseForm';
import DeleteCourseForm from '../src/components/DeleteCourseForm/DeleteCoursesForm';
import EditCourseForm from '../src/components/EditCourseForm/EditCourseForm';
import axiosBack from "../src/config/axios";
import { UserContext } from "../src/context/UserContext";


const CoursesDetail = () => {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("");
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [addCourse, setAddCourse] = useState(false);
  const [editCourse, setEditCourse] = useState(false);
  const [deleteCourse, setDeleteCourse] = useState(false);
  const [isDeleted,setIsDeleted] = useState(false);
  const {user} = useContext(UserContext);


  const getCourses =async()=>{
    try {
      const {data}= await axiosBack.get("/course");
      setCourses(data.courses);  
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  const getStudentsForCourse = async ()=>{
    try {
      const {data}= await axiosBack.get(`/students/course?course=${selected}`);
      setStudents(data.students);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  const getSubjectsByCourse =async()=>{
      try {
        const {data}= await axiosBack.get(`/subject/course?course=${selected}`);
        setSubjects(data.subject);  
      } catch (error) {
        toast.error(error.message)
      }
    }
  
  const getTeacherByCourse =async()=>{
      try {
      const {data}= await axiosBack.get(`/teachers/course?course=${selected}`);
      setTeachers(data.teacher); 
      } catch (error) {
        toast.error(error.message)
      }
    }
  const handleAddCourse = ()=>{
    setAddCourse(!addCourse);
  }
  const handleEditCourse = ()=>{
    setEditCourse(!editCourse);
  }
  
  const handleDeleteCourse = ()=>{
    setDeleteCourse(!deleteCourse);
  }

  useEffect(()=>{
    getCourses();
  },[isDeleted])
  
  useEffect(()=>{
    getStudentsForCourse();
    getSubjectsByCourse();
    getTeacherByCourse();
    
  },[selected])

   
  return (
    <Container>
    <Container>
    {/* {
        user.admin? */}
      <Row>
        <Col>
            <h1>CURSOS</h1>
        </Col>
        <Col>
            <Button variant="outline-success" onClick={handleAddCourse}>Agregar</Button>
            <Button variant="outline-warning" onClick={handleEditCourse}>Editar</Button>
            <Button variant="outline-danger" onClick={handleDeleteCourse}>Eliminar</Button>
        </Col>
      </Row>
       {/* : null
      } */}
      <Row>
        <Col>
          {courses?.map((course, index)=> 
              <button key={index} onClick={()=>{setSelected(course._id)}}> {course.name}</button>
              )}
        </Col>
      </Row>
    </Container> 
           {
              addCourse && <Container>
              <Row>
                <Col>
                 <AddCourseForm handleAddCourse={handleAddCourse} getCourses={getCourses}/> 
                </Col>
              </Row>
            </Container>
          }
           {
              editCourse && <Container>
              <Row>
                <Col>
                 <EditCourseForm handleEditCourse={handleEditCourse} getCourses={getCourses} courses={courses}/>
                </Col>
              </Row>
            </Container>
          }
          {
              deleteCourse && <Container>
              <Row>
                <Col>
                 <DeleteCourseForm handleDeleteCourse={handleDeleteCourse} isDeleted={isDeleted} setIsDeleted={setIsDeleted} getCourses={getCourses} courses={courses}/>
                </Col>
              </Row>
            </Container>
          } 
      
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
          ALUMNOS
          </th>
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
      {subjects?.map((subject, index) =>
    <tr key={index}>
      <td>{subject?.name}</td>
    </tr> )}
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
 </Container>
  );        
      }
    
      
export default CoursesDetail;