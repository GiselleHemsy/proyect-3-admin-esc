
import { useEffect, useState,useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import GeneralModal from './../../components/GeneralModal/GeneralModal';
import IdCard from './../../components/IdCard/IdCard';
import AddTeacherForm from './../../components/TeacherForm/AddTeacherForm';
import axiosBack from "./../../config/axios";
import "./PrincipalPage.css"
import { UserContext } from './../../context/UserContext';


const PrincipalPage = ({}) => {
    const {user} = useContext(UserContext);
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
        <h4 className="text-center mt-3" >PERSONAL ADMINISTRATIVO Y PROFESORES</h4>
        {
        user?.admin?
        <>
            <div className='buttonCreate col-12 d-flex justify-content-center align-items-center'>
                <GeneralModal buttonText="AGREGAR USUARIO" modalTitle="Agregar un usuario" modalBody={<AddTeacherForm getUsers={getUsers} cursos={cursos}/>} variant="primary"/>
            </div>
        </>
            : null
        } 
            <div className="cards">
                    <Row className='row'>
                        {state.map((per,index) => (
                        <Col className='col d-flex justify-content-center align-intems-center g-3'>
                        <IdCard getUsers={getUsers} className="idcard" key={index} name={per.name} lastname={per.lastname} dni={per.dni} cel={per.cel} adress={per.adress} course={per?.course?.name} state={per.state?"habilitado":"desabilitado"} id={per._id}/>
                        </Col>
                        ))}
                    </Row>
            </div>
        </div> 
    </>
    );                                                                                                                 
}

export default PrincipalPage   
