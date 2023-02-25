import React,{useState} from "react";
import styled from "styled-components";
import BurguerButton from "../BurguerButton/BurguerButton";
import image02 from "../img/click.png"



function NavBar () {
    const [clicked, setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked(!clicked)
    }
    return ( 
    <>
        <NavContainer>
            <div className="logo d-flex">
            <img src={image02} className="image02"/>
            <h2> AdminClick</h2>
            </div>
            <div className={`links ${clicked ? 'active' : ''}`}>
                <a href="/Admin" onClick={handleClick}>ADMIN</a>
                <a href="" onClick={handleClick}>HABILITAR</a>
                <a href="/PrincipalPage" onClick={handleClick}>PAGINA PRINCIPAL</a>
                <a href="/StudentsPage" onClick={handleClick}>ALUMNOS</a>
                {/* <a href="/TeachersPage" onClick={handleClick}>PROFESORES</a> */}
                <a href="/SubjectPage" onClick={handleClick}>MATERIAS</a>
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
        font-size: 2rem;
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
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    transition: 1s;
    a{
        font-size: 2rem;
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
    max-width: 1000px;
    background-color: #4897b1;
    position: absolute;
    top:-700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
        
        
        
    }
    
    `
    export default NavBar; 