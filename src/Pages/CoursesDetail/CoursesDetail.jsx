import { useContext, useEffect, useState} from 'react';
import {Container,Row,Col, Table, Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import AddCourseForm from '../../components/AddCourseForm/AddCourseForm';
import DeleteCourseForm from '../../components/DeleteCourseForm/DeleteCoursesForm';
import EditCourseForm from '../../components/EditCourseForm/EditCourseForm';
import axiosBack from "./../../config/axios";
import { UserContext } from "./../../context/UserContext";
import { FaPlus, FaTrash, FaUserEdit } from "react-icons/fa";
import Buttonmu from '@mui/material/Button';
import "./../CoursesDetail/CoursesDetail.css"


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
    if (selected){
    getStudentsForCourse();
    getSubjectsByCourse();
    getTeacherByCourse();
    }
  },[selected])

   
  return (
    <Container>
    <Container>
      <h4 className="text-center mt-3">CURSOS</h4>
    {
        user.admin? 
      <Row>
        <Col className=" stylebloquebuttons d-flex justify-content-center py-2 ">
            <Button className="mx-1" variant="success" onClick={handleAddCourse}>{<FaPlus />}</Button>
            <Button className="mx-1" variant="warning" onClick={handleEditCourse}>{<FaUserEdit className="styleicon" />}</Button>
            <Button className="mx-1" variant="danger" onClick={handleDeleteCourse}>{<FaTrash/>}</Button>
        </Col>
      </Row>
        : null
      } 
      <Row>
        <Col>
          {courses?.map((course, index)=> 
              <Buttonmu className="buttoncourse mx-1 my-1 p-0" variant="contained" key={index} onClick={()=>{setSelected(course._id)}}> {course.name}</Buttonmu>
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
        <tr className="title" >
          <td colSpan="2">ALUMNOS</td>
          
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
    <tr className="title">
     <td colSpan="2">MATERIAS</td> 
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
    <tr className="title">
    <td colSpan="2"> PROFESOR A CARGO</td> 
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