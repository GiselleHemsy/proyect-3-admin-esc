// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React from 'react';
import IdCard from '../src/Components/IdCard/IdCard'



const PrincipalPage = () => {

    
    return(
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <IdCard/>
                </div>
                <div className='col-md-4'>
                    <IdCard/>
                </div>
                <div className='col-md-4'>
                    <IdCard/>
                </div>
            </div>
        </div>
</>
);
}

export default PrincipalPage