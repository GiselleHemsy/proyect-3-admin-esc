import React from "react"
import image1 from '../img/imagencontacto.png'
import { Button } from "react-bootstrap"
import './IdCard.css'




function IdCard({name,direccion,fechadeingreso,telefono,Id,correo,cursosACargo,estado}){
    return (
        <div className="card">
            <img src={image1}/>
            <div className="card-body">
                <h4 className="card-text">{name}</h4>
                <p className="card-text text-secondary">{direccion}</p>
                <p className="card-text text-secondary">{fechadeingreso}</p>
                <p className="card-text text-secondary">{telefono}</p>
                <p className="card-text text-secondary">{correo}</p>
                <p className="card-text text-secondary">{Id}</p>
                <p className="card-text text-secondary">{cursosACargo}</p>
                <p className="card-text text-secondary">{estado}</p>
                <Button variant="primary">boton de edicion de admin</Button>{' '}
            </div>
        </div>
    )
}

export default IdCard