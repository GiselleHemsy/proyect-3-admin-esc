import React from "react";
import styled from "styled-components";
import {BsFacebook,BsInstagram,BsGoogle} from 'react-icons/bs'



const Footer = () => {
    const FooterContainer = styled.div`
    
        background-color: #4897b1;
        width: 100vw;
        .text{
            color: white ;
        }
        .socialMedia{
        margin-left: auto;
        }
        svg{
            height: 30px;
            width: 30px;
        }
        `
    return ( 
        <>
        <footer className='foot fixed-bottom'>
            <FooterContainer>
            <div className='footer'>
                <nav className="row justify-content-center aling-items-center">
                    <ul className=" col-2 justify-content-center align-items-center"> 
                        <h4 className="text">AdminClick</h4>
                        <li className="text">Màs Info</li> 
                        <li className="text">Seguinos en Redes
                        <div className="d-flex ">
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsGoogle/>
                        </div>
                        </li> 
                    </ul>   
                </nav>
            </div>
            </FooterContainer>
        </footer>
        </>
    );
}

export default Footer;



