import React from "react";
import styled from "styled-components";
import {BsFacebook,BsInstagram,BsGoogle} from "react-icons/bs";
import { Link } from "react-router-dom";
import image02 from "../img/click.png";




const Footer = () => {
    const FooterContainer = styled.div`
    .stylemedia{
        font-size: 1.6rem;
    }
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

.image02{
    width: 25%;
}

#footer-page a:link,#footer-page a:visited,#footer-page a:active {
    color:white;
    text-decoration:none;
}

#footer-page a:hover{
    color:#0D6EFD;
}

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
                            <Link to="/*" className="fb"><BsFacebook className="stylemedia" /></Link>
                            <Link to="/*" className="inst"><BsInstagram className="stylemedia" /></Link>
                            <Link to="/*" className="gl"><BsGoogle className="stylemedia" /></Link> 
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
}

export default Footer;



