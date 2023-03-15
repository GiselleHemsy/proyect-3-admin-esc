import {useContext, useState} from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import image02 from "../img/click.png";
import Buttonmu from '@mui/material/Button';
import { UserContext } from "../../context/UserContext";




function NavBar () {
    const { user} = useContext(UserContext)
    const {logout} = useContext(UserContext)
    const { pathname } = useLocation();
    console.log(pathname)

return ( 

<NavContainer>
        <Navbar className="navbar text-light styleNuevonav" expand="lg">
            <Container>
                {pathname === '/LoginPage' ?
(
            <Navbar.Brand>
                <div className="logo d-flex text-light">
                    <img src={image02} className="image02"/>
                    <h2 className="text-light">AdminClick</h2>
                </div>
            </Navbar.Brand>
            ) : ( 
        <>
            <Navbar.Brand>
                <div className="logo d-flex text-light">
                    <img src={image02} className="image02"/>
                    <h2 className="text-light"> AdminClick</h2>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-light">
                {
                    user?.admin?
                <Nav.Link href="/habilitacion" className="text-light" >HABILITACION</Nav.Link>
                :null
                }
                <Nav.Link href="/PrincipalPage" className="text-light" >PAGINA PRINCIPAL</Nav.Link>
                <Nav.Link href="/StudentsPage" className="text-light" >ALUMNOS</Nav.Link>
                <Nav.Link href="/CoursesDetail" className="text-light" >CURSOS</Nav.Link>
                
                <Buttonmu onClick={logout} className="text-light" variant="text">CERRAR SESION</Buttonmu>
            </Nav>
            </Navbar.Collapse>
        </>
)}
            </Container>
        </Navbar>
        </NavContainer>
        );
    };


const NavContainer = styled.nav`

width: 100vw;
.font{
    color: #f8f8f8;
}
.navbar{
    
    background-color: #4897b1;
    width: 100vw;
}
.logo{
    margin-right: 5rem;
}

h2{ margin-top: 30px;
    justify-content: center;
    align-items: center;
    color: #050505;
    font-weight: 300;
span{
        font-weight: bold;
    }
} 

.image02{
width: 100px;
height: 90px;
}
`

export default NavBar;
