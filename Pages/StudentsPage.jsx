import { Col, Container, Row,Table, Spinner} from "react-bootstrap";
import AddStudentForm from "../src/Components/AddStudentForm/AddStudentForm";
import EditStudentForm from "../src/Components/EditStudentForm/EditStudentForm";
import DeleteConfirmation from "../src/Components/DeleteConfirmation/DeleteConfirmation";
import GeneralModal from "../src/Components/GeneralModal/GeneralModal";
import axiosBack from "../src/config/axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import "../src/index.css"




const StudentsPage = () => {
  const [selected, setSelected] = useState("");
  const [state, setState] = useState([]);
  const getStudents =async()=>{
    try {
      const {data }= await axiosBack.get("/students");
      setState(data.students);  
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getStudents();
  },[])
return(
  <>
    <Container className="my-2 py-2">
      <Row>
        <Col className="d-flex justify-content-end">
            <GeneralModal buttonText="Agregar" modalTitle="Agregar un usuario"  modalBody={<AddStudentForm/>} variant="primary"/>
            <GeneralModal buttonText="Editar" modalTitle="Editar un usuario"  modalBody={<EditStudentForm getStudents={getStudents} selected={selected}  />} variant="warning"/>
            <GeneralModal buttonText="Eliminar" modalTitle="Eliminar un usuario"  modalBody={<DeleteConfirmation deleteUser={deleteUser}/>} variant="danger"/>
        </Col>
      </Row>
      <Row>
        <Col>
        {state.length!==0?
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Estado de Cuota</th>
            </tr>
          </thead>
          <tbody>
            {state.map((student) => 
              <tr key={student.dni} onClick={()=>setSelected(student.email)} className={selected==student.email? "rowSelected" :""}> 
                <td>{student.expediente}</td>
                <td>{student.name}</td>
                <td>{student.lastname}</td>
                <td>{student.course}</td>
                <td>{student.cuota}</td>
              </tr>
            )
            }
          </tbody>
          </Table>
        :
          <div>
            <Spinner animation="border"/>
          </div>
      }
          
        </Col>
      </Row>
    </Container>
    </>
)
}
  
    const deleteUser=async()=>{
      console.log("soy la funcion deleteUser")
    //   try {
    //     await axiosBack.delete("/users/"+selected);
    //     getUsers();
    //   } catch (error) {
    //     if(!selected){
    //     toast.error("Para continuar selecciona un usuario")}
    //     else{
    //     toast.error("Error, intente nuevamente mas tarde")
    //   }}
}


export default StudentsPage;


