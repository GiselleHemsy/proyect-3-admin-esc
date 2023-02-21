import React from "react"
import image01 from '../img/image01.png'
import { Button } from "react-bootstrap"
import './IdCard.css'
import GeneralModal from "../GeneralModal/GeneralModal"
import PrincipalPageForm from "../PrincipalPageForm/PrincipalPageForm"
import AddStudentForm from "../AddStudentForm/AddStudentForm"




function IdCard({name,direccion}){
    return (
        <div className="d-flex alert-dismissiblecol-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={image01}/>
            <div className="card-body">
                <h4 className="card-text">{name}</h4>
                <p className="card-text text-secondary">{direccion}</p>
                <Button variant="primary">ver mas</Button>{' '}
            </div>
        </div>
    )
}

export default IdCard