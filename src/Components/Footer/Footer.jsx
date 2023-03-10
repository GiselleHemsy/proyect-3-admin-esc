import React from "react";
import styled from "styled-components";
import {BsFacebook,BsInstagram,BsGoogle} from "react-icons/bs";
import { Link } from "react-router-dom";
import image02 from "../img/click.png";




const Footer = () => {
    const FooterContainer = styled.div`
    width: 100% !important;
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

#footer-page{
    height: 35vh;
    width: 100vw;
    background-color: #4897b1;
}

/* Background colors */
.bg-page-primary{
    background-color:#4897b1;
}

.bg-page-persianRed{
    background-color:#4897b1;
}

.container-copyright{
    color: #f3f3f3;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
}





/* Imagen del footer */
.image02{
    width: 25%;
}


/*Quitar color y subrayado a etiquetas a*/
#footer-page a:link,#footer-page a:visited,#footer-page a:active {
    color:white;
    text-decoration:none;
}

#footer-page a:hover{
    color:#0D6EFD;
}


/* Animacion link de redes */
.animation-redes:hover{
    transform:scale(1.2);
    transition-duration: 250ms;
    color: #4897b1;
}

@media screen and (min-width: 0px) {
    #footer-page{
        height: auto;
    }
}

@media screen and (min-width:768px) {
    .image02{
        width: 30%;
    }
    #footer-page{
        height: auto;
    }
}

@media screen and (min-width:992px) {
    .image02{
        height: 30%;
    }
    .text-page-smaller{
        font-size:1em!important;
    }
    #footer-page{
        height: auto;
    }
}
.logo01{
height: 2px;
}
.logo02{
height: 2px;
}    

.path{
    height: 50px;
    width: 50px;
}

    
    
    
    /* body{
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
    .footer{
        
        padding: 1em 0;
        margin-top: auto;
    } */

`
    return(
        <>
                    <FooterContainer fixed="bottom" >
        <footer fixed="bottom"id="footer-page" className="container-fluid bg-page-primary">
                        <div className="row d-lg-flex justify-content-around align-items-center bg-page-primary py-4">
                            <div className="col-md-5 col-lg-3 order-0 d-flex justify-content-center">
                                <img src={image02} className="image02"/>
                            </div>
                            <div className="logo01 w-100 order-1 bg-page-persianRed my-4 d-md-none"></div>
                            <div className="logo02 w-100 order-3 bg-page-persianRed my-4 d-lg-none"></div>
                            <div className="redes d-flex order-4 order-lg-2 justify-content-around align-items-center col-lg-3">
                            <Link to="/*" className="fb"><BsFacebook/></Link>
                            <Link to="/*" className="inst"><BsInstagram/></Link>
                            <Link to="/*" className="gl"><BsGoogle/></Link> 
                            </div>
                            <div className=" w-100 order-5 bg-page-persianRed mt-4 mb-2 d-lg-none"></div>
                            <div className="text01 col-md-5 col-lg-3 order-2 order-lg-3 flex-column">
                                <p className="text-general-page fs-5 text-center text-lg-end"><Link to="/*">CONTÁCTANOS</Link></p>
                            </div>
                        </div>
                        <div className="container-copyright">
                                <p>Copyright 2022 - Todos los derechos reservados ADMINCLICK.</p>
                    </div>
                </footer>
                    </FooterContainer>
        </>
)
    // return ( 
    //     <>
    //     <footer className='footer'>
    //         <FooterContainer>
    //         <div>
    //             <nav className="row d-flex justify-content-center aling-items-center">
    //                 <ul className=" col-2  d-flex justify-content-center align-items-center"> 
    //                     <div className="  ">
    //                     <h4 className="text">AdminClick</h4>
    //                     <li className="text">Màs Info</li> 
    //                     <li className="text">Seguinos en Redes
    //                     <br />
    //                     <BsFacebook/>
    //                     <BsInstagram/>
    //                     <BsGoogle/>
    //                     </li> 
    //                     </div>
    //                 </ul>   
    //             </nav>
    //         </div>
    //         </FooterContainer>
    //     </footer>
    //     </>
    // );
}

export default Footer;



