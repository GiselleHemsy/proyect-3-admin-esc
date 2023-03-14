import React, { useEffect, useState } from "react"
import image01 from '../img/image01.png'
import "./IdCard.css"
import GeneralModal from "../GeneralModal/GeneralModal"
import TeacherDeleteConfirmation from "../TeacherForm/TeachaerDeleteConfirmation"
import EditTeachersForm from "../TeacherForm/EditTeacherform"
import axiosBack from "../../config/axios"




function IdCard({name,lastname,cel,dni,adress,course,state,id,getUsers}){
    const [cursos, setCursos] = useState([])
    
    const getCourses = async()=>{
        try {
            const {data }= await axiosBack.get("/course");
            setCursos(data.courses); 
        } catch (error) {
            toast.error("error al traer los cursos")
        }
    }

    const deleteUser = async(id)=>{
        try {
            await axiosBack.delete('/users',{data:{id}})
            getUsers();
        } catch (error) {
            toast.error('no se pudo borrar al usuario')
        }
    }
    useEffect(()=>{
        
    getCourses();
    },[])
    return (
    
            <div className="card">
                <div className="image-content">
                    <span className="overlay"></span>
                        <div className="card-image">
                            <img src={image01} alt="" className="card-img"/>
                        </div>
                </div>
                <div className="name">
                    <h4 className="lastname">{lastname}</h4>
                    <h4 className="name">{name}</h4>
                </div>
                <div className="card-content">
                    <p className="cel"> Cel: {cel}</p>
                    <p className="dni"> ID: {dni}</p>
                    <p className="adress"> Dir.: {adress}</p>
                    <p className="courses"> Curso a Cargo: {course}</p>
                    <p className="state"> Estado: {state}</p>
                    {/* {
                        user.admin? */}
                    <div className="button">
                    <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditTeachersForm getUsers={getUsers} id={id} cursos={cursos}/>} variant="primary"/>
                    <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<TeacherDeleteConfirmation deleteUser={()=>deleteUser(id)}/>} variant="primary"/>
                    </div>
                    {/* : null
                } */}
                </div>  
                </div>
            )
}

export default IdCard
        

