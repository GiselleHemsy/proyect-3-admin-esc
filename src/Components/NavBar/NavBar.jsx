import React,{useContext, useState} from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import BurguerButton from "../BurguerButton/BurguerButton";
import GeneralModal from "../GeneralModal/GeneralModal";
import image02 from "../img/click.png";
import AddTeacherForm from "../TeacherForm/AddTeacherForm"



function NavBar () {
    const [clicked, setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    const {logout} = useContext(UserContext)
    const { pathname } = useLocation();
    console.log(pathname)

return ( 
    
        <NavContainer>
            {pathname === '/LoginPage' ? 
            
            (
                
                <div className="logo d-flex">
                <img src={image02} className="image02"/>
                <h2> AdminClick</h2>
                </div>
            
            ) : ( 
                
                <>
            
                    <div className="logo d-flex">
                <img src={image02} className="image02"/>
                <h2> AdminClick</h2>
                </div>

<div className={`links ${clicked ? 'active' : ''}`}>

                <Link to="/PrincipalPage" onClick={handleClick}>PAGINA PRINCIPAL</Link>
                <Link to="/StudentsPage" onClick={handleClick}>ALUMNOS</Link>
                <Link to="/CoursePage" onClick={handleClick}>CURSOS</Link>
                <Link to="/LoginPage"  onClick={handleClick}>LOGIN</Link>
                <Button className="buttonlogout" onClick={logout} variant="light">Logout</Button>
                <GeneralModal  buttonText="AGREGAR" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="light"/>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className = {`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </>
            ) }
        </NavContainer>
        
        );
    };


const NavContainer = styled.nav`
h2{ margin-top: 30px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 300;
    span{
        font-weight: bold;
    }
}
.buttonlogout{
    margin-right: 1rem;
}
    padding: .4rem;
    background-color: #4897b1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    a{   
        color: white;
        text-decoration: none;
        margin-right: 1rem;
}
.links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index:40;
    a{
        color: white;
        font-size: 1rem;
        display: block;
    }
@media(min-width: 768px){
        position: initial;
        margin: 0;
    a{
        font-size: 1rem;
        color: white;
        display: inline;
    }
}
    
}
.links.active{
    font-size: medium;
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    transition: 1s;
    a{
        font-size: 1rem;
        margin-top: 1rem;
        color: white;
    }
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
.image02{
    width: 100px;
    height: 90px;
}
`
const BgDiv = styled.div`
    max-width: 900px;
    background-color: #4897b1;
    position: absolute;
    top:-700px;
    left: -500px;
    width: 50%;
    height: 50%;
    z-index: -1;
    transition: all .6s ease;
&.active{
    border-radius: 0 0 60% 0;
    top: 0;
    bottom: 10%;
    left:0%;
    width: 100%;
    height: 70%;
    z-index: 20;
    }
`

export default NavBar; 


