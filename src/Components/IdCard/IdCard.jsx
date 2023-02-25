import React from "react"
import image01 from '../img/image01.png'
import './IdCard.css'
import GeneralModal from "../GeneralModal/GeneralModal"
import EditTeacherForm from "../TeacherForm/EditTeacherform"
import AddTeacherForm from "../TeacherForm/AddTeacherForm"
import TeacherDeleteConfirmation from "../TeacherForm/TeachaerDeleteConfirmation"




function IdCard({name,cel,email,dni,_id}){
    return (
//         <div className="d-flex alert-dismissiblecol-12 col-md-6 col-lg-4">
//         <img className="img-fluid" src={image01}/>
//         <div className="card-body">
//             <h4 className="card-text m-2 ">{name}</h4>
//             <p className="card-text text-secondary m-2">{cel}</p>
//             <p className="card-text text-secondary m-2">{email}</p>
//             <p className="card-text text-secondary m-2">{dni}</p>
//             <p className="card-text text-secondary m-2">{_id}</p>
//             <div className="buttons d-flex g-3">
//             {<GeneralModal buttonText="Editar" modalTitle="Edicion de Usuario"  modalBody={<PrincipalPageForm/>} variant="primary"/>}
//             </div>
//         </div>
//     </div>
//     )


        
            <div className="card ">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src={image01} alt="" className="card-img"/>
                    </div>

                </div>
                <div className="card-content">
                    <h1 className="name">{name}</h1>
                    <h2 className="rest">{cel}</h2>
                    <h2 className="rest">{email}</h2>
                    <h2 className="rest">{dni}</h2>
                    <h2 className="rest">{_id}</h2>
                    <div className="button">
                    <GeneralModal buttonText="Agregar" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="primary"/>
                    <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditTeacherForm/>} variant="primary"/>
                    <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<TeacherDeleteConfirmation/>} variant="primary"/>
                    </div>
                </div>
        </div>
)
}
export default IdCard