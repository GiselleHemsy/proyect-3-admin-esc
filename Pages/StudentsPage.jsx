import { useState } from "react";
import { Col, Container, Row, Button} from "react-bootstrap";
import AddStudentForm from "../src/Components/AddStudentForm/AddStudentForm";
import DeleteConfirmation from "../src/Components/DeleteConfirmation/DeleteConfirmation";
import GeneralModal from "../src/Components/GeneralModal/GeneralModal";
import GeneralTable from "../src/Components/GeneralTable/GeneralTable";

const StudentsPage = () => {
  const [selected, setSelected] = useState("");
  const students = [
    {
      "id": "12346",
      "name": "Ana",
      "role": "admin",
      "añoCursado": "1°",
      "estadoCuota":"true"
    },
    {
      "id": "1245",
      "name": "Agostina Mercado",
      "role": "admin",
      "añoCursado": "2°",
      "estadoCuota":"true"
    },
    {
      "id": "1414141",
      "name": "Lara Mercado",
      "role": "admin",
      "añoCursado": "3°",
      "estadoCuota":"true"
    }]
    const deleteUser=async()=>{
      console.log("soy la funcion deleteUser")

      // try {
      //   await axiosBack.delete("/users/"+selected);
      //   getUsers();
      // } catch (error) {
      //   if(!selected){
      //   toast.error("Para continuar selecciona un usuario")}
      //   else{
      //   toast.error("Error, intente nuevamente mas tarde")
      // }}
    }


  return ( 
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <GeneralModal buttonText="Agregar" modalTitle="Agregar un usuario"  modalBody={<AddStudentForm/>} variant="primary"/>
          <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<h1>cuerpo del modal</h1>} variant="warning"/>
          <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<DeleteConfirmation deleteUser={deleteUser}/>} variant="danger"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <GeneralTable setSelected={setSelected} selected={selected} headings={["Expte/ID", "Nombre", "Role", "Año de cursado","Cuota al dia"]} items={students}/>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentsPage;