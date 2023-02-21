import { useEffect, useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { toast } from 'react-toastify';
import GeneralModal from '../src/Components/GeneralModal/GeneralModal';
import axiosBack from "../src/config/axios";
import InfoCourses from "../src/components/InfoCourses";

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
    <Container>
      <Row>
        <Col>
          {
            courses?.map((course)=> 
            <GeneralModal buttonText={course.name} modalTitle={course.name} modalBody={<InfoCourses></InfoCourses>} variant="primary"/>
          )
          }
        </Col>
      </Row>
    </Container>
    </>
  );
}
      
export default CoursesDetail;