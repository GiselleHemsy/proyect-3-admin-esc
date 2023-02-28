import React,{useContext, useState} from "react";
import styled from "styled-components";
import { UserContext } from "../../context/UserContext";
import BurguerButton from "../BurguerButton/BurguerButton";
import GeneralModal from "../GeneralModal/GeneralModal";
import image02 from "../img/click.png";
import AddTeacherForm from "../TeacherForm/AddTeacherForm"
// import './Navbar.css'



function NavBar () {
    // const [collapsed, setCollapsed] = useState(true)
    const [clicked, setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    const {logout} = useContext(UserContext)
    // return (
      //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      //     <div class="container">
      //     <div className="logo d-flex">
      //        <img src={image02} className="image02"/>
      //        <h2> AdminClick</h2>
      //       </div>
      //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
      //         {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
      //           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      //         </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      //           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      //         </svg>
      //         )}
      //       </button>
      //       <div class="collapse navbar-collapse" id="navbarNav">
      //         <ul class="navbar-nav">
      //           <li class="nav-item">
      //           <a href="/PrincipalPage" onClick={handleClick}>PAGINA PRINCIPAL</a>
      //           </li>
      //           <li class="nav-item">
      //           <a href="/SubjectPage" onClick={handleClick}>MATERIAS</a>
      //           </li>
      //           <li class="nav-item">
      //           <a href="/CoursePage" onClick={handleClick}>CURSOS</a>
      //           </li>
      //           <li class="nav-item">
      //           <a href="/LoginPage" onClick={handleClick}>LOGIN</a>
      //           </li>
      //           <li class="nav-item">
      //           <GeneralModal buttonText="AGREGAR" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="light"/>
      //           </li>
      //         </ul>
      //         </div>
      //       </div>
      //   </nav>
      // );




    
    return ( 
    <>
        <NavContainer>
            <div className="logo d-flex">
            <img src={image02} className="image02"/>
            <h2> AdminClick</h2>
            </div>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <GeneralModal buttonText="AGREGAR" modalTitle="Agregar un usuario"  modalBody={<AddTeacherForm/>} variant="light"/>
                <a href="/Admin" onClick={handleClick}>ADMIN</a>
                {/* <a href="/D:\Program_Full_stack\TP-3 Admin Escolar\TP03\proyect-3-admin-esc\src\Components\TeacherForm\AddTeacherForm.jsx" onClick={handleClick}>AGREGAR</a> */}
                <a href="" onClick={handleClick}>HABILITAR</a>
                <a href="/PrincipalPage" onClick={handleClick}>PAGINA PRINCIPAL</a>
                <button onClick={logout}>Logout</button>
                <a href="/StudentsPage" onClick={handleClick}>ALUMNOS</a>
                {/* <a href="/TeachersPage" onClick={handleClick}>PROFESORES</a> */}
                {/* <a href="/SubjectPage" onClick={handleClick}>MATERIAS</a> */}
                <a href="/CoursePage" onClick={handleClick}>CURSOS</a>
                <a href="/LoginPage" onClick={handleClick}>LOGIN</a>
            </div>
            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className = {`initial ${clicked ? 'active' : ''}`}></BgDiv>
        </NavContainer>
    </>
    );
}



const NavContainer = styled.nav`
h2{ margin-top: 30px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 300;
    span{font-weight: bold;
    }
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