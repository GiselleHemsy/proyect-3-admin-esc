import React from "react"
import image01 from '../img/image01.png'
import { Button } from "react-bootstrap"
import './IdCard.css'
import GeneralModal from "../GeneralModal/GeneralModal"
import PrincipalPageForm from "../PrincipalPageForm/PrincipalPageForm"
import AddStudentForm from "../AddStudentForm/AddStudentForm"




function IdCard({name,cel,email,dni,_id}){
    return (
        <div className="d-flex alert-dismissiblecol-12 col-md-6 col-lg-4">
        <img className="img-fluid" src={image01}/>
        <div className="card-body">
            <h4 className="card-text m-2 ">{name}</h4>
            <p className="card-text text-secondary m-2">{cel}</p>
            <p className="card-text text-secondary m-2">{email}</p>
            <p className="card-text text-secondary m-2">{dni}</p>
            <p className="card-text text-secondary m-2">{_id}</p>
            <div className="buttons d-flex g-3">
            {/* <GeneralModal buttonText="Editar" modalTitle="Edicion de Usuario"  modalBody={<PrincipalPageForm/>} variant="primary"/> */}
            {/* <GeneralModal buttonText="Editar" modalTitle="editar un usuario"  modalBody={<AddStudentForm/>} variant="primary"/> */}
            <Button variant="primary">Editar</Button>{' '}
            <Button variant="primary">Habilitar</Button>{' '}
            <Button variant="primary">Eliminar</Button>{' '}
            </div>
        </div>
    </div>
    )
}

export default IdCard