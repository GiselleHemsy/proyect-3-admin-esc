import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axiosBack from '../config/axios';

const InfoCourses = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  
  const getStudents =async()=>{
    try {
      const {data}= await axiosBack.get("/students");
      setStudents(data.students);  
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getSubjects =async()=>{
    try {
      const {data}= await axiosBack.get("/subject");
      console.log(data.subject);
      setSubjects(data.subject);  
    } catch (error) {
      toast.error(error.message)
    }
  }
  const getTeachers =async()=>{
    try {
      const {data}= await axiosBack.get("/teachers");
      console.log(data.teacher);
      setTeachers(data.teacher); 
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getStudents();
  },[])
useEffect(()=>{
  getSubjects();
},[])
useEffect(()=>{
  geTeachers();
},[])
  
  return (
    <>
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
        {students.map((student) =>
        <tr>
          <td>{student.name}</td>
          <td>{student.lastname}</td>
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
    {subjects.map((subject) =>
    <tr>
      <td>{subject.name}</td>
    </tr>
    )}
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
    {teachers.map((teacher) =>
    <tr>
      <td>{teacher.name}</td>
      <td>{teacher.lastname}</td>
    </tr>
    )}
  </tbody>
</Table> 
</>
);
}


export default InfoCourses;