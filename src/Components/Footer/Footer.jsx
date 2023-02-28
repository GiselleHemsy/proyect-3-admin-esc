// import React from "react";
import styled from "styled-components";
import {BsFacebook,BsInstagram,BsGoogle} from 'react-icons/bs'



const Footer = () => {
    const FooterContainer = styled.div`
    body{
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

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
    .foot{
        
        padding: 1em 0;
        margin-top: auto;
    }

`
    
    return ( 
        <>
        <footer className='foot'>
            <FooterContainer>
            <div className='footer'>
                <nav className="row d-flex justify-content-center aling-items-center">
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



