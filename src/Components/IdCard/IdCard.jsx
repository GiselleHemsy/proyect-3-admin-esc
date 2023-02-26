import React from "react"
import image01 from '../img/image01.png'
import './IdCard.css'
import GeneralModal from "../GeneralModal/GeneralModal"
import EditTeacherForm from "../TeacherForm/EditTeacherform"
import TeacherDeleteConfirmation from "../TeacherForm/TeachaerDeleteConfirmation"




function IdCard({name,lastname,cel,dni,}){
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
                    <div className="button">
                    <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditTeacherForm/>} variant="primary"/>
                    <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<TeacherDeleteConfirmation/>} variant="primary"/>
                    </div>
                </div>  
            </div>
    )
}
export default IdCard