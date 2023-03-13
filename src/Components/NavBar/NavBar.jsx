import React,{useContext, useState} from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import image02 from "../img/click.png";



function NavBar () {
    // const [clicked, setClicked] = useState(false)
    // const handleClick = ()=>{
    // setClicked(!clicked)
    // }
    const {logout} = useContext(UserContext)
    const { pathname } = useLocation();
    console.log(pathname)

return ( 

        <NavContainer>
            <Navbar className="navbar" expand="lg">
                <Container>
                    {pathname === '/LoginPage' ?
            (
            <Navbar.Brand>
                <div className="logo d-flex">
                    <img src={image02} className="image02"/>
                    <h2>AdminClick</h2>
                </div>
            </Navbar.Brand>
            ) : ( 
        <>
            <Navbar.Brand>
                <div className="logo d-flex">
                    <img src={image02} className="image02"/>
                    <h2> AdminClick</h2>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/PrincipalPage">PAGINA PRINCIPAL</Nav.Link>
                <Nav.Link href="/StudentsPage">ALUMNOS</Nav.Link>
                <Nav.Link href="/CoursePage">CURSOS</Nav.Link>
                <Button className="buttonlogout" onClick={logout} variant="light">Logout</Button>
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

.font{
    color: #f8f8f8;
}
.navbar{
    
    background-color: #4897b1;
    
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
