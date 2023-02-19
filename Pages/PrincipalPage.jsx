
import React from 'react';
import IdCard from '../src/Components/IdCard/IdCard'




const PrincipalPage = () => {
    //array de usuarios
const perADmin = [
    {   "nombre": "gabriel",
        "fechadeingreso": "20/08/99",
        "telefono": "381544755" ,
        "correo": "carlos@gmail.com" ,
        "Id": "1234asdASD",
        "direccion": "chacabuco103",
        "cursosACargo": "matematica,fisica",
        "estado": "habilitado", 
    },

    {   "nombre": "agostina",
        "fechadeingreso": "20/08/99",
        "telefono": "381544755" ,
        "correo": "carlos@gmail.com" ,
        "Id": "1234asdASD",
        "direccion": "san lorenzo200",
        "cursosACargo": "matematica,fisica",
        "estado": "habilitado", 
    },

    { "nombre": "gisel",
        "fechadeingreso": "20/08/99",
        "telefono": "381544755" ,
        "correo": "carlos@gmail.com" ,
        "Id": "1234asdASD",
        "direccion": "gral1500",
        "cursosACargo": "matematica,fisica",
        "estado": "habilitado", 
    },
]
    
    return(  
        <>
        <div className='PPcontainer py-5'>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    {
                    perADmin.map((per,index) =><IdCard     
                                name={per.nombre} 
                                fechadeingreso={per.fechadeingreso} 
                                telefono={per.telefono} 
                                correo={per.correo} 
                                direccion={per.direccion} 
                                cursosACargo={per.cursosACargo} 
                                estado={per.estado} 
                                key={index}/>)
                    }
                </div>
            </div>
        </div>
</>
);
}

export default PrincipalPage