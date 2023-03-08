import React, { useEffect, useState } from "react"
import image01 from '../img/image01.png'
import "./IdCard.css"
import GeneralModal from "../GeneralModal/GeneralModal"
import TeacherDeleteConfirmation from "../TeacherForm/TeachaerDeleteConfirmation"
import EditTeachersForm from "../TeacherForm/EditTeacherform"
import axiosBack from "../../config/axios"




function IdCard({name,lastname,cel,dni,adress,courses,state,id,getUsers}){
    
    

    const deleteUser = async(id)=>{
        try {
            await axiosBack.delete('/users',{data:{id}})
            getUsers();
        } catch (error) {
            toast.error('no se pudo borrar al usuario')
        }
    }
    return (
        <div className="card ">
                <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                        <img src={image01} alt="" className="card-img"/>
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="lastname">{lastname}</h2>
                    <h3 className="name">{name}</h3>
                    <h3 className="cel">{cel}</h3>
                    <h3 className="dni">{dni}</h3>
                    <h3 className="adress">{adress}</h3>
                    <h3 className="courses">{courses}</h3>
                    <h3 className="state">{state}</h3>
                    <div className="button">
                    <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditTeachersForm getUsers={getUsers} id={id}/>} variant="primary"/>
                    <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<TeacherDeleteConfirmation deleteUser={()=>deleteUser(id)}/>} variant="primary"/>
                    </div>
                </div>  
            </div>
)
}

export default IdCard
        

