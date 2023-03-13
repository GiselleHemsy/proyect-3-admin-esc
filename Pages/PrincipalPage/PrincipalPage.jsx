
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import GeneralModal from '../../src/Components/GeneralModal/GeneralModal';
import IdCard from '../../src/Components/IdCard/IdCard';
import AddTeacherForm from '../../src/Components/TeacherForm/AddTeacherForm';
import axiosBack from "../../src/config/axios";
import "./PrincipalPage.css"


const PrincipalPage = ({}) => {
    const [state, setState] = useState([]);
    const [cursos, setCursos] = useState([])
const getUsers = async()=>{
    try {
        const {data}= await axiosBack.get("/users");
        
        setState(data.users);  
    } catch (error) {
        toast.error(error.message)
    
    }
}

useEffect(()=>{
getUsers();
getCourses();
},[])


const getCourses = async()=>{
    try {
        const {data}= await axiosBack.get("/course");
        setCursos(data.courses); 
    } catch (error) {
        toast.error(error.message)
    }
}

return(  
    <>
        <div className='contenedor'>
            <div className='buttonCreate col-12 d-flex justify-content-center align-items-center'>
                    <GeneralModal buttonText="AGREGAR USUARIO" modalTitle="Agregar un usuario" modalBody={<AddTeacherForm getUsers={getUsers} cursos={cursos}/>} variant="primary"/>
            </div>
            <div className="cards">
                    <Row className='row'>
                        {state.map((per,index) => (
                        <Col className='col d-flex justify-content-center align-intems-center g-3'>
                        <IdCard getUsers={getUsers} cursos={cursos} className="idcard" key={index} name={per.name} lastname={per.lastname} dni={per.dni} cel={per.cel} adress={per.adress} courses={per.courses} state={per.state?"habilitado":"desabilitado"} id={per._id}/>
                        </Col>
                        ))}
                    </Row>
            </div>
        </div> 
    </>
    );                                                                                                                 
}

export default PrincipalPage   
