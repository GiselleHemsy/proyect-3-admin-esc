import React from "react"
import image1 from '../img/imagencontacto.png'
import { Button } from "react-bootstrap"
import './IdCard.css'




function IdCard({name,direccion}){
    return (
        <div className="card">
            <img src={image1}/>
            <div className="card-body">
                <h4 className="card-text">{name}</h4>
                <p className="card-text text-secondary">{direccion}</p>
                <Button variant="primary">ver mas</Button>{' '}
            </div>
        </div>
    )
}

export default IdCard