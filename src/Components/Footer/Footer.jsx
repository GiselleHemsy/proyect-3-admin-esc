import React from "react";
import { NavLink } from "react-bootstrap";
import styled from "styled-components";



const Footer = () => {
    const FooterContainer = styled.div`
        background-color: #333;
        .text{
            color: white ;
        }
        
    `
    return ( 
        <>
        <footer className='foot'>
            <FooterContainer>
            <div className='container'>
                <nav className="row">
                    <NavLink to='/' className= 'col-12 col-md3 d-flex align-items-center justify-content-center'>
                    <img src='./schoolname' className='mx-2' width='100'/>
                    </NavLink>
                    <ul className=" col-12 col-md-3 list-unstyled"> 
                        <li className="text"> title</li>
                        <li className="text">info del sitio</li>
                        <li></li>
                    </ul>
                </nav>
            </div>
            </FooterContainer>
        </footer>
        </>
    );
}

export default Footer;



