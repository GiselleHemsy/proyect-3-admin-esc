
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import GeneralModal from '../../src/Components/GeneralModal/GeneralModal';
import IdCard from '../../src/Components/IdCard/IdCard';
import AddTeacherForm from '../../src/Components/TeacherForm/AddTeacherForm';
import axiosBack from "../../src/config/axios";
import "./PrincipalPage.css"


const PrincipalPage = ({}) => {
    const [state, setState] = useState([]);
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
},[])

return(  
    <>
    <div className='buttonCreate col-12 d-flex justify-content-center align-items-center'>
    <GeneralModal buttonText="AGREGAR USUARIO" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="primary"/>
    </div>
        <body className='bodyPP'>
            <div className='containerPP d-flex justify-content-center align-items-center'>
                <div className='rowPP g-3'>
                        <div className='cardPP d-sm-flex col-12 d-md-flex d-lg-flex'>
                        {
                            state.map((per,index) =><IdCard getUsers={getUsers} className="idcard" key={index} name={per.name} lastname={per.lastname} dni={per.dni} cel={per.cel} adress={per.adress} courses={per.courses} state={per.state} id={per._id}/>)
                        }
                        </div>
                    </div>
                </div>
            
        </body>
</>                         
);                                                                                                                 
}

export default PrincipalPage                                                                                                                                              