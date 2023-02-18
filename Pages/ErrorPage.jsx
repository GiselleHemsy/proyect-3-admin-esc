import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {

return (
    <>
    <div className='PPcontainer py-5'>
            <div className='row mt-5'>
                <div className='col-md-4'>
                    <h1 className="h1Container d-flex">Error 404 Not Found. <Link to="/PrincipalPage">Volver a la página principal</Link></h1> ;
                </div>
            </div>
        </div>
    </>
)
    
    
    }

export default ErrorPage;