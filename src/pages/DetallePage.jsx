import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonDetail from "../components/buttonDetail";


const navigate = useNavigate();

  const handleClick = ()=>{
    navigate ('/curso')
  }

const DetallePage = () =>{ 
return(
    <>
   <h1>Detalle del cursado</h1>
   <Container fluid>
     <Row>
      <Col xs={12} sm={4} className= "bg warning"> 
       <ButtonDetail onClick={handleClick}/>
      </Col>
     </Row>
   </Container>
</>
 );
}

export default DetallePage;
