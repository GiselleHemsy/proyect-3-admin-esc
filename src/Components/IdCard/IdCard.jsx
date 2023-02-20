import React from "react"
import image01 from '../img/image01.png'
import { Button } from "react-bootstrap"
import './IdCard.css'




function IdCard({name,cel,email,dni,_id}){
    return (
        <div className="d-flex alert-dismissiblecol-12 col-md-6 col-lg-4">
            <img className="img-fluid" src={image01}/>
            <div className="card-body">
                <h4 className="card-text">{name}</h4>
                <p className="card-text text-secondary">{cel}</p>
                <p className="card-text text-secondary">{email}</p>
                <p className="card-text text-secondary">{dni}</p>
                <p className="card-text text-secondary">{_id}</p>
                <Button variant="primary">boton de edicion de admin</Button>{' '}
            </div>
        </div>
    )
}

export default IdCard