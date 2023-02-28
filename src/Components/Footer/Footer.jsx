// import React from "react";
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
        <footer className='foot mt-5'>
            <FooterContainer>
            <div className='footer'>
                <nav className="row justify-content-center aling-items-center">
                    <ul className=" col-2  d-flex justify-content-center align-items-center"> 
                        <div className="  ">
                        <h4 className="text">AdminClick</h4>
                        <li className="text">Màs Info</li> 
                        <li className="text">Seguinos en Redes
                        <br />
                        <BsFacebook/>
                        <BsInstagram/>
                        <BsGoogle/>
                        </li> 
                        </div>
                    </ul>   
                </nav>
            </div>
            </FooterContainer>
        </footer>
        </>
    );
}

export default Footer;



