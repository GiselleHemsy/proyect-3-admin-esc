import React from "react"
import image1 from '../img/imagencontacto.png'
import { Button } from "react-bootstrap"



function IdCard(){
    return (
        <div className="card">
            <img src={image1}/>
            <div className="card-body">
                <h4 className="card-title">Nombre</h4>
                <p className="card-text text-secondary">detalles del usuario</p>
                <Button variant="primary">Editar</Button>{' '}
            </div>
        </div>
    )
}

export default IdCard